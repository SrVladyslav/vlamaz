'use client'

import React, {useRef, useEffect}from 'react'
import Image from 'next/image'
import { motion, useInView, useAnimation } from "framer-motion"

const Line = ({
    isLong, isTop, isBottom
}:{
    isLong?:boolean,
    isBottom?:boolean,
    isTop?:boolean,
})=>{
    const lineRef = useRef(null)
    const isInView = useInView(lineRef, {once:true})
    const lineControls = useAnimation()

    useEffect(()=>{
        if(isInView) {
            // Fire the animation
            lineControls.start('visible')
        }
    },[isInView])

    return <div 
        className='relative min-w-[48px] h-full w-full
            flex justify-center'
        ref={lineRef}
    >
        <motion.div 
            variants={{
                hidden: {height:0},
                visible: {height: 100}
            }}
            initial="hidden"
            animate={lineControls}
            transition={{ duration: 1.5, delay: 0.25}}
            className={`
                ${isLong
                    ?'min-h-20'
                    :'min-h-5'
                }
                relative h-full w-[4px] 
                bg-gradient-to-r
                from-[var(--blue)] to-[var(--blue-2)]
            `}
                // bg-[var(--background)]
                // bg-[var(--yellow)]
        ></motion.div>
    </div>
    
}
const Circle =({logo}:{logo:string|any})=>{
    return <div className='relative w-fit h-full flex flex-col items-center 
            justify-center pl-0 pr-5 md:px-5
        '>
        <Line/>
        <div className='relative overflow-hidden
            p-[3px] md:p-[4px]
            from-[var(--blue)] to-[var(--blue-2)]
            rounded-full flex items-center justify-center
            h-[48px] w-[48px] min-h-[48px] min-w-[48px]
        '>
            <div className='relative h-full w-full p-1.5
                drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]    
            rounded-full'>
                <div className='relative h-full w-full'>
                    <Image
                        alt={'Logo of work'}
                        src={logo}
                        fill
                        className='relative object-contain overflow-hidden
                            h-full w-full
                        '
                    />
                </div>
            </div>
        </div>
        <Line/>
    </div>
}
const Card =({item, classNames}:{item:any, classNames?:any})=>{
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})

    const cardControls = useAnimation()

    useEffect(()=>{
        if(isInView) {
            // Fire the animation
            cardControls.start('visible')
        }
    },[isInView])

    return <div
        ref={ref} 
        className={`${classNames} h-fit w-full 
            items-center justify-center relative flex
        `}>
        <motion.div 
            variants={{
                hidden: {opacity: 0, y:80},
                visible: {opacity: 1, y:0}
            }}
            initial="hidden"
            animate={cardControls}
            transition={{ duration: 0.5, delay: 0.25}}
            className={`${classNames} bg-[red] h-fit w-full overflow-hidden
                my-5 bg-[var(--background)] px-5 py-6 rounded-2xl flex flex-col
                items-center justify-center gap-2
                drop-shadow-[0_35px_35px_var(--semitransparent-bg-2)]
            `}
        >
            <h4 className='text-xs text-[var(--foreground-3)] 
                border-[2px] border-[var(--foreground-3)] py-1 px-2 rounded-full    
            '>{item?.time_range || ''}</h4>
            <h3 className='text-2xl font-medium text-[var(--foreground-2)]'>{item?.title || ''}</h3>
            <p className='text-base pt-2 text-center text-[var(--foreground-3)]'>{item?.description || ''}</p>
        </motion.div>
    </div>
}

const Fragment =({item, side=0, onlyLine}:{item?:any, side?: number, onlyLine?:boolean})=>{
    return <div className='relative w-full duration-100 items-center
        grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr]
    '>
        {onlyLine
            ?<>
                <div className='hidden md:flex'/>
                <Line isLong/>
                <div>

                </div>
            </>
            :side % 2 == 0 
                ?<>
                    <Card item={item} classNames={"hidden md:flex"}/>
                    <Circle logo={item?.company_logo_src}/>
                    <Card item={item} classNames={"flex md:hidden"}/>
                    <div className='hidden md:flex'/>
                </>
                :<>
                    <div className='hidden md:flex'/>
                    <Circle logo={item?.company_logo_src}/>
                    <Card item={item}/>
                </>
        }
    </div>
}

//    -  |  line  | -
// left? | circle | right?
//    -  |  line  | -
const Timeline =({timedata}:{timedata:any})=>{
    return <div className='relative w-full h-fit flex justify-center'>
        <div className='relative w-full h-fit flex flex-col max-w-screen-md'>
            <Fragment onlyLine/>
            {timedata?.map((item:any)=>{
                return (
                    <Fragment
                        item={item}
                        side={item?.id}
                    />
                    )
                })}
            <Fragment onlyLine/>
        </div>
    </div>
}

export default Timeline