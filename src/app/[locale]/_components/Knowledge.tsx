'use client'

import React from 'react'
import { motion } from 'framer-motion'
import PointsBackground from '@/components/miscellaneous/PointsBackground';
import { useTranslation } from 'react-i18next';

import { SiPytorch } from "react-icons/si";
import { TbCode } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { MdRocketLaunch } from "react-icons/md";

import { Button, Link } from '@nextui-org/react';
import {LIGHT_BUTTON_PROPS} from '@/config/styles'

const Knowledge =()=>{
    const {t} = useTranslation()

    return <div className='relative w-full h-fit duration-100 px-5 md:px-10 py-20 flex justify-center'>
        <div className='relative w-full max-w-screen-xl bg-[var(--background-3)]
            p-0 sm:p-5 rounded-3xl duration-100 border-[1px] border-[var(--background-2)]
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        '>  
            <motion.div 
                initial={{opacity: 0, y:30}}
                whileInView={{opacity: 1, y:0}}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.2}}
                className='relative p-10 md:p-10 py-10
                    flex flex-col items-center justify-start
                    gap-10 text-center tracking-wider
                '
            >
                <div className='relative flex flex-col gap-3'>
                    <div className='relative w-full flex justify-center mb-2'>
                        <TbCode className='icon-big stroke-[var(--foreground-6)]'/>
                    </div>
                    <h2 className='text-lg font-semibold text-[var(--foreground)]'>{t("a-title-1", {ns:"home"})}</h2>
                    <p className='text-sm tracking-wider text-[var(--foreground-3)]
                        font-medium max-w-readable50
                    '>
                        {t("a-desc-1", {ns:"home"})}
                    </p>
                </div>
                <div className='relative flex flex-col gap-3'>
                    <h3 className='text-sm font-medium text-[var(--foreground-6)] tracking-wider'>{t("a-title-2", {ns:"home"})}</h3>
                    <p className='text-sm tracking-wider text-[var(--foreground-3)]
                        font-medium max-w-readable50
                    '>
                        Python, Javascript, Typescript, Solidity, Java.
                    </p>
                </div>
                <div className='relative flex flex-col gap-3'>
                    <h3 className='text-sm font-medium text-[var(--foreground-6)] tracking-wider'>{t("a-title-3", {ns:"home"})}</h3>
                    <p className='text-sm tracking-wider text-[var(--foreground-3)]
                        font-medium max-w-readable50
                    '>
                        Git, AWS, Django REST, VueJS, NextJS, Tailwind, Figma, MongoDB, PostgreSQL.
                    </p>
                </div>
                <div className='relative flex justify-center h-full items-end'>
                    <Button
                        {...LIGHT_BUTTON_PROPS}
                        className='text-[var(--foreground)] font-medium bg-transparent group duration-75
                            bg-none data-[hover=true]:bg-transparent mt-4
                            data-[hover=true]:text-[var(--foreground-6)] tracking-wider
                            border-[2px] border-none data-[hover=true]:border-[var(--foreground-2)]   
                        '
                        as={Link}
                        href='/contact'
                    >
                        <div className='relative flex flex-row gap-2 items-center'>
                            {/* <span>{t('misc',{ns:"background"})}</span> */}
                            <span>👨🏻‍💻  {t('hire-me',{ns:'misc'})} </span>
                            <FaArrowRight/>
                        </div>
                    </Button>
                </div>
            </motion.div>
            <motion.div 
                initial={{opacity: 0, y:30}}
                whileInView={{opacity: 1, y:0}}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.4}}
                className='relative p-5 md:p-10 py-10 tracking-wider
                    flex flex-col items-center justify-start text-center
                    border-y-[1px] border-y-[var(--gray-3)] border-x-0 gap-10
                    sm:border-l-[1px] border-l-[var(--gray-3)] sm:border-x-0 sm:border-y-0
                    lg:border-x-[1px] border-x-[var(--gray-3)] lg:border-y-0
                '
            >
                <PointsBackground color={'#21d6ef'} size={0.006} deltaX={70} deltaY={90}/>
                <div className='relative flex flex-col gap-3'>
                    <div className='relative w-full flex justify-center mb-2'>
                        <SiPytorch className='icon-big fill-[var(--foreground-6)]'/>
                    </div>
                    <h2 className='text-lg font-semibold text-[var(--foreground)]'>{t("b-title-1", {ns:"home"})}</h2>
                    <p className='text-sm tracking-wider text-[var(--foreground-3)]
                        font-medium max-w-readable50
                    '>
                        {t("b-desc-1", {ns:"home"})}
                    </p>
                </div>
                <div className='relative flex flex-col gap-3'>
                    <h3 className='text-sm font-medium text-[var(--foreground-6)]'>{t("b-title-2", {ns:"home"})}</h3>
                    <p className='text-sm tracking-wider text-[var(--foreground-3)]
                        font-medium max-w-readable50
                    '>
                        {t("b-desc-2", {ns:"home"})}
                    </p>
                </div>
                <div className='relative flex flex-col gap-3'>
                    <h3 className='text-sm font-medium text-[var(--foreground-6)]'>{t("b-title-3", {ns:"home"})}</h3>
                    <p className='text-sm tracking-wider text-[var(--foreground-3)]
                        font-medium max-w-readable50
                    '>
                        Git, AWS, Jupyter Notebook, PyTorch, SciKit Learn, Pandas, Pillow, Plotly.
                    </p>
                </div>
                <div className='relative flex justify-center h-full items-end'>
                    <Button
                        {...LIGHT_BUTTON_PROPS}
                        className='text-[var(--foreground)] font-medium bg-transparent group duration-75
                            bg-[var(--background)] data-[hover=true]:bg-[var(--background)] mt-4
                            data-[hover=true]:text-[var(--foreground-6)] tracking-wider
                            border-[1px] border-[var(--foreground-2)] data-[hover=true]:border-[var(--foreground-2)]   
                        '
                        as={Link}
                        href='/contact'
                    >
                        <div className='relative flex flex-row gap-2 items-center'>
                            {/* <span>{t('misc',{ns:"background"})}</span> */}
                            <span>{t('hire-me',{ns:'misc'})}</span>
                            <FaArrowRight/>
                        </div>
                    </Button>
                </div>
            </motion.div>
            <motion.div 
                initial={{opacity: 0, y:30}}
                whileInView={{opacity: 1, y:0}}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.6}}
                className='relative p-5 md:p-10 py-10 text-center
                    flex flex-col items-center justify-start
                    col-span-1 sm:col-span-2 lg:col-span-1
                    sm:border-t-[1px] sm:border-[var(--gray-3)] lg:border-t-0 gap-10
                '
            >
                <div className='relative flex flex-col gap-3'>
                    <div className='relative w-full flex justify-center mb-2'>
                        <MdRocketLaunch className='icon-big fill-[var(--foreground-6)]'/>
                    </div>
                    <h2 className='text-lg font-semibold text-[var(--foreground)]'>{t("c-title-1", {ns:"home"})}</h2>
                    <p className='text-sm tracking-wider text-[var(--foreground-3)]
                        font-medium max-w-readable50
                    '>
                        {t("c-desc-1", {ns:"home"})}
                    </p>
                </div>
                <div className='relative flex flex-col gap-3'>
                    <h3 className='text-sm font-medium text-[var(--foreground-6)] tracking-wider'>{t("c-title-2", {ns:"home"})}</h3>
                    <p className='text-sm tracking-wider text-[var(--foreground-3)]
                        font-medium max-w-readable50
                    '>
                        {t("c-desc-2", {ns:"home"})}
                    </p>
                </div>
                <div className='relative flex flex-col gap-3'>
                    <h3 className='text-sm font-medium text-[var(--foreground-6)] tracking-wider'>{t("c-title-3", {ns:"home"})}</h3>
                    <p className='text-sm tracking-wider text-[var(--foreground-3)]
                        font-medium max-w-readable50
                    '>
                        ClickUP, Notion, Figma, Google sheet.
                    </p>
                </div>
                <div className='relative flex justify-center h-full items-end'>
                    <Button
                        {...LIGHT_BUTTON_PROPS}
                        className='text-[var(--foreground)] font-medium bg-transparent group duration-75
                            bg-none data-[hover=true]:bg-transparent mt-4
                            data-[hover=true]:text-[var(--foreground-6)] tracking-wider
                            border-[2px] border-none data-[hover=true]:border-[var(--foreground-2)]   
                        '
                        as={Link}
                        href='/contact'
                    >
                        <div className='relative flex flex-row gap-2 items-center'>
                            {/* <span>{t('misc',{ns:"background"})}</span> */}
                            <span>{t('contact-8',{ns:'misc'})}</span>
                            <FaArrowRight/>
                        </div>
                    </Button>
                </div>
            </motion.div>
        </div>
    </div>
}

export default Knowledge