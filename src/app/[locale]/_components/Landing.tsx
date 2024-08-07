'use client'

import React from 'react'
import { Button, Link } from '@nextui-org/react';
import {CTA_BUTTON_PROPS, BUTTON_PROPS} from '@/config/styles'
import Image from 'next/image';
import VioletLabel from '@/app/[locale]/_components/Label';

import { useTranslation } from 'react-i18next';
// import { motion } from 'framer-motion'
import { LazyMotion, domAnimation, m as motion} from "framer-motion"

const Landing =()=>{
    const { t } = useTranslation();

    return <div className='relative w-full flex justify-center px-5'>
        <div className='relative grid grid-cols-1 md:grid-cols-2 
            h-fit md:h-[100vh] md:h-[100dvh]
            pt-[70px] w-full max-w-screen-xl
        '>
            <div className='relative px-5 pb-5 flex items-center justify-center
                h-[200px] sm:h-[250px] md:h-full w-full
            '>
                <LazyMotion features={domAnimation}>
                    <motion.div 
                        initial={{opacity: 0, scale:0.5}}
                        whileInView={{opacity: 1, scale:1}}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.25, delay: 0.25}}
                        className='relative w-full h-full flex justify-center items-center'
                    >
                        <Image alt="Landing Vlad"
                            src={'/images/landing-lg.webp'}
                            fill 
                            sizes="(max-width: 768px) 720px, (max-width: 320px) 280px, 100vw"
                            className='absolute object-contain z-[3]
                                drop-shadow-[0_35px_35px_rgba(249,173,5,0.1)]
                            '
                        />
                        <div className='yellow-gradient absolute z-[0] right-1/2
                            top-1/4 w-[50%] h-[50%] rounded-full opacity-[0.2]
                        '/>
                        {/* <img 
                            srcSet="/images/landing-sm.webp 320w, ./images/landing-md.webp 768w, ./images/landing-lg.webp 1024w"
                            sizes="(max-width: 320px) 280px,
                                (max-width: 768px) 720px,
                                1024px"
                            src="/images/landing-sm.webp" alt="Landing Vlad" 
                            className='absolute object-contain
                                md:hiddens object-cover 
                                h-full w-auto md:w-full md:h-auto
                                drop-shadow-[0_35px_35px_rgba(249,173,5,0.1)]
                            '
                        /> */}
                    </motion.div>
                </LazyMotion>
            </div>
            <div className='relative flex justify-center md:justify-start'>
                <div className='flex flex-col items-left justify-center
                        gap-5 items-center md:items-start relative
                    '
                >
                    <LazyMotion features={domAnimation}>
                        <motion.div
                            initial={{opacity: 0, y:-30}}
                            whileInView={{opacity: 1, y:0}}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.25, delay: 1.5}}
                        >
                            <VioletLabel/>
                        </motion.div>
                    </LazyMotion>
                    <div className='relative'>
                        <LazyMotion features={domAnimation}>
                            <motion.h1 
                                initial={{opacity: 0, y:30}}
                                whileInView={{opacity: 1, y:0}}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.75, delay: 0.25}}
                                className='text-6xl md:text-7xl lg:text-8xl font-extrabold duration-100
                                text-center md:text-left text-[var(--foreground-5)]'
                            >
                                {t('title-1',{ns:'home'})}
                            </motion.h1>
                        </LazyMotion>
                        <LazyMotion features={domAnimation}>
                            <motion.h1 
                                initial={{opacity: 0, y:30}}
                                whileInView={{opacity: 1, y:0}}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.75, delay: 0.5}}
                                className='text-6xl md:text-7xl lg:text-8xl font-extrabold duration-100
                                text-center md:text-left text-[var(--yellow)]'
                            >
                                {t('title-2',{ns:'home'})}<span className='text-[var(--foreground-5)]'>!</span>
                            </motion.h1>
                        </LazyMotion>
                    </div>
                    <LazyMotion features={domAnimation}>
                        <motion.h2 
                            initial={{opacity: 0, y:30}}
                            whileInView={{opacity: 1, y:0}}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.75, delay: 0.75}}
                            className='text-center md:text-left text-[var(--foreground-3)]
                            max-w-readable50 tracking-wider
                        '>{t('subtitle',{ns:'home'})}</motion.h2>
                    </LazyMotion>

                    <div className='relative flex flex-row gap-3 sm:gap-5'>
                        <LazyMotion features={domAnimation}>
                            <motion.div 
                                initial={{opacity: 0, y:20}}
                                whileInView={{opacity: 1, y:0}}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.25, delay: 1.5}}
                                className='relative w-full flex justify-center'
                            >
                                <Button 
                                    as={Link}
                                    href='/contact'
                                    {...CTA_BUTTON_PROPS}
                                    className='text-white bg-[var(--btn-cta)] tracking-wider font-bold
                                        data-[hover=true]:text-[var(--black)]
                                    '
                                >{t('meeting',{ns:'home'})}</Button>
                            </motion.div>
                        </LazyMotion>
                        <LazyMotion features={domAnimation}>
                            <motion.div 
                                initial={{opacity: 0, y:20}}
                                whileInView={{opacity: 1, y:0}}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.25, delay: 1.25}}
                                className='relative w-full flex justify-center'
                            >
                                <Button 
                                    scrollSmooth
                                    href={'/background#background'}
                                    as={Link}
                                    {...BUTTON_PROPS}
                                    className='text-white bg-[var(--btn-cta-2)] tracking-wider font-bold data-[hover=true]:text-[var(--yellow)]'
                                >{t("my-projects", {ns:"home"})}</Button>
                            </motion.div>
                        </LazyMotion>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Landing