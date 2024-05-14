import React from 'react'
import Navbar from '@/components/miscellaneous/Navbar'
import Footer from '@/components/miscellaneous/Footer'
import BackgroundLanding from '@/app/[locale]/background/_components/BackgroundLanding'
import BiographySection from '@/app/[locale]/background/_components/BiographySection'
import CronologhySection from '@/app/[locale]/background/_components/CronologhySection'
import LetsTalk from '@/components/sections/LetsTalk'


// Translations
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/providers/TranslationsProvider'
const i18nNamespaces = ['background', 'navbar', 'misc'];

const metadatas:any = {
    'en': 'Background',
    'es': 'Proyectos',
    'ua': 'Проекти'
}
export async function generateMetadata({ params }:{params:any}) {
    return {
        title: "Vlamaz | "+ metadatas[params.locale as string]
    }
}

const Background = async ({
    params: {locale}
  }:{params: {locale:any}}) => {
    const {t, resources} = await initTranslations(locale, i18nNamespaces)
  
    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <div className='relative duration-100'>
                <Navbar/>
                <BackgroundLanding/>
                <CronologhySection/>
                <BiographySection/> 
                <LetsTalk/>
                <div className='relative flex flex-col gap-10 w-full h-full'>
                    <Footer/>
                </div>
            </div>
        </TranslationsProvider>
    );
  }

export default Background