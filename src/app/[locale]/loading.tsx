import {Spinner} from "@nextui-org/react";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="relative h-screen w-full flex justify-center items-center">
        <div className="relative flex flex-col gap-3 justify-center items-center max-w-screen-md
            text-medium text-center
        ">
            <Spinner size='lg' 
                color="warning"
            />
            <h1 className="text-[var(--foreground)] text-4xl">Estoy entrenando una IA en este servidor... paciencia, por favor!😅</h1>
        </div>
    </div>
}