import React from 'react'
import Navbar from '@/components/miscellaneous/Navbar'
import Footer from '@/components/miscellaneous/Footer'
import type { Metadata } from "next";

// Translations
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/providers/TranslationsProvider'
const i18nNamespaces = ['blog', 'navbar', 'misc'];

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

// const Blog = async ({
//     params: {locale}
//   }:{params: {locale:any}}) => {

const Blog = async ({
    params
  }:{params:any}) => {
    
    const {locale} = params
    const {t, resources} = await initTranslations(locale, i18nNamespaces)
  
    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <div className='relative'>
                <Navbar/>
                <div className='relative flex flex-col gap-10 w-full h-full'>
                    <div className='relative w-full h-[50vh] flex justify-center items-center'>
                        <h2 className='text-2xl text-[var(--foreground)]'>{t('soon', {ns:'misc'})}</h2>
                    </div>
                    <Footer/>
                </div>
            </div>
        </TranslationsProvider>
    );
}

export default Blog
