'use client'

import React from 'react'
import Image from 'next/image'
import { Button, Link } from '@nextui-org/react';
import {LIGHT_BUTTON_PROPS} from '@/config/styles'
import { FaArrowRight } from "react-icons/fa6";
import GithubIcon from '@/components/icons/GithubIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import LinkIcon from '@/components/icons/LinkIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';

import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';
import { useModalStore } from '@/store/useModalStore';


const BodyContent =({dots}:{dots:any})=>{
    return <div className='relative w-full flex flex-col gap-5'>
        {dots.map((dot:string, key:number)=>{
            return <div key={key}
                className='relative flex flex-row gap-5 items-start'
            >
                <FaArrowRight className='icon-mini mt-[4px] fill-[var(--foreground)]'/>
                <span className='tracking-wide text-[var(--foreground-4)]'>{dot}</span>
            </div>
        })}
    </div>
}

const Card =({
    item, delay
}:{
    item:any,
    delay?:number
})=>{

    const {openFullModal } = useModalStore()
    const openModal =(title:string, moreInfo:any)=>{
        console.log('hola')
        openFullModal(
            title, // title
            <BodyContent dots={moreInfo}/>, // End Content
            ()=>(<div>Hola</div>), // children
        )
    }
    const {t} = useTranslation()
    return <div className='relative h-full w-full'>
        <motion.div
            initial={{opacity: 0, x:-20}}
            whileInView={{opacity: 1, x:0}}
            viewport={{ once: true, amount: 0.4 }}            
            transition={{ duration: 0.5, delay: 0.25}}
            // transition={{ duration: 0.5, delay: delay? delay+0.25: 0.25}}
            className='relative flex flex-col gap-6 overflow-hidden'
        >
            <span className='relative border border-[var(--foreground)]
                w-fit h-fit py-1 px-3 rounded-full text-sm
            '>
                {item?.time_range}
            </span>
            <div className='relative w-full gap-6 h-fit
                grid grid-cols-1 md:grid-cols-[1fr_auto]
            '>
                <div className='relative w-full h-fit flex flex-col gap-5'>
                    <h2 className='text-2xl font-medium text-[var(--foreground-2)]'>{item?.title}</h2>
                    <p className='relative text-[var(--foreground-4)] tracking-wide'>{item?.description}</p>
                </div>
                {item?.tech_icons && item?.tech_icons.length > 0?
                    <div className='relative flex flex-row gap-x-5 gap-y-3 items-center flex-wrap
                        bg-[var(--background-3)] p-5 rounded-2xl w-full md:max-w-[150px] justify-center
                    '>
                        {item?.tech_icons.map((icon:any, key:any)=>{
                            return <div 
                                key={key}
                                className='relative min-h-[21px] h-[21px] min-w-[21px]'>
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
            <div className='relative w-fit flex flex-row gap-3 items-center'>
                {item?.externalLinks?.map((link:any,key:any)=>{
                    return <div key={key}>
                        {link?.id=="github"
                            ?<GithubIcon href={link?.href} isExternal key={key}/>
                            :<></>
                        }
                        {link?.id=="linkedin"
                            ?<LinkedinIcon href={link?.href} isExternal key={key}/>
                            :<></>
                        }
                        {link?.id=="instagram"
                            ?<InstagramIcon href={link?.href} isExternal key={key}/>
                            :<></>
                        }
                        {link?.id=="link"
                            ?<LinkIcon href={link?.href} isExternal key={key}/>
                            :<></>
                        }
                    </div>
                })}
                {item?.more_info && item?.more_info.length > 0 &&
                    <Button {...LIGHT_BUTTON_PROPS}
                        className='text-[var(--foreground-2)] font-medium bg-transparent 
                            data-[hover=true]:bg-[var(--background-2)]
                            data-[hover=true]:text-[var(--foreground-2)]
                        '
                        onPress={()=>{openModal(item?.title, item?.more_info)}}
                    >
                        <div className='relative flex flex-row gap-2 items-center'>
                            <span>{t('my-contrib',{ns:"background"})}</span>
                            <FaArrowRight/>
                        </div>
                    </Button>
                }
            </div>
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
    return <div
        className={`relative w-[4px] h-full overflow-hidden 
            ${isTop?"rounded-b-[2px]":"rounded-[2px]"}
            ${isLong?"min-h-20":"min-h-0"}
        `}>
        <motion.div 
            initial={{height:"0"}}
            whileInView={{height: "100%"}}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ 
                duration: 0.5, 
                delay: 0.25, 
                // delay: delay? delay + 0.25 : 0.25, 
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

    return <div className='relative'>
        <motion.div 
            initial={{opacity: 0, y:15}}
            whileInView={{opacity: 1, y:0}}
            viewport={{ once: true, amount: 0.3 }}
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
    {children, item, lineDelay, isStart, isEnd, id}
    :{children?:any, item?:any, lineDelay?:number, isStart?:boolean, isEnd?:boolean, id?:string}
)=>{
    const { t } = useTranslation();

    return <div className='relative grid grid-cols-[auto_1fr]'>
        <div className={`relative flex flex-col
            h-full w-full items-center
            pr-0 md:pr-10 duration-100
            ${isStart || isEnd?"gap-0":"gap-5"}
            ${isEnd ?"pt-0 justify-start":"pt-5 justify-center"}
        `} id="background">
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
                :isEnd
                    ?<>
                        <div className='relative h-8 w-8 min-h-8 min-w-8 rounded-full p-1 flex flex-col
                            justify-start items-center pt-0
                        '>
                            <div className='relative bg-gradient-to-r from-[var(--blue)] to-[var(--blue-2)]
                                h-5 w-5 min-h-5 min-w-5 rounded-full p-1
                            '>
                                <div className='relative bg-[var(--background)] h-full w-full rounded-full'/>
                            </div>
                        </div>
                    </>
                    :<>
                        <Circle logo={item?.company_logo_src}/>
                        <Line delay={lineDelay}/>
                    </>
            }
        </div>
        <div className={`
            relative pb-20 pl-5 flex flex-col gap-6 h-fit w-full
            ${isEnd?"pt-0":"pt-5"}
        `}>
            {isStart
                ?<div className='relative pt-0'>
                    <h1 className='text-[var(--foreground-5)]
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
    const { t } = useTranslation();

    const endItem = {
        id:4,
        time_range: t("timeline-5-tr", {ns:"background"}), 
        title: t("timeline-5-t", {ns:"background"}),
        description: t("timeline-5-d", {ns:"background"}),
        company_logo_src:"",
        more:"",
        tech_icons: []
    }
    return <div className='relative w-full h-fit flex justify-center mt-20 mb-0'>
        <div className='relative w-full h-fit flex flex-col max-w-screen-md'>
            <Fragment isStart id="background"/>
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
            <Fragment isEnd item={endItem}/>
        </div>
    </div>
}

export default Timeline