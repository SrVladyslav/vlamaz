import React from 'react'
import type { Metadata } from "next";

import Navbar from '@/components/miscellaneous/Navbar'
import Footer from '@/components/miscellaneous/Footer'
import ContactLanding from '@/app/[locale]/contact/_components/ContactLanding'

// Translations
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/providers/TranslationsProvider'

const i18nNamespaces = ['contact', 'navbar', 'misc', 'contact'];

const metadatas:any = {
    'en': 'Contact',
    'es': 'Contacto',
    'ua': 'Контакт'
}
export async function generateMetadata({ params }:{params:any}) {
    return {
        title: "Vlamaz | "+ metadatas[params.locale as string]
    }
}

const Contact = async ({
    params
  }:{params:any}) => {
    
// const Contact = async ({
//     params: {locale}
//   }:{params: {locale:any}}) => {
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
                    <ContactLanding/>
                    <Footer/>
                </div>
            </div>
        </TranslationsProvider>
    );
  }

export default Contact