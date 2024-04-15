'use client'

import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import NextSectionBtn from '@/components/buttons/NextSectionBtn'
import { useTranslation } from 'react-i18next';

const BackgroundLanding =()=>{
    const { t } = useTranslation();

    return <div className='relative w-full flex justify-center px-5'>
        <div className='relative flex flex-col gap-5 items-center justify-center
            min-h-[70vh] min-h-[70dvh] md:min-h-[100vh] md:min-h-[100dvh]
            pt-[70px] pb-[110px] md:pb-[80px] w-full max-w-screen-xl
        '>
            {/* <h1 className='text-6xl md:text-7xl lg:text-8xl font-extrabold 
                duration-100 text-center md:text-left text-[var(--foreground)]
            '>
                Mi <span className='text-[var(--yellow)]'>trayectoria</span>
            </h1> */}
            <div className='relative mt-10 rounded-2xl px-5 pt-5 max-w-readable75'>
                <RiDoubleQuotesL className='absolute top-[2px] left-[2px] fill-[var(--foreground-3)]
                    h-[47px] w-[47px] min-h-[47px] min-w-[47px] opacity-[0.2]
                '/>
                <h1 className='text-2xl md:text-2xl lg:text-4xl font-medium 
                    duration-100 text-center text-[var(--foreground)]
                '>
                    {/* El progreso tecnológico desplaza competencias, <span className="text-[var(--yellow)] font-semibold">el aprendizaje continuo</span> con una visión global te permite <span className="text-[var(--yellow)] font-semibold">adaptarte</span>. */}
                    {t("phrase-1",{ns:"background"})}<span className="text-[var(--yellow)] font-semibold">{t("phrase-2",{ns:"background"})}</span>{t("phrase-3",{ns:"background"})}<span className="text-[var(--yellow)] font-semibold">{t("phrase-4",{ns:"background"})}</span>.
                </h1>
            </div>
            <div className='absolute bottom-0 left-0 w-full h-[80px]
                flex items-center justify-center 
            '>
                <NextSectionBtn
                    scrollId={'background-biography'}
                    topOffset={70}
                />
            </div>
        </div>
    </div>
}

export default BackgroundLanding