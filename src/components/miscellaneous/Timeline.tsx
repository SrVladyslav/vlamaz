'use client'

import React, {useRef, useEffect}from 'react'
import Image from 'next/image'
import { Button, Link } from '@nextui-org/react';
import {LIGHT_BUTTON_PROPS} from '@/config/styles'
import { FaArrowRight } from "react-icons/fa6";

import { motion, useInView, useAnimation } from "framer-motion"
import { useTranslation } from 'react-i18next';


const Card =({
    item, delay
}:{
    item:any,
    delay?:number
})=>{
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, {once:true})
    const cardControls = useAnimation()

    useEffect(()=>{
        if(isInView) {
            cardControls.start('visible')
        }
    },[isInView])

    return <div ref={cardRef} className='relative h-full w-full'>
        <motion.div
            variants={{
                hidden: {opacity: 0, x:-20},
                visible: {opacity: 1, x:0}
            }}
            initial="hidden"
            animate={cardControls}
            transition={{ duration: 0.5, delay: delay? delay+0.25: 0.25}}
            className='relative flex flex-col gap-5 overflow-hidden'
        >
            <span className='relative border border-[var(--foreground)]
                w-fit h-fit py-1 px-3 rounded-full text-sm
            '>
                {item?.time_range}
            </span>
            <div className='relative w-full gap-5 h-fit
                grid grid-cols-1 md:grid-cols-[1fr_auto]
            '>
                <div className='relative w-full h-fit flex flex-col gap-3'>
                    <h2 className='text-2xl font-medium text-[var(--foreground-2)]'>{item?.title}</h2>
                    <p className='relative text-[var(--foreground-4)]'>{item?.description}</p>
                </div>
                {item?.tech_icons && item?.tech_icons.length > 0?
                    <div className='relative flex flex-row gap-x-5 gap-y-3 items-center flex-wrap
                        bg-[var(--background-2)] p-5 rounded-2xl w-full md:max-w-[150px] justify-center
                    '>
                        {item?.tech_icons.map((icon:any, key:any)=>{
                            return <div className='relative min-h-[21px] h-[21px] min-w-[21px]'>
                                <Image
                                    alt={"Tech: "+ icon}
                                    src={icon}
                                    fill
                                    className='relative h-full w-full object-contain 
                                        min-h-[21px] h-full min-w-[21px] w-full'
                                />
                            </div>
                        })}
                    </div>
                    :<div></div>
                }
            </div>
            <div className='relative w-fit'>
                <Button {...LIGHT_BUTTON_PROPS}
                    className='text-[var(--foreground)] font-medium bg-transparent 
                        data-[hover=true]:bg-[var(--background-2)]
                        data-[hover=true]:text-[var(--foreground-2)]
                    '
                    href={item?.more? item.more: "/"}
                    as={Link}
                    isExternal
                >
                    <div className='relative flex flex-row gap-2 items-center'>
                        <span>Saber más</span>
                        <FaArrowRight/>
                    </div>
                </Button>
            </div>
            {/* {JSON.stringify(item)} */}
        </motion.div>
    </div>
}
const Line =({
    isLong, delay, isTop
}:{
    isLong?:boolean,
    delay?:number,
    isTop?:boolean
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
    
    return <div ref={lineRef}
        className={`relative w-[4px] h-full overflow-hidden 
            ${isTop?"rounded-b-[2px]":"rounded-[2px]"}
            ${isLong?"min-h-20":"min-h-0"}
        `}>
        <motion.div 
            variants={{
                hidden: {height:"0"},
                visible: {height: "100%"}
            }}
            initial="hidden"
            animate={lineControls}
            transition={{ 
                duration: 0.5, 
                delay: delay? delay + 0.25 : 0.25, 
                ease: "easeIn"
            }}
            className={`
                absolute top-0 left-0 w-full h-full
                bg-gradient-to-br from-[var(--blue)] to-[var(--blue-2)]
            `}
        />
    </div>
}

const Circle =({
    logo, isStart
}:{
    logo:string|any, 
    isStart?:boolean
})=>{
    const cicleRef = useRef(null)
    const isInView = useInView(cicleRef, {once:true})
    const cicleControls = useAnimation()

    useEffect(()=>{
        if(isInView) {
            // Fire the animation
            cicleControls.start('visible')
        }
    },[isInView])

    return <div className='relative' ref={cicleRef}>
        <motion.div 
            variants={{
                hidden: {opacity: 0, y:15},
                visible: {opacity: 1, y:0}
            }}
            initial="hidden"
            animate={cicleControls}
            transition={{ duration: 0.5, delay: 0.25}}
            className='relative h-8 w-8 min-h-8 min-w-8 rounded-full p-1'
        >
            <div className='relative h-full w-full'>
                <Image
                    alt={'Logo of work'}
                    src={logo}
                    fill
                    className='relative object-contain overflow-hidden h-full w-full
                    drop-shadow-[1px_3px_15px_var(--semitransparent-bg-3)]'
                />
            </div>
        </motion.div>
    </div>
}

const Fragment = (
    {children, item, lineDelay, isStart}
    :{children?:any, item?:any, lineDelay?:number, isStart?:boolean}
)=>{
    const { t } = useTranslation();

    return <div className='relative grid grid-cols-[auto_1fr]'>
        <div className={`relative flex flex-col pt-5
            h-full w-full items-center justify-center
            pr-0 md:pr-10 duration-100
            ${isStart?"gap-0":"gap-5"}
        `}>
            {isStart
                ?<>
                    <div className='relative h-8 w-8 min-h-8 min-w-8 rounded-full p-1 flex
                        justify-center items-end pb-0
                    '>
                        <div className='relative bg-gradient-to-r from-[var(--blue)] to-[var(--blue-2)]
                            h-5 w-5 min-h-5 min-w-5 rounded-full p-1
                        '>
                            <div className='relative bg-[var(--background)] h-full w-full rounded-full'/>
                        </div>
                    </div>
                    <Line delay={0.15} isTop/>
                </>
                :<>
                    <Circle logo={item?.company_logo_src}/>
                    <Line delay={lineDelay}/>
                </>
            }
        </div>
        <div className='relative pt-5 pb-20 pl-5 flex flex-col gap-6 h-fit w-full'>
            {isStart
                ?<div className='relative pt-2'>
                    <h1 className='text-[var(--foreground)]
                        text-4xl md:text-5xl font-medium
                    '>{t('timeline-t-1', {ns:"background"})}<span className='text-[var(--yellow)]'>{t('timeline-t-2', {ns:"background"})}</span></h1>
                </div>
                :<Card item={item} delay={lineDelay}/>
            }
            {children}
        </div>
    </div>
}

const Timeline =({timedata}:{timedata:any})=>{
    return <div className='relative w-full h-fit flex justify-center mt-20'>
        <div className='relative w-full h-fit flex flex-col max-w-screen-md'>
            <Fragment isStart/>
            {timedata?.map((item:any, key:any)=>{
                return (
                    <Fragment
                        key={key}
                        item={item}
                        lineDelay={key * 0.5}
                    >

                    </Fragment>
                )
            })}
        </div>
    </div>
}

export default Timeline