'use client'

import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"
import { Link } from '@nextui-org/react';

const CookiesSection =()=>{
    const { t } = useTranslation();

    return (
        <div
            id="cookies" 
            className='relative w-full flex justify-center px-5 bg-[var(--background-3)] 
                py-20 pt-32 sm:pt-40
        '>
            <div className='relative gap-10 w-full max-w-screen-xl duration-100
                grid grid-cols-[1fr] sm:grid-cols-[250px_1fr] lg:grid-cols-[400px_1fr]'
            >
                <motion.div 
                    initial={{opacity: 0, x:-20}}
                    whileInView={{opacity: 1, x:0}}
                    viewport={{ once: true, amount: 0.0 }}
                    transition={{ duration: 0.35, delay: 0.15 }}
                    className='z-[666] left-0 sm:relative h-fit sm:h-auto duration-75'
                >
                    <div className='relative sm:sticky sm:top-[90px] sm:left-0 
                        text-[var(--foreground-5)] text-4xl md:text-5xl font-medium
                    '>
                        <div className='flex flex-row gap-2 items-center'>
                            <h3>{t('title', {ns:'cookies'})}</h3><FaArrowRight className='hidden sm:block icon pt-1'/>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x:20}}
                    whileInView={{opacity: 1, x:0}}
                    viewport={{ once: true, amount: 0.0 }}
                    transition={{ duration: 0.35, delay: 0.15 }} 
                    className='relative flex flex-col gap-6 max-w-readable75'
                >
                    <p className='tracking-wider text-[var(--foreground-4)]'>
                        {t('p-1', {ns:'cookies'})}
                    </p>
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-1', {ns:'cookies'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-2', {ns:'cookies'})}
                        </p>
                    </section>
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-3', {ns:'cookies'})}
                        </h2>
                        <div className='relative flex flex-row gap-3 items-start'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                {t('p-3', {ns:'cookies'})}
                            </span>
                        </div>
                    </section>
                    {/* <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-4', {ns:'cookies'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-4', {ns:'cookies'})}
                        </p>
                        <div className='relative flex flex-row gap-3 items-start'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                Google analytics.
                            </span>
                        </div>
                    </section> */}
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-5', {ns:'cookies'})}
                        </h2>
                        <div className='relative flex flex-row gap-3 items-start'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <Link href='https://support.google.com/chrome/answer/95647?hl=es' isExternal>
                                <span className='tracking-wider text-[var(--foreground-4)]'>
                                    Google Chrome
                                </span>
                            </Link>
                        </div>
                        <div className='relative flex flex-row gap-3 items-start'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <Link href='http://support.apple.com/kb/HT1677?viewlocale=es_ES' isExternal>
                                <span className='tracking-wider text-[var(--foreground-4)]'>
                                    Safari
                                </span>
                            </Link>
                        </div>
                        <div className='relative flex flex-row gap-3 items-start'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <Link href='http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we' isExternal>
                                <span className='tracking-wider text-[var(--foreground-4)]'>
                                    Firefox
                                </span>
                            </Link>
                        </div>
                        <div className='relative flex flex-row gap-3 items-start'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <Link href='https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' isExternal>
                                <span className='tracking-wider text-[var(--foreground-4)]'>
                                    Microsoft Chromium Edge
                                </span>
                            </Link>
                        </div>
                    </section>
                </motion.div>
            </div>
        </div>
    )
}

export default CookiesSection