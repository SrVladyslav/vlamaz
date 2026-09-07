'use client'

import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from './../../../i18nConfig';

type Locale = typeof i18nConfig.locales[number];

const langInfo: Record<Locale, { title: string; url: string }> = {
    en: { title: "English", url: "/icons/lang/english.svg" },
    es: { title: "Español", url: "/icons/lang/spanish.svg" },
    ua: { title: "Українська", url: "/icons/lang/ukrainian.svg" },
    'ar-AE': { title: "العربية", url: "/icons/lang/arabic.svg" },
    ru: { title: "Русский", url: "/icons/lang/russian.svg" },
};

// keeps the URL path in sync with next-i18n-router's own prefixing rules,
// regardless of which locale (if any) it's currently prefixed with
const localesPattern = new RegExp(`^/(${i18nConfig.locales.join('|')})(?=/|$)`);

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const router = useRouter();
    const currentPathname = usePathname();

    // fall back to the default locale for any language i18next hasn't
    // settled into yet (first paint) or one outside our supported list
    const currentLocale: Locale = langInfo[i18n.language as Locale]
        ? (i18n.language as Locale)
        : i18nConfig.defaultLocale;

    const handleLangChange = (newLocale: Locale) => {
        if (newLocale === currentLocale) return;

        // set the cookie next-i18n-router reads on the server; path/sameSite/maxAge
        // must match i18nConfig.cookieOptions so client and server never disagree
        const maxAge = 30 * 24 * 60 * 60; // 30 days
        document.cookie = `NEXT_LOCALE=${newLocale};max-age=${maxAge};path=/;SameSite=Lax`;

        const basePath = currentPathname.replace(localesPattern, '') || '/';

        // the default locale is never prefixed in the URL
        const newPath = newLocale === i18nConfig.defaultLocale
            ? basePath
            : `/${newLocale}${basePath}`;

        // update the client-side i18n instance immediately so the UI
        // reflects the new language without waiting on navigation
        i18n.changeLanguage(newLocale);

        router.push(newPath);
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
                >
                    <div className='relative w-full h-full bg-[white] rounded-full
                        flex items-center justify-center overflow-hidden
                    '>
                        <div className='relative h-[24px] w-[24px] flex items-center justify-center
                            rounded-full overflow-hidden'>
                            <Image alt={currentLocale} src={langInfo[currentLocale].url} width={32} height={32}
                                className='absolute h-[32px] w-[32px] min-w-[32px] min-h-[32px] top-[-4px] left-[-4px]'
                            />
                        </div>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent aria-label="Langs" className='flex flex-col gap-2'>
                {i18nConfig.locales.map((locale: Locale) => (
                    <DropdownMenuItem key={locale} onSelect={() => handleLangChange(locale)}>
                        <div className='relative w-full flex flex-row items-center gap-3'>
                            <div className='relative h-[24px] w-[24px] flex items-center justify-center
                                rounded-full overflow-hidden'>
                                <Image alt={locale} src={langInfo[locale].url} width={32} height={32}
                                    className='absolute h-[32px] w-[32px] min-w-[32px] min-h-[32px] top-[-4px] left-[-4px]'
                                />
                            </div>
                            <span>{langInfo[locale].title}</span>
                        </div>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
}

export default LanguageSelector
