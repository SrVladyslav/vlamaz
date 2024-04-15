'use client'

import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Image from 'next/image';

// Language shit
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from './../../../i18nConfig';

const LanguageSelector =()=>{
    const langInfo:any = {
        en:{
            title:"English",
            url:"/icons/lang/english.svg"
        },
        es:{
            title:"Español",
            url:"/icons/lang/spanish.svg"
        },
        ua:{
            title:"Українська",
            url:"/icons/lang/ukrainian.svg"
        },
    }
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleLangChange = (newLocale:any) => {
        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
    
        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale 
        //   && !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }
        router.refresh();
    };

    return <div className='relative flex items-center justify-center overflow-hidden
        h-[32px] w-[32px] min-h-[32px] min-w-[32px] max-h-[32px] max-w-[32px]'>
        <Dropdown
            classNames={{
                content:'bg-[var(--background)] rounded-3xl border-[red]'
            }}
        >
            <DropdownTrigger>
                <Button 
                    radius='full'
                    variant="light"
                    color='primary'
                    className='relative m-0 p-0 min-w-0 
                        h-full w-full    
                        bg-[var(--background-2)] p-[4px] overflow-hidden
                    ' 
                    // h-[32px] w-[32px]
                    // min-h-[32px] min-w-[32px] max-h-[32px] max-w-[32px]
                >
                    <div className='relative w-full h-full bg-[white] rounded-full
                        flex items-center justify-center overflow-hidden
                    '>
                        <div className='relative h-[24px] w-[24px] flex items-center justify-center 
                            rounded-full overflow-hidden'>
                            <img alt='EN' src={langInfo[currentLocale].url}
                                className='absolute h-[32px] w-[32px] min-w-[32px] min-h-[32px] top-[-4px] left-[-4px]'
                            />
                        </div>
                    </div>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Langs"
                itemClasses={{
                    base: [
                        'rounded-full',
                        'text-[var(--foreground-3)] font-medium',
                        'py-2 px-3',
                        'data-[hover=true]:bg-[var(--background-2)]'
                    ],
                }}
                classNames={{
                    list:'gap-2'
                }}
                onAction={
                    (newLang)=>{handleLangChange(newLang)}
                }
            >
                <DropdownItem key="en">
                    <div className='relative w-full flex flex-row items-center gap-3'>
                        <div className='relative h-[24px] w-[24px] flex items-center justify-center 
                            rounded-full overflow-hidden'>
                            <img alt='EN' src={'/icons/lang/english.svg'}
                                className='absolute h-[32px] w-[32px] min-w-[32px] min-h-[32px] top-[-4px] left-[-4px]'
                            />
                        </div>
                        <span>English</span>
                    </div>
                </DropdownItem>
                <DropdownItem key="es">
                    <div className='relative w-full flex flex-row items-center gap-3'>
                    <div className='relative h-[24px] w-[24px] flex items-center justify-center 
                            rounded-full overflow-hidden'>
                            <img alt='EN' src={'/icons/lang/spanish.svg'}
                                className='absolute h-[32px] w-[32px] min-w-[32px] min-h-[32px] top-[-4px] left-[-4px]'
                            />
                        </div>
                        <span>Español</span>
                    </div>
                </DropdownItem>
                <DropdownItem key="ua">
                    <div className='relative w-full flex flex-row items-center gap-3'>
                        <div className='relative h-[24px] w-[24px] flex items-center justify-center 
                            rounded-full overflow-hidden'>
                            <img alt='EN' src={'/icons/lang/ukrainian.svg'}
                                className='absolute h-[32px] w-[32px] min-w-[32px] min-h-[32px] top-[-4px] left-[-4px]'
                            />
                        </div>
                        <span>Українська</span>
                    </div>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
}

export default LanguageSelector