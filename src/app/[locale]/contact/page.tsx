import React from 'react'

import Navbar from '@/components/miscellaneous/Navbar'
import Footer from '@/components/miscellaneous/Footer'
import ContactLanding from '@/app/[locale]/contact/_components/ContactLanding'

// Translations
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/providers/TranslationsProvider'

const i18nNamespaces = ['contact', 'navbar', 'misc', 'contact'];

// SEO
import { buildMetadata } from '@/lib/seo/metadata'
import { buildRoutePageJsonLd } from '@/lib/seo/jsonld'
import JsonLd from '@/components/seo/JsonLd'

export async function generateMetadata({ params }:{params:Promise<any>}) {
    const { locale } = await params
    return buildMetadata(locale, 'contact')
}

const Contact = async ({
    params
  }:{params:Promise<any>}) => {

    const {locale} = await params
    const {t, resources} = await initTranslations(locale, i18nNamespaces)
    const jsonLd = await buildRoutePageJsonLd(locale, 'contact')

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <div className='relative'>
                <JsonLd schema={jsonLd} />
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