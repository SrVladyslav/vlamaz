import type { Metadata } from 'next'
import { locales, defaultLocale, localizedUrl, type RouteKey } from './routes'

const OG_IMAGE_URL = 'https://vlamaz.com/images/og-default.png'

const OG_LOCALE_MAP: Record<string, string> = {
    en: 'en_US',
    es: 'es_ES',
    ua: 'uk_UA',
    'ar-AE': 'ar_AE',
    ru: 'ru_RU',
}

type SeoCopy = { title: string; description: string }
type SeoNamespace = Record<RouteKey, SeoCopy>

export async function loadSeoCopy(locale: string): Promise<SeoNamespace> {
    try {
        const mod = await import(`@/locales/${locale}/seo.json`)
        return (mod.default ?? mod) as SeoNamespace
    } catch {
        const fallback = await import(`@/locales/${defaultLocale}/seo.json`)
        return (fallback.default ?? fallback) as SeoNamespace
    }
}

export async function buildMetadata(
    locale: string,
    routeKey: RouteKey,
    opts?: { noindex?: boolean }
): Promise<Metadata> {
    const seo = await loadSeoCopy(locale)
    const { title, description } = seo[routeKey]
    const canonical = localizedUrl(locale, routeKey)

    const languages: Record<string, string> = {}
    for (const l of locales) {
        languages[l] = localizedUrl(l, routeKey)
    }
    languages['x-default'] = localizedUrl(defaultLocale, routeKey)

    return {
        title,
        description,
        alternates: {
            canonical,
            languages,
        },
        openGraph: {
            title,
            description,
            url: canonical,
            siteName: 'Vlamaz',
            locale: OG_LOCALE_MAP[locale] ?? OG_LOCALE_MAP[defaultLocale],
            type: 'website',
            images: [
                {
                    url: OG_IMAGE_URL,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [OG_IMAGE_URL],
        },
        ...(opts?.noindex ? { robots: { index: false, follow: true } } : {}),
    }
}
