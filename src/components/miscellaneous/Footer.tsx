'use client'

import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer =()=>{
    const { t } = useTranslation();

    return <div className='relative w-full flex justify-center 
        bg-[var(--background-2)] pb-12'>
        <div className='relative w-full max-w-screen-xl px-5 py-10 flex
            items-center justify-center flex-col gap-10
        '>
            <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr]
                w-full gap-10 md:gap-5
            '>
                <div className='col-span-1 sm:col-span-2 md:col-span-1'>
                    <h2 className='text-lg font-medium'>Vlamaz</h2>
                    <div>
                        <p>
                        El progreso tecnológico desplaza competencias, el aprendizaje continuo con una visión global te permite adaptarte.
                        </p>
                    </div>
                </div>
                <div className='relative flex flex-col gap-3'>
                    <h2 className='text-lg font-medium'>Navbar</h2>
                    <div className='relative w-full flex flex-col gap-2'>
                        <span className='text-sm whitespace-nowrap'>{t('terms-policy', {ns:"navbar"})}</span>
                        <span className='text-sm whitespace-nowrap'>{t('privacy-policy', {ns:"navbar"})}</span>
                        <span className='text-sm whitespace-nowrap'>{t('cookies-policy', {ns:"navbar"})}</span>
                    </div>
                </div>
                <div className='relative flex flex-col gap-3'>
                    <h2 className='text-lg font-medium'>Legal</h2>
                    <div className='relative w-full flex flex-col gap-2'>
                        <span className='text-sm whitespace-nowrap'>{t('terms-policy', {ns:"navbar"})}</span>
                        <span className='text-sm whitespace-nowrap'>{t('privacy-policy', {ns:"navbar"})}</span>
                        <span className='text-sm whitespace-nowrap'>{t('cookies-policy', {ns:"navbar"})}</span>
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-[var(--background)]'/>
            <span className='text-xs'>{t('created-with-love', {ns:"navbar"})}</span>
        </div>
    </div>
}

export default Footer