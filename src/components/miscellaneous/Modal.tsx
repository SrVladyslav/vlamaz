'use client'

import React, { useState, useCallback, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { useAllowScrollWithBackup } from '@/hooks/useAllowScrollWithBackup'
import { IoClose } from "react-icons/io5";
import { Button } from '@nextui-org/react';
import {BUTTON_PROPS} from '@/config/styles'

const useMediaQuery = (width:number) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e:any) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useLayoutEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        if (media.addEventListener) {
            media.addEventListener("change", updateTarget);
        }
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => {
            media.removeEventListener('change', updateTarget);
        }
    }, [width, updateTarget]);

    return targetReached;
};

const Popup = ({
    children, 
    title,
    endContent,
    isOpen, 
    onClose, 
    isDismissable, 
    isCloseBtn,
    isCloseBtnDefault,
    isCloseBtnDefaultText,
    isMobileVersion
}:{
    isOpen:boolean, 
    onClose:any, 
    children?:any, 
    title?:string,
    endContent?:any,
    isDismissable?:boolean, 
    isCloseBtn?:boolean,
    isCloseBtnDefault?:boolean,
    isCloseBtnDefaultText?:boolean,
    isMobileVersion?:boolean
}) => {
    // isCloseBtn <true|false>: Show close btn
    // isBgClosing <true|false>: When true, closes when bg is clicked outside  
    // isOpen <true|false>: Show the dialog
    // isMobileVersion <true|false>: 
    // onClose <Callback>: Function to set the dialog visibility (on isOpen)
    // onExternalClose <Function>: Function that will be executed when isOpen changes

    // title <string>: The tittle which will be shown on top
    // endContent <string|Component>: Code for the component that will be shown
    //                             on the bottom
    // children <Components>: Basically the body of the poput 
    const isMobileScreen = useMediaQuery(640)
    const {activateScroll, deactivateScroll} = useAllowScrollWithBackup(true)

    function handleClose(){
        try{
            onClose(false)
        }catch(e){
            throw new Error("onClose is missing")
        }finally{
            activateScroll()
            // document.body.classList.remove("no-bg-scroll")
        }
    }

    // Handling drag functionalities
    const [dragging, setDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const handleDragStart = (e:any) => {
        setDragging(true);
        if(e.clientY){
            setStartY(e.clientY);
            // alert(`Points: ${JSON.stringify(e.clientY)}`)
        }else{
            setStartY(e.touches[0].clientY);
        }
    };
    const handleDrag = (e:any) => {
        if (dragging) {
            let dragged_distance = 0
            if(e.clientY){
                dragged_distance = e.clientY
            }else{
                dragged_distance = e.touches[0].clientY
            }
            let dragged = (dragged_distance-startY)
            // alert(dragged)
            // console.log("DRAGGING:",startY," - ", e.clientY, "- Dragged:", dragged)
            if ( dragged > 7) {
                setDragging(false)
                handleClose()
            }
        }
    };

    useLayoutEffect(()=>{
        if(!!isOpen){
            deactivateScroll()
        }
    },[isOpen])    

    return (
        <AnimatePresence
            key="POP0"
        >
            {/* classNames={"fixed top-0 left-0 w-full h-full z-[9998] pointer-events-none"} */}
            {isOpen && (
                <motion.div
                    key='Pop1'
                    className={`
                        fixed top-0 left-0 ease-in-out min-w-full min-h-full 
                        bg-[rgba(0,0,0,0.6)] 
                        backdrop-blur-sm
                        pointer-events-auto z-[9998]
                    `}
                        // bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.2
                    }}
                    onClick={()=>{
                        if(isDismissable){
                            handleClose()
                        }
                    }}
                />  
            )}
            {isOpen && (
                <motion.div
                    key="Pop2"
                    tabIndex={-1}
                    className={`
                        pointer-events-none
                        fixed top-0 left-0 ease-in-out w-full h-full z-[9999] flex justify-center
                        ${isMobileScreen && isMobileVersion?
                            "p-0 items-end"
                            :"p-[20px] items-center"
                        }
                    `}
                    initial={{ 
                        opacity: 0, 
                        y: isMobileScreen && isMobileVersion?"100%":"0%" 
                    }}
                    animate={{
                        opacity: 1, 
                        y: "0%" 
                    }}
                    exit={{ 
                        opacity: 0, 
                        y: isMobileScreen && isMobileVersion?"100%":"0%"
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "linear"
                    }}
                >
                    {/* z-[9995] max-h-[95vh] */}
                    <div className={`
                        pointer-events-auto
                        relative ease-in-out w-full h-fit 
                        z-[9995] max-h-[95%]
                        ${isCloseBtn?"pt-10":"pt-10"}
                        max-w-screen-md bg-[var(--background)] 
                        flex justify-center border-[2px] border-[var(--background-2)]
                        flex-col items-center
                        ${isMobileScreen && isMobileVersion?
                            "rounded-t-2xl rounded-b-none pb-12"
                            :"rounded-2xl pb-5"
                        }
                        `} 
                    > 
                        {/* Draggable line to close*/}
                        {isCloseBtn&&
                            (isMobileVersion && isMobileScreen?
                                <div 
                                    className={`absolute flex justify-center items-center
                                                h-10 w-full top-0 left-[50%] translate-x-[-50%] 
                                                rounded-[3px] z-[9996]
                                                ${dragging?"cursor-grabbing":"cursor-grab"}
                                            `}
                                    draggable="true"
                                    onDragStart={handleDragStart}
                                    onTouchStart={(e)=>{handleDragStart(e)}}
                                    onDragOver={handleDrag}
                                    onTouchMove={handleDrag}
                                    // onClick={()=>{alert("Cerrando")}}
                                >
                                    <div className='relative bg-[var(--foreground-3)] w-full max-w-[150px] h-[4px]
                                        rounded-[3px] pointer-events-none'/>
                                </div>
                                :<div className='absolute top-0 left-0 w-full h-10'>
                                    <div className='absolute top-2 right-2 bg-[var(--background)] w-fit h-fit p-1 
                                        rounded-full group cursor-pointer'
                                        onClick={handleClose}
                                    >
                                        <IoClose className='relative icon fill-[var(--gray)] 
                                            group-hover:fill-[var(--red)] pointer-events-none duration-75'/>
                                    </div>
                                </div>    
                            )
                        }
                        {/* The content itself */}
                        <div className='relative w-full h-fit overflow-x-hidden duration-100
                            overflow-y-auto h-full slider-bar-design px-5 sm:px-10 pt-6 sm:pt-0
                            pb-5
                        '>
                            {!!title&&
                                <div className='relative text-2xl text-[var(--foreground-2)] 
                                    font-semibold pb-6'>
                                    {title}
                                </div>
                            }
                            {children}
                        </div>
                        {/* Bottom shit */}
                        {endContent &&
                            <div className='relative w-full pt-5 gap-3 px-5 sm:px-10 flex justify-center'>
                                {isCloseBtnDefault&&
                                    <Button 
                                        {...BUTTON_PROPS}
                                        className='text-[var(--foreground-4)] font-medium bg-[var(--background-2)] 
                                            data-[hover=true]:bg-[var(--background-2)] w-full sm:w-fit
                                            data-[hover=true]:text-[var(--foreground-2)]'
                                        onPress={handleClose}    
                                        fullWidth
                                    >
                                        {isCloseBtnDefaultText? isCloseBtnDefaultText: 'Cerrar'}
                                    </Button>
                                }
                                {endContent}
                            </div>
                        }
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default React.memo(Popup);