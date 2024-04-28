'use client'

import React, {useRef, useEffect} from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import { motion, useInView, useAnimation } from "framer-motion"

const BiographySection =()=>{
    const { t } = useTranslation();

    const viewRef = useRef(null)
    const isInView = useInView(viewRef, {once:true})
    const titleControls = useAnimation()
    const descrControls = useAnimation()

    useEffect(()=>{
        if(isInView) {
            titleControls.start('visible')
            descrControls.start('visible')
        }
    },[isInView])

    return (
        <div
            id="background-biography" 
            className='relative w-full flex justify-center px-5 bg-[var(--background-3)] 
                py-20
        '>
            <div className='relative gap-10 w-full max-w-screen-xl duration-100
                grid grid-cols-[1fr] sm:grid-cols-[250px_1fr] lg:grid-cols-[400px_1fr]'
                ref={viewRef}
            >
                <motion.div 
                    variants={{
                        hidden: {opacity: 0, x:-20},
                        visible: {opacity: 1, x:0}
                    }}
                    initial="hidden"
                    animate={titleControls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className='z-[666] left-0 sm:relative h-fit sm:h-auto duration-75'
                >
                    <div className='relative sm:sticky sm:top-[90px] sm:left-0 
                        text-[var(--foreground-5)] text-4xl md:text-5xl font-medium
                    '>
                        <div className='flex flex-row gap-2 items-center'>
                            <h3>{t("about-t-1",{ns:"background"})}</h3><FaArrowRight className='hidden sm:block icon pt-1'/>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={{
                        hidden: {opacity: 0, x:20},
                        visible: {opacity: 1, x:0}
                    }}
                    initial="hidden"
                    animate={titleControls}
                    transition={{ duration: 0.5, delay: 0.75 }} 
                    className='relative flex flex-col gap-6 max-w-readable75'
                >
                    <p className='tracking-wider text-[var(--foreground-4)]'>
                        {t("bio-1",{ns:"background"})}<b><a href="https://www.upv.es/" className='text-[var(--yellow)]'>{t("bio-2",{ns:"background"})}</a></b>
                        {t("bio-3",{ns:"background"})}<b>{t("bio-4",{ns:"background"})}</b>{t("bio-5",{ns:"background"})}
                    </p>
                    <p className='tracking-wider text-[var(--foreground-4)]'>{t("bio-6",{ns:"background"})}</p>
                    <p className='tracking-wider text-[var(--foreground-4)]'>{t("bio-7",{ns:"background"})}</p>
                    <p className='tracking-wider text-[var(--foreground-4)]'>{t("bio-8",{ns:"background"})}</p>
                    <p className='tracking-wider text-[var(--foreground-4)]'>
                        {t("bio-9",{ns:"background"})}
                        <div className='pl-5 pt-3'>
                            <div className='relative tracking-wider flex flex-row gap-5'><FaArrowRight className='icon-mini mt-[3px]'/><span>
                                {t("bio-10",{ns:"background"})}
                            </span></div>
                            <div className='relative tracking-wider flex flex-row gap-5'><FaArrowRight className='icon-mini mt-[3px]'/><span>
                                {t("bio-11",{ns:"background"})}
                            </span></div>
                            <div className='relative tracking-wider flex flex-row gap-5'><FaArrowRight className='icon-mini mt-[3px]'/><span>
                                {t("bio-12",{ns:"background"})}
                            </span></div>
                        </div>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default BiographySection