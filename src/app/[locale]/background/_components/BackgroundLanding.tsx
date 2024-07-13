'use client'

import React, {useRef, useEffect} from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import NextSectionBtn from '@/components/buttons/NextSectionBtn'
import { useTranslation } from 'react-i18next';
import { LazyMotion, domAnimation, m as motion} from 'framer-motion'

const BackgroundLanding =()=>{
    const { t } = useTranslation();

    return <div className='relative w-full flex justify-center px-5'>
        <div className='relative flex flex-col gap-5 items-center justify-center
                min-h-[70vh] min-h-[70dvh] md:min-h-[100vh] md:min-h-[100dvh]
                pt-[70px] pb-[110px] md:pb-[80px] w-full max-w-screen-xl
            '
        >
            <LazyMotion features={domAnimation}>
                <motion.div 
                    variants={{
                        hidden: {opacity: 0, scale: 0.80},
                        visible: {opacity: 1, scale: 1}
                    }}
                    initial={{opacity: 0, scale: 0.80}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.75, delay: 0.25}}
                    className='relative mt-10 rounded-2xl px-5 pt-5 max-w-readable75'
                >
                    <RiDoubleQuotesL className='absolute top-[2px] left-[2px] fill-[var(--foreground-3)]
                        h-[47px] w-[47px] min-h-[47px] min-w-[47px] opacity-[0.2]
                    '/>
                    <h1 className='text-2xl md:text-2xl lg:text-4xl font-medium 
                        duration-100 text-center text-[var(--foreground-5)]
                    '>
                        {t("phrase-1",{ns:"background"})}<span className="text-[var(--yellow)] font-semibold">{t("phrase-2",{ns:"background"})}</span>{t("phrase-3",{ns:"background"})}<span className="text-[var(--yellow)] font-semibold">{t("phrase-4",{ns:"background"})}</span>.
                    </h1>
                </motion.div>
            </LazyMotion>
            <div className='absolute bottom-0 left-0 w-full h-[160px]
                flex items-center justify-center 
            '>
                <NextSectionBtn
                    scrollId={'timeline'}
                    topOffset={0}
                />
            </div>
        </div>
    </div>
}

export default BackgroundLanding