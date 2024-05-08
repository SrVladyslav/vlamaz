'use client'

import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"
import { Link } from '@nextui-org/react';

const PrivacySection =()=>{
    const { t } = useTranslation();

    return (
        <div
            id="cookies" 
            className='relative w-full flex justify-center px-5 bg-[var(--background-1)] 
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
                            <h3>{t('title', {ns:'privacy'})}</h3><FaArrowRight className='hidden sm:block icon pt-1'/>
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
                        {t('p-1', {ns:'privacy'})}
                    </p>
                    <p className='tracking-wider text-[var(--foreground-4)]'>
                        {t('p-2', {ns:'privacy'})}
                    </p>
                    <p className='tracking-wider text-[var(--foreground-4)]'>
                        {t('p-3', {ns:'privacy'})} <Link isExternal href='/' className='tracking-wider text-[var(--foreground-2)]'>{t('legal_advise', {ns:'privacy'})}</Link>.
                    </p>
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-1', {ns:'privacy'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-4', {ns:'privacy'})} <Link isExternal href='/' className='tracking-wider text-[var(--foreground-2)]'>{t('legal_advise', {ns:'privacy'})}</Link>.
                        </p>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                {t('p-5', {ns:'privacy'})}
                            </span>
                        </div>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                {t('p-6', {ns:'privacy'})}
                            </span>
                        </div>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                {t('p-7', {ns:'privacy'})}
                            </span>
                        </div>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                {t('p-8', {ns:'privacy'})}
                            </span>
                        </div>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                {t('p-9', {ns:'privacy'})}
                            </span>
                        </div>
                    </section>
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-2', {ns:'privacy'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-10', {ns:'privacy'})} <Link isExternal href='/' className='tracking-wider text-[var(--foreground-2)]'>{t('legal_advise', {ns:'privacy'})}</Link>.
                        </p>
                    </section>
                    {/* Your rights */}
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-3', {ns:'privacy'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-11', {ns:'privacy'})} 
                        </p>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                {t('p-12', {ns:'privacy'})}
                            </span>
                        </div>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                {t('p-13', {ns:'privacy'})}
                            </span>
                        </div>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                {t('p-14', {ns:'privacy'})}
                            </span>
                        </div>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                {t('p-15', {ns:'privacy'})}
                            </span>
                        </div>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                {t('p-16', {ns:'privacy'})}
                            </span>
                        </div>
                    </section>
                    <p className='tracking-wider text-[var(--foreground-4)]'>
                        {t('p-10', {ns:'privacy'})} <Link isExternal href='/' className='tracking-wider text-[var(--foreground-2)]'>{t('legal_advise', {ns:'privacy'})}</Link>.
                    </p>
                    {/* Data usage */}
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-4', {ns:'privacy'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-20', {ns:'privacy'})} <Link isExternal href='/' className='tracking-wider text-[var(--foreground-2)]'>{t('legal_advise', {ns:'privacy'})}</Link> {t('p-21', {ns:'privacy'})}
                        </p>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-22', {ns:'privacy'})}
                        </p>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                {t('p-23', {ns:'privacy'})}
                            </span>
                        </div>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                {t('p-24', {ns:'privacy'})}
                            </span>
                        </div>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-25', {ns:'privacy'})}
                        </p>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <Link isExternal href='https://es.linkedin.com/legal/privacy-policy'>
                                <span className='tracking-wider text-[var(--foreground-4)]'>
                                    LinkedIn
                                </span>
                            </Link>
                        </div>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <Link isExternal href='https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement'>
                                <span className='tracking-wider text-[var(--foreground-4)]'>
                                    GitHub
                                </span>
                            </Link>
                        </div>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-26', {ns:'privacy'})}
                        </p>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-27', {ns:'privacy'})}
                        </p>
                    </section>
                    {/* Data security */}
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-5', {ns:'privacy'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-28', {ns:'privacy'})} 
                        </p>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-29', {ns:'privacy'})} <Link isExternal href='https://vercel.com/legal/privacy-policy' className='tracking-wider text-[var(--foreground-2)]'>{t('privacy-policy', {ns:'privacy'})}</Link> {t('p-30', {ns:'privacy'})}
                        </p>
                    </section>
                    {/* Other webs */}
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-6', {ns:'privacy'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-31', {ns:'privacy'})} 
                        </p>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-32', {ns:'privacy'})} 
                        </p>
                    </section>
                    {/* Cookie policy */}
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-7', {ns:'privacy'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-33', {ns:'privacy'})} 
                        </p>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-34', {ns:'privacy'})} <Link isExternal href='/cookies' className='tracking-wider text-[var(--foreground-2)]'>{t('p-35', {ns:'privacy'})}</Link> {t('p-36', {ns:'privacy'})}
                        </p>
                    </section>
                    {/* Data legacy */}
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-8', {ns:'privacy'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-37', {ns:'privacy'})} 
                        </p>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-38', {ns:'privacy'})} 
                        </p>
                    </section>
                    {/* Data categories */}
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-9', {ns:'privacy'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-39', {ns:'privacy'})} 
                        </p>
                        <div className='relative flex flex-row gap-3 items-start pl-5'>
                            <FaArrowRight className='icon-mini mt-[3px]'/>
                            <span className='tracking-wider text-[var(--foreground-4)]'>
                                {t('p-40', {ns:'privacy'})}
                            </span>
                        </div>
                    </section>
                    {/* Data storage */}
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-10', {ns:'privacy'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-41', {ns:'privacy'})} 
                        </p>
                    </section>
                    {/* Data validity */}
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-11', {ns:'privacy'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-42', {ns:'privacy'})} 
                        </p>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-43', {ns:'privacy'})} 
                        </p>
                    </section>
                    {/* Acept data */}
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-12', {ns:'privacy'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-44', {ns:'privacy'})} 
                        </p>
                    </section>
                    {/* Delete data */}
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-13', {ns:'privacy'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-45', {ns:'privacy'})} 
                        </p>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-46', {ns:'privacy'})} 
                        </p>
                    </section>
                    {/* Policy change */}
                    <section className='relative flex flex-col mt-8 gap-5'>
                        <h2 className='tracking-wider text-2xl text-[var(--foreground-2)]'>
                            {t('t-14', {ns:'privacy'})}
                        </h2>
                        <p className='tracking-wider text-[var(--foreground-4)]'>
                            {t('p-47', {ns:'privacy'})} 
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    )
}

export default PrivacySection