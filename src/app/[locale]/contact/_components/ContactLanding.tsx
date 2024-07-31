'use client'

import React from 'react'

import ContactForm from '@/app/[locale]/contact/_components/ContactForm'
import GithubIcon from '@/components/icons/GithubIcon'
import LinkedinIcon from '@/components/icons/LinkedinIcon'
import { useTranslation } from 'react-i18next'


const ContactLanding =()=>{
    const {t} = useTranslation()

    return <div className='relative w-full flex justify-center items-center px-5 pb-20'>
        <div className='relative grid grid-cols-1 md:grid-cols-2 
            md:h-[100vh] md:h-[100dvh] gap-10 sm:gap-5 md:gap-10
            pt-[170px] w-full max-w-screen-xl mt-10
        '>
            <div className='relative w-full h-fit flex flex-col gap-5
                items-center md:items-end
                text-center md:text-right
            '>
                <div className='relative max-w-readable40'>
                    <h2 className='relative text-[var(--foreground-5)] text-4xl md:text-5xl font-medium'>{t('title-1','contact')}<span className='text-[var(--yellow)]'>{t('title-2','contact')}</span>{t('title-3','contact')}<span className='text-[var(--yellow)]'>{t('title-4','contact')}</span>{t('title-5','contact')}<span className='text-[var(--yellow)]'>{t('title-6','contact')}</span>{t('title-7','contact')}</h2>
                </div>
                <p className='max-w-readable40 relative tracking-wider text-[var(--foreground-4)]'>{t('description','contact')}</p>
                <div className='relative flex flex-row gap-3 justify-center md:justify-end'>
                    <LinkedinIcon white isExternal href='https://www.linkedin.com/in/vladyslav-mazurkevych/'/>
                    <GithubIcon white isExternal href='https://github.com/SrVladyslav'/>
                </div>
            </div>
            <div className='relative w-full h-fit flex flex-col gap-5'>
                <ContactForm/>
            </div>
        </div>
    </div>
}

export default ContactLanding