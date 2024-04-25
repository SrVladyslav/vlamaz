'use client'

import React from 'react'
import { Button, Link } from '@nextui-org/react';
import {CTA_BUTTON_PROPS, BUTTON_PROPS} from '@/config/styles'
import Image from 'next/image';
import VioletLabel from '@/app/[locale]/_components/Label';

import { useTranslation } from 'react-i18next';

const Landing =()=>{
    const { t } = useTranslation();


    return <div className='relative w-full flex justify-center px-5'>
        <div className='relative grid grid-cols-1 md:grid-cols-2 
            md:h-[100vh] md:h-[100dvh]
            pt-[70px] w-full max-w-screen-xl
        '>
            <div className='relative px-5 pb-5 flex items-center justify-center
                h-[250px] md:h-full w-full
            '>
                <div className='relative w-full h-full'>
                    <Image alt="Landing Vlad"
                        src={'/images/landing.webp'}
                        fill 
                        className='absolute object-contain
                            drop-shadow-[0_35px_35px_rgba(249,173,5,0.1)]
                        '
                    />
                </div>
            </div>
            <div className='relative flex justify-center md:justify-start'>
                <div 
                    className='flex flex-col items-left justify-center
                        gap-5 items-center md:items-start
                    '
                >
                    <VioletLabel/>
                    <h1 className='text-6xl md:text-7xl lg:text-8xl font-extrabold duration-100
                        text-center md:text-left'
                    >{t('title-1',{ns:'home'})} <span className='text-nowrap text-[var(--yellow)]'>{t('title-2',{ns:'home'})}</span>!</h1>
                    <h2 className='text-center md:text-left text-[var(--foreground-3)]
                        max-w-readable50 tracking-wider
                    '>{t('subtitle',{ns:'home'})}</h2>
                    <div className='relative flex flex-row gap-2'>
                        <Button 
                            onPress={()=>{console.log("HOLA")}}
                            {...CTA_BUTTON_PROPS}
                            className='text-white bg-[var(--btn-cta)] tracking-wide font-medium'
                        >{t('meeting',{ns:'home'})}</Button>
                        <Button 
                            // onPress={()=>{
                            //     router.push("/background?#background");
                            //     // scrollToHashWithOffset('background',50)
                            // }}
                            scrollSmooth
                            href={'/background#background'}
                            as={Link}
                            {...BUTTON_PROPS}
                            className='text-white bg-[var(--btn-cta-2)] tracking-wide font-medium'
                        >{t("my-projects", {ns:"home"})}</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Landing