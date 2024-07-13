'use client'

import React from 'react'
import { LazyMotion, domAnimation, m as motion} from 'framer-motion'
import { useTranslation } from 'react-i18next';

import { FaArrowRight } from "react-icons/fa6";
import { MdRocketLaunch } from "react-icons/md";

import { Button, Link } from '@nextui-org/react';
import { BUTTON_PROPS} from '@/config/styles'
import Image from 'next/image';

const LearnVlamaz =()=>{
    const {t} = useTranslation()

    return <div className='relative w-full h-fit duration-100 px-5 md:px-10 pb-20 flex justify-center'>
        <LazyMotion features={domAnimation}>
            <motion.div 
                initial={{opacity: 0, y:30}}
                whileInView={{opacity: 1, y:0}}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: 0.25}}
                className='relative p-5 md:p-10 py-10 sm:py-20 md:py-20 w-full max-w-screen-xl
                    flex flex-col rounded-3xl duration-100 items-center
                    gap-10 text-center tracking-wider bg-[red] overflow-hidden
                    bg-gradient-to-br from-[var(--yellow-2)] to-[var(--yellow)]
                '
                    // bg-gradient-to-br from-[#0159FF] via-[#129BF6] to-[var(--blue-2)]
            >
                {/* <Image
                    alt="BG Hexagons"
                    src='/images/hexagons.svg'
                    fill
                    className='w-full h-full object-cover' 
                /> */}
                <div className='relative w-full h-fit grid grid-cols-1 sm:grid-cols-[5fr_3fr] duration-100'>
                    <div className='relative flex flex-col items-center sm:items-start gap-5 text-center sm:text-left 
                        row-start-2 sm:row-start-auto pl-0 md:pl-5'>
                        <div className='relative w-full flex flex-col gap-2 mt-10 sm:mt-0 items-center sm:items-start'>
                            <div className='relative text-xs border-[2px] border-[white] w-fit rounded-full
                                py-1 px-3 font-semibold
                            '>
                                <span className='text-[white] font-semibold'>{t('learn-learn',{ns:'misc'})}</span>
                            </div>
                            <div className='relative font-medium text-[white] text-4xl md:text-5xl
                                text-center sm:text-left flex flex-row
                            '>
                                {t('learn-title',{ns:'misc'})} Vlamaz
                            </div>
                        </div>
                        <p className='tracking-wider text-[white] font-semibold max-w-readable50'>
                            {t('learn-description', {ns:'misc'})}
                        </p>
                        <Button 
                            scrollSmooth
                            href={'https://learn.vlamaz.com'}
                            as={Link}
                            {...BUTTON_PROPS}
                            className='text-white mt-1 bg-[var(--btn-cta-2)] tracking-wide font-medium data-[hover=true]:text-[var(--yellow)]'
                        >{t("learn-go", {ns:"misc"})} <FaArrowRight className='icon-mini'/></Button>
                    </div>
                    <div className='relative flex items-center justify-center row-start-1 sm:row-start-auto'>
                        <MdRocketLaunch className='fill-[white] w-auto h-full min-h-20'/>
                    </div>
                </div>
            </motion.div>
        </LazyMotion>
    </div>
}

export default LearnVlamaz