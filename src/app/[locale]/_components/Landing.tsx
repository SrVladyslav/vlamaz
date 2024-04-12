'use client'

import React from 'react'
import { Button } from '@nextui-org/react';
import {CTA_BUTTON_PROPS, BUTTON_PROPS} from '@/config/styles'
import Image from 'next/image';
import VioletLabel from '@/app/[locale]/_components/Label';

const Landing =()=>{
    return <div className='relative w-full flex justify-center px-5'>
        <div className='relative grid grid-cols-1 md:grid-cols-2 
            md:h-[100vh] md:h-[100dvh]
            pt-[70px] w-full max-w-screen-xl
        '>
            <div className='relative p-5 flex items-center justify-center
                h-[300px] md:h-full w-full
            '>
                <div className='relative w-full h-full'>
                    <Image alt="Landing Vlad"
                        src={'/landing.webp'}
                        fill 
                        className='absolute object-contain
                            drop-shadow-[0_35px_35px_rgba(249,173,5,0.1)]
                        '
                    />
                </div>
            </div>
            <div className='relative flex justify-center md:justify-start'>
                <div className='flex flex-col items-left justify-center
                    gap-5 items-center md:items-start
                '>
                    <VioletLabel/>
                    <h1 className='text-5xl sm:text-7xl font-extrabold duration-100
                        text-center md:text-left'
                    >Hello <span className='text-nowrap'>there👋🏻!</span></h1>
                    {/* <h1 className='text-7xl font-extrabold'>Vladyslav Mazurkevych</h1> */}
                    <h2 className='text-center md:text-left text-[var(--foreground-3)]
                        max-w-readable50
                    '>I&apos;m Vladyslav Mazurkevych, graduated in computer science with a special love for machine learning and startups.</h2>
                    <div className='relative flex flex-row gap-2'>
                        <Button 
                            onPress={()=>{console.log("HOLA")}}
                            {...CTA_BUTTON_PROPS}
                            className='text-white bg-[var(--btn-cta)] font-medium'
                        >Let&apos;s Talk</Button>
                        <Button 
                            {...BUTTON_PROPS}
                            className='text-white bg-[var(--btn-cta-2)] font-medium'
                        >Hire Me Now</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Landing