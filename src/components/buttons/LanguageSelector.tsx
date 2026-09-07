'use client'

import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
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
        'ar-AE':{
            title:"العربية",
            url:"/icons/lang/arabic.svg"
        },
        ru:{
            title:"Русский",
            url:"/icons/lang/russian.svg"
        },
    }
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleLangChange = (newLocale:any) => {
        // set cookie for next-i18n-router
        const maxAge = 30 * 24 * 60 * 60; // 30 days
        document.cookie = `NEXT_LOCALE=${newLocale};max-age=${maxAge};path=/;SameSite=Lax`;

        // strip any existing locale prefix from the current path, regardless
        // of what currentLocale reports, so the new path is always correct
        const localesPattern = new RegExp(`^/(${i18nConfig.locales.join('|')})(?=/|$)`);
        const basePath = currentPathname.replace(localesPattern, '') || '/';

        // the default locale is not prefixed in the URL
        const newPath = newLocale === i18nConfig.defaultLocale
            ? basePath
            : `/${newLocale}${basePath}`;

        // update the client-side i18n instance immediately so the UI
        // reflects the new language without waiting on navigation
        i18n.changeLanguage(newLocale);

        router.push(newPath);
        router.refresh();
    };

    return <div className='relative flex items-center justify-center overflow-hidden
        h-[32px] w-[32px] min-h-[32px] min-w-[32px] max-h-[32px] max-w-[32px]'>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="light"
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
                            <Image alt='EN' src={langInfo[currentLocale].url} width={32} height={32}
                                className='absolute h-[32px] w-[32px] min-w-[32px] min-h-[32px] top-[-4px] left-[-4px]'
                            />
                        </div>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent aria-label="Langs" className='flex flex-col gap-2'>
                <DropdownMenuItem onSelect={() => handleLangChange('en')}>
                    <div className='relative w-full flex flex-row items-center gap-3'>
                        <div className='relative h-[24px] w-[24px] flex items-center justify-center
                            rounded-full overflow-hidden'>
                            <Image alt='EN' src={'/icons/lang/english.svg'} width={32} height={32}
                                className='absolute h-[32px] w-[32px] min-w-[32px] min-h-[32px] top-[-4px] left-[-4px]'
                            />
                        </div>
                        <span>English</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => handleLangChange('es')}>
                    <div className='relative w-full flex flex-row items-center gap-3'>
                    <div className='relative h-[24px] w-[24px] flex items-center justify-center
                            rounded-full overflow-hidden'>
                            <Image alt='EN' src={'/icons/lang/spanish.svg'} width={32} height={32}
                                className='absolute h-[32px] w-[32px] min-w-[32px] min-h-[32px] top-[-4px] left-[-4px]'
                            />
                        </div>
                        <span>Español</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => handleLangChange('ua')}>
                    <div className='relative w-full flex flex-row items-center gap-3'>
                        <div className='relative h-[24px] w-[24px] flex items-center justify-center
                            rounded-full overflow-hidden'>
                            <Image alt='EN' src={'/icons/lang/ukrainian.svg'} width={32} height={32}
                                className='absolute h-[32px] w-[32px] min-w-[32px] min-h-[32px] top-[-4px] left-[-4px]'
                            />
                        </div>
                        <span>Українська</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => handleLangChange('ar-AE')}>
                    <div className='relative w-full flex flex-row items-center gap-3'>
                        <div className='relative h-[24px] w-[24px] flex items-center justify-center
                            rounded-full overflow-hidden'>
                            <Image alt='EN' src={'/icons/lang/arabic.svg'} width={32} height={32}
                                className='absolute h-[32px] w-[32px] min-w-[32px] min-h-[32px] top-[-4px] left-[-4px]'
                            />
                        </div>
                        <span>العربية</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => handleLangChange('ru')}>
                    <div className='relative w-full flex flex-row items-center gap-3'>
                        <div className='relative h-[24px] w-[24px] flex items-center justify-center
                            rounded-full overflow-hidden'>
                            <Image alt='EN' src={'/icons/lang/russian.svg'} width={32} height={32}
                                className='absolute h-[32px] w-[32px] min-w-[32px] min-h-[32px] top-[-4px] left-[-4px]'
                            />
                        </div>
                        <span>Русский</span>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
}

export default LanguageSelector