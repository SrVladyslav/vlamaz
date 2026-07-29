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

// SEO
import { buildMetadata } from '@/lib/seo/metadata'
import { buildRoutePageJsonLd } from '@/lib/seo/jsonld'
import JsonLd from '@/components/seo/JsonLd'

export async function generateMetadata({ params }:{params:Promise<any>}) {
    const { locale } = await params
    return buildMetadata(locale, 'background')
}

const Background = async ({
    params
  }:{params: Promise<{locale:any}>}) => {
    const {locale} = await params
    const {t, resources} = await initTranslations(locale, i18nNamespaces)
    const jsonLd = await buildRoutePageJsonLd(locale, 'background')

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <div className='relative duration-100'>
                <JsonLd schema={jsonLd} />
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