'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { Button, Link } from '@nextui-org/react'
import {CTA_BUTTON_PROPS} from '@/config/styles'
import PointsBackground from '@/components/miscellaneous/PointsBackground'
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next'

import { motion } from "framer-motion"

const LetsTalk =()=>{
    const { theme } = useTheme()
    const {t} = useTranslation()

    return <div className='relative w-full flex justify-center bg-[var(--background-2)]
        border-b-[1px] border-b-[var(--background)] select-none
    '>
        <PointsBackground color={theme == 'dark'?'#0055ff':'#aeaeb3'}/>
        <div 
            // ref={viewRef}
            className='relative w-full max-w-screen-md px-5 
                sm:px-10 py-32 sm:py-40 tracking-wider
                flex flex-col gap-8 items-center justify-center
            '
        >
            <motion.h3 
                initial={{opacity: 0, scale: 0.80}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2}}
                className='relative font-medium text-[var(--foreground-5)]
                    text-4xl md:text-5xl text-center
                '
            >
                <div className='relative w-full flex justify-center pb-5'>
                    <img src="./images/vlamaz.webp" alt="Logo" className='h-24 w-24 min-h-24 min-w-24'/>
                </div>
                {t('contact-1',{ns:'misc'})}<span className='text-[var(--yellow)] font-semibold'>{t('contact-2',{ns:'misc'})}</span>{t('contact-3',{ns:'misc'})}<span className='text-[var(--yellow)] font-semibold'>{t('contact-4',{ns:'misc'})}</span>
            {t('contact-5',{ns:'misc'})}<span className='text-[var(--yellow)] font-semibold'>{t('contact-6',{ns:'misc'})}</span>{t('contact-7',{ns:'misc'})}
            </motion.h3>
            <motion.div 
                initial={{opacity: 0, y:20}}
                whileInView={{opacity: 1, y:0}}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.75}}
                className='relative w-full flex justify-center'
            >
                <Button 
                    {...CTA_BUTTON_PROPS}
                    as={Link}
                    href='/contact'
                    className='text-[var(--foreground)] font-medium bg-transparent group duration-75
                        bg-[var(--background-2)] data-[hover=true]:text-[var(--foreground-2)] tracking-wider
                        border-[2px] border-[var(--foreground-2)] data-[hover=true]:border-[var(--foreground-2)]   
                    '
                >
                    <span>{t('contact-8',{ns:'misc'})}</span>
                    <FaArrowRight className='icon-mini mt-[0px] duration-75 fill-[var(--foreground)] group-hover:fill-[var(--foreground-2)]'/>
                </Button>
            </motion.div>
        </div>
    </div>
}

export default LetsTalk