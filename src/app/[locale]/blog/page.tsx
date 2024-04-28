import React from 'react'
import Navbar from '@/components/miscellaneous/Navbar'
import Footer from '@/components/miscellaneous/Footer'
import type { Metadata } from "next";

// Translations
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/providers/TranslationsProvider'
const i18nNamespaces = ['blog', 'navbar'];

const metadatas:any = {
    'en': 'Blog',
    'es': 'Blog',
    'ua': 'Блог'
}
export async function generateMetadata({ params }:{params:any}) {
    return {
        title: "Vlamaz | "+ metadatas[params.locale as string]
    }
}

const Blog = async ({
    params: {locale}
  }:{params: {locale:any}}) => {
    const {t, resources} = await initTranslations(locale, i18nNamespaces)
  
    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <div className='relative'>
                <Navbar/>
                <div className='relative flex flex-col gap-10 w-full h-full'>
                    <div>{t('hello-title')}</div>
                    <Footer/>
                </div>
            </div>
        </TranslationsProvider>
    );
  }

export default Blog