import React from 'react'
import Navbar from '@/components/miscellaneous/Navbar'
import Footer from '@/components/miscellaneous/Footer'
// Translations
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/providers/TranslationsProvider'
const i18nNamespaces = ['blog', 'navbar', 'misc'];

// SEO
import { buildMetadata } from '@/lib/seo/metadata'
import { buildRoutePageJsonLd } from '@/lib/seo/jsonld'
import JsonLd from '@/components/seo/JsonLd'

export async function generateMetadata({ params }:{params:Promise<any>}) {
    const { locale } = await params
    // Placeholder "coming soon" page: keep it out of search results until it has real content.
    return buildMetadata(locale, 'blog', { noindex: true })
}

const Blog = async ({
    params
  }:{params:Promise<any>}) => {

    const {locale} = await params
    const {t, resources} = await initTranslations(locale, i18nNamespaces)
    const jsonLd = await buildRoutePageJsonLd(locale, 'blog')

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <div className='relative'>
                <JsonLd schema={jsonLd} />
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
