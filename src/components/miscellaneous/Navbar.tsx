'use client'

import React, {useState, useEffect} from 'react'
import { Button } from '@nextui-org/react'
import {LIGHT_BUTTON_PROPS} from '@/config/styles' 
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import ToggleTheme from '@/components/buttons/ToggleTheme'
import LanguageSelector from '@/components/buttons/LanguageSelector'
import { useRouter, usePathname } from 'next/navigation'
import {useAllowScrollWithBackup} from '@/hooks/useAllowScrollWithBackup'


import { RxCross1, RxHamburgerMenu} from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa6";
import GithubIcon from '@/components/icons/GithubIcon'
import LinkedinIcon from '@/components/icons/LinkedinIcon'

import { useTranslation } from 'react-i18next';

const Navbar =()=>{
    // Translation
    const { t } = useTranslation();
    // The rest
    const {activateScroll, deactivateScroll} = useAllowScrollWithBackup(true)
    const links = [
        { path:'/', text: 'navbar:home', paths: ['/', '/en','/es','/ua'] },
        { path:'https://learn.vlamaz.com', text: 'navbar:blog', paths: ['/blog', '/en/blog','/es/blog','/ua/blog'] },
        { path:'/background', text: 'navbar:projects', paths: ['/background', '/en/background','/es/background','/ua/background'] },
        // { path:'/about', text: 'navbar:about', paths: ['/about', '/en/about','/es/about','/ua/about'] },
        { path:'/contact', text: 'navbar:contact', paths: ['/contact', '/en/contact','/es/contact','/ua/contact'] },
    ]
    const router = useRouter()
    const currentPath = usePathname()
    //"Blog", "Projects", "About", "Contact"
    const [activeSidebar, setActiveSidebar] = useState(false)

    const handleRoute = (path:string)=>{
        if(activeSidebar){
            activateScroll()
            router.push(path)
        }else{
            router.push(path)
        }
        setActiveSidebar(!activeSidebar)
    }
    const handleBurger =(isActiveSidebar:boolean)=>{
        if(isActiveSidebar){
            deactivateScroll()
        }else{
            activateScroll()
        }
    }
    const Burger =()=>{
        return <Button {...LIGHT_BUTTON_PROPS}
            onPress={()=>{
                const newActive = !activeSidebar;
                handleBurger(newActive);
                setActiveSidebar(newActive)
            }}
            className='text-[var(--foreground)] data-[hover=true]:text-[var(--foreground)] font-medium bg-[red]
                bg-transparent data-[hover=true]:bg-[var(--background-2)] rounded-0
                h-[32px] w-[32px] min-h-[32px] min-w-[32px]
            '
        >
            {activeSidebar
                ?<RxCross1 className='icon'/>
                :<RxHamburgerMenu className='icon'/>
            }
        </Button>
    }

    const [navbarActive, setNavbarActive] = useState(false)
    useEffect(()=>{
        const scroll = () => {
            if(window.scrollY > 20 && navbarActive === false){
                setNavbarActive(true)
            }
            if(window.scrollY <= 20 && navbarActive === true){
                setNavbarActive(false)
            }
        }
        window.addEventListener("scroll", scroll, false);
        return ()=> { window.removeEventListener("scroll", scroll, false)}
    })

    return <div className='relative w-full z-[8000]'>
        {/* PC Navbar */}
        <div className={`
            fixed top-0 left-0 flex justify-center
            h-fit w-full backdrop-blur-3xl bg-[color:var(--background)/.9] px-5 py-2 sm:py-3
            border-b-1 duration-75 h-[56px] sm:h-[65px] min-h-[56px] sm:h-[65px]
            ${navbarActive?"border-[var(--background-2)]":"border-transparent"}
        `}>
            <div className='grid grid-cols-2 md:grid-cols-[150px_1fr_150px] 
                w-full max-w-screen-xl items-center'>
                    {/* <Button 
                        className='relative h-[40px] w-fit min-h-[40px] min-w-[40px] 
                            p-[2px] border-[2px] border-[var(--background-2)] rounded-full flex 
                            items-center justify-center
                        '
                        variant='light'
                        onPress={()=>{router.push('/')}}
                    >
                        <Image
                            alt="Logo"
                            src={'/logo.webp'}
                            width={32}
                            height={32}
                            className="relative"
                        />
                    </Button> */}
                        {/* h-[32px] w-fit min-h-[32px] min-w-[32px]  */}
                    <Button 
                        className='relative 
                            h-[40px] w-fit min-h-[40px] min-w-[40px] 
                            flex p-0 pr-2 pl-0.5 rounded-full gap-1
                            items-center justify-center
                            border-[0px] border-[var(--background-2)]
                        '
                        variant='light'
                        onPress={()=>{router.push('/')}}
                    >
                        {/* h-[32px] w-[32px] min-h-[32px] min-w-[32px] */}
                        <div className='relative 
                            relative h-[40px] w-[40px] min-h-[40px] min-w-[40px]  
                            rounded-full pt-[2px]'>
                            <Image
                                alt="Logo"
                                src={'/icons/logo.webp'}
                                fill
                                className="absolute w-full h-full object-fit"
                            />
                        </div>
                        <span className='secondary-font relative'>Vlamaz</span>
                    </Button>

                    {/* Links */}
                    <div className='relative h-full hidden md:flex justify-center'>
                        {links?.map((link, key)=>{
                            return <Button {...LIGHT_BUTTON_PROPS} key={key}
                                className={`data-[hover=true]:text-[var(--foreground-2)] font-medium
                                    data-[hover=true]:bg-[var(--background-2)]
                                    ${link?.paths.includes(currentPath)
                                        ?"text-[var(--foreground-2)]"
                                        // ?"text-[var(--foreground-2)]"
                                        :"text-[var(--foreground-3)] bg-transparent"
                                    }
                                `}
                                onPress={()=>{
                                    activateScroll();
                                    router.push(link?.path)
                                }}
                            // >{t('about',{ns: 'navbar'})}</Button>
                            // >{link?.text}</Button>
                            >{t(link?.text)}</Button>
                        })}
                    </div>
                {/* </div> */}
                {/* Burger */}
                <div className='relative flex flex-row gap-2 items-center justify-end'>
                    <div className='relative hidden md:flex flex-row gap-2 items-center'>
                        <GithubIcon isExternal white href='https://github.com/SrVladyslav'/>
                        <LinkedinIcon isExternal white href='https://www.linkedin.com/in/vladyslav-mazurkevych/'/>
                    </div>
                    <LanguageSelector/>
                    <ToggleTheme/>
                    <div className='flex md:hidden'>
                        <Burger/>
                    </div>
                </div>
            </div>
        </div>
        {/* Active sidebar */}
        <AnimatePresence>
        {activeSidebar && 
            <motion.div 
                key='1'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.2
                }}    
                className='fixed top-0 left-0 w-full h-full bg-[var(--semitransparent-bg)]
                    flex justify-end
                '
            >
                <motion.div 
                    key='2'
                    tabIndex={-1}
                    initial={{ x: "105%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "105%" }}
                    transition={{
                        duration: 0.3,
                        ease: "linear"
                    }}
                    className='relative h-full bg-[var(--background)] z-1
                        w-full max-w-full sm:max-w-[60%] duration-75 flex flex-col
                    '
                >
                    <div className='relative w-full flex justify-between items-center py-3 sm:py-4 px-5'>
                        <div className='relative flex flex-row items-center gap-2'>
                            {/* <LanguageSelector/> */}
                            {/* <ToggleTheme/> */}
                        </div>
                        <Burger/>
                    </div>
                    {/* Links */}
                    <div className='relative overflow-x-hidden overflow-y-auto px-5 py-2 grow'>
                        <div className='absolute top-0 left-0 w-full h-[2px] bg-[var(--background-2)]'/>
                        <div className='relative w-full flex flex-col gap-3 pt-10'>
                            {links?.map((link, key)=>{
                                return <Button 
                                    key={key}
                                    radius='full'
                                    variant='light'
                                    color='primary'
                                    size='md'
                                    fullWidth
                                    className={`data-[hover=true]:text-[var(--foreground-2)] font-medium
                                        data-[hover=true]:bg-[var(--background-2)] py-5

                                        ${link?.paths.includes(currentPath)
                                            ?"text-[var(--foreground-2)]"
                                            :"text-[var(--foreground-3)] bg-transparent"
                                        }
                                    `}
                                    onPress={()=>{
                                        handleRoute(link?.path)
                                    }}
                                >
                                    <div className='relative w-full py-2 md:py-3 items-center
                                        flex flex-row justify-between'>
                                        <span>{t(link?.text)}</span>
                                        <FaAngleRight/>
                                    </div>
                                </Button>

                            })}
                        </div>
                    </div>
                    {/* Social networks */}
                    <div className='relative w-full pt-10 px-5 pb-14 flex justify-center items-center gap-3'>
                        <div className='absolute top-0 left-0 w-full
                            h-[2px] bg-[var(--background-2)]'
                        />
                        <GithubIcon isExternal white href='https://github.com/SrVladyslav'/>
                        <LinkedinIcon isExternal white href='https://www.linkedin.com/in/vladyslav-mazurkevych/'/>
                    </div>
                </motion.div>
            </motion.div>
        }
        </AnimatePresence>
    </div>
}

export default Navbar