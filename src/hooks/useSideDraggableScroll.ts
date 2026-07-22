// const ref = useRef(); 
// const { events } = useSideDraggableScroll(ref, {
//     decayRate: 0.96,
//     safeDisplacement: 11,
//     applyRubberBandEffect: true,
// });

import { MutableRefObject, useEffect, useLayoutEffect, useRef} from "react";

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type OptionsType = {
    decayRate?: number;
    safeDisplacement?: number;
    applyRubberBandEffect?: boolean;
    activeMouseButton?: "Left" | "Middle" | "Right";
    isMounted?: boolean;
};
  
type ReturnType = {
    events: {
        onMouseDown: (e: React.MouseEvent<HTMLElement>) => void;
    };
};

export function useSideDraggableScroll(
    ref: MutableRefObject<HTMLElement>,
    {
        decayRate = 0.96,
        safeDisplacement = 10,
        applyRubberBandEffect = false,
        activeMouseButton = "Left",
        isMounted = true,
    }:OptionsType = {}
): ReturnType {
    const internalState = useRef({
        isMouseDown: false,
        isDraggingX: false,
        initialMouseX: 0,
        lastMouseX: 0,
        scrollSpeedX: 0,
        lastScrollX: 0,
    });

    const mouseClicked = useRef(false)

    const isScrollableAlongX = useRef(false);
    const maxHorizontalScroll = useRef(0);
    const cursorStyleOfWrapperElement = useRef<string>("");
    const cursorStyleOfChildElements = useRef<string[]>([]);
    const transformStyleOfChildElements = useRef<string[]>([]);
    const transitionStyleOfChildElements = useRef<string[]>([]);

    const timing = (1 / 60) * 1000; // period of most monitors (60fps)

    useLayoutEffect(() => {
        if (isMounted && ref?.current) {
            isScrollableAlongX.current =
            window.getComputedStyle(ref.current).overflowX === "scroll";

            maxHorizontalScroll.current = ref.current.scrollWidth - ref.current.clientWidth;

            cursorStyleOfWrapperElement.current = window.getComputedStyle(ref.current).cursor;

            cursorStyleOfChildElements.current = [];
            transformStyleOfChildElements.current = [];
            transitionStyleOfChildElements.current = [];

            (ref.current.childNodes as NodeListOf<HTMLOptionElement>).forEach(
                (child: HTMLElement) => {
                    cursorStyleOfChildElements.current.push(
                        window.getComputedStyle(child).cursor
                    );

                    transformStyleOfChildElements.current.push(
                        window.getComputedStyle(child).transform === "none"
                        ? ""
                        : window.getComputedStyle(child).transform
                    );

                    transitionStyleOfChildElements.current.push(
                    window.getComputedStyle(child).transition === "none"
                        ? ""
                        : window.getComputedStyle(child).transition
                    );
                }
            );
        }
    }, [isMounted]);

    const runScroll = () => {
        const dx = internalState.current.scrollSpeedX * timing;
        const offsetX = ref.current.scrollLeft + dx;
        ref.current.scrollLeft = offsetX;  
        internalState.current.lastScrollX = offsetX;
    };

    const rubberBandCallback = (e: MouseEvent) => {
        const dx = e.clientX - internalState.current.initialMouseX;
        const { clientWidth, clientHeight } = ref.current;
        let displacementX = 0;

        if (isScrollableAlongX.current) {
            displacementX =
                0.3 * 
                clientWidth *
                Math.sign(dx) *
                Math.log10(1.0 + (0.5 * Math.abs(dx)) / clientWidth);
                // Math.log10(1.0 + (0.5 * Math.abs(dx)) / clientWidth);
        }

        (ref.current.childNodes as NodeListOf<HTMLOptionElement>).forEach(
            (child: HTMLElement) => {
                child.style.transform = `translate3d(${displacementX}px, 0px, 0px)`;  
                child.style.transition = "transform 0ms";  
            }
        );
    };

    const recoverChildStyle = () => {
        (ref.current.childNodes as NodeListOf<HTMLOptionElement>).forEach(
            (child: HTMLElement, i) => {
                child.style.transform = transformStyleOfChildElements.current[i];  
                child.style.transition = transitionStyleOfChildElements.current[i];  
            }
        );
    };

    const rubberBandAnimationTimer = useRef<NodeJS.Timeout | undefined>(undefined);
    const keepMovingX = useRef<NodeJS.Timer | any>(undefined);

    const callbackMomentum = () => {
        const minimumSpeedToTriggerMomentum = 0.05;

        keepMovingX.current = setInterval(() => {
            const lastScrollSpeedX = internalState.current.scrollSpeedX;
            const newScrollSpeedX = lastScrollSpeedX * decayRate;
            internalState.current.scrollSpeedX = newScrollSpeedX;

            const isAtLeft = ref.current.scrollLeft <= 0;
            const isAtRight = ref.current.scrollLeft >= maxHorizontalScroll.current;
            const hasReachedHorizontalEdges = isAtLeft || isAtRight;

            runScroll();

            if (
                Math.abs(newScrollSpeedX) < minimumSpeedToTriggerMomentum ||
                internalState.current.isMouseDown ||
                hasReachedHorizontalEdges
            ) {
                internalState.current.scrollSpeedX = 0;
                clearInterval(keepMovingX.current);
            }
        }, timing);

        internalState.current.isDraggingX = false;

        if (applyRubberBandEffect) {
            const transitionDurationInMilliseconds = 250; //250;

            (ref.current.childNodes as NodeListOf<HTMLOptionElement>).forEach(
                (child: HTMLElement) => {
                    child.style.transform = `translate3d(0px, 0px, 0px)`;  
                    child.style.transition = `transform ${transitionDurationInMilliseconds}ms`;  
                }
            );

            rubberBandAnimationTimer.current = setTimeout(
                recoverChildStyle,
                transitionDurationInMilliseconds
            );
        }
    };

    const preventClick = (e: Event) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        // e.stopPropagation();
    };

    const getIsMousePressActive = (buttonsCode: number) => {
        return (
            (activeMouseButton === "Left" && buttonsCode === 1) ||
            (activeMouseButton === "Middle" && buttonsCode === 4) ||
            (activeMouseButton === "Right" && buttonsCode === 2)
        );
    };

    const onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
        const isMouseActive = getIsMousePressActive(e.buttons);
        mouseClicked.current = true // to delete
        if (!isMouseActive) {
            return;
        }
    
        internalState.current.isMouseDown = true;
        internalState.current.lastMouseX = e.clientX;
        internalState.current.initialMouseX = e.clientX;
    };

    const onMouseUp = (e: MouseEvent) => {
        mouseClicked.current = false // to delete

        const isDragging = internalState.current.isDraggingX;
    
        const dx = internalState.current.initialMouseX - e.clientX;
    
        const isMotionIntentional = Math.abs(dx) > safeDisplacement;
    
        const isDraggingConfirmed = isDragging && isMotionIntentional;
    
        if (isDraggingConfirmed) {
            ref.current.childNodes.forEach((child) => {
                child.addEventListener("click", preventClick);
            });
        } else {
            ref.current.childNodes.forEach((child) => {
                child.removeEventListener("click", preventClick);
            });
        }
    
        internalState.current.isMouseDown = false;
        internalState.current.lastMouseX = 0;
    
        ref.current.style.cursor = cursorStyleOfWrapperElement.current;  
        (ref.current.childNodes as NodeListOf<HTMLOptionElement>).forEach(
            (child: HTMLElement, i) => {
                child.style.cursor = cursorStyleOfChildElements.current[i];  
            }
        );
    
        if (isDraggingConfirmed) {
            callbackMomentum();
        }
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!internalState.current.isMouseDown) {
            return;
        }
    
        e.preventDefault();
    
        const dx = internalState.current.lastMouseX - e.clientX;
        internalState.current.lastMouseX = e.clientX;
    
        internalState.current.scrollSpeedX = dx / timing;
        internalState.current.isDraggingX = true;
    
        ref.current.style.cursor = "grabbing";  
        (ref.current.childNodes as NodeListOf<HTMLOptionElement>).forEach(
            (child: HTMLElement) => {
                child.style.cursor = "grabbing";  
            }
        );
    
        const isAtLeft = ref.current.scrollLeft <= 0 && isScrollableAlongX.current;
        const isAtRight = ref.current.scrollLeft >= maxHorizontalScroll.current && isScrollableAlongX.current;
        const isAtAnEdge = isAtLeft || isAtRight;
    
        if (isAtAnEdge && applyRubberBandEffect) {
            rubberBandCallback(e);
        }
    
        runScroll();
    };

    const handleResize = () => {
        maxHorizontalScroll.current = ref.current.scrollWidth - ref.current.clientWidth;
    };

    // A brora
    const isPressed =()=>{
        return internalState.current.isMouseDown
    }

    useEffect(() => {
        if (isMounted) {
            window.addEventListener("mouseup", onMouseUp);
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("resize", handleResize);
        }
        return () => {
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", handleResize);
    
            clearInterval(keepMovingX.current);
            clearTimeout(rubberBandAnimationTimer.current);
        };
    }, [isMounted]);

    return {
        events: {
            onMouseDown,
        }
    }
}