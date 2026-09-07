import i18nConfig from '../../../i18nConfig'

export type RouteKey = 'home' | 'background' | 'blog' | 'contact' | 'cookies' | 'privacy'

export const SITE_URL = 'https://vlamaz.com'

export const routes: Record<RouteKey, string> = {
    home: '',
    background: '/background',
    blog: '/blog',
    contact: '/contact',
    cookies: '/cookies',
    privacy: '/privacy',
}

export const locales: readonly string[] = i18nConfig.locales
export const defaultLocale: string = i18nConfig.defaultLocale

/**
 * next-i18n-router serves the default locale unprefixed (e.g. `/background`)
 * while every other locale is prefixed (e.g. `/es/background`). All SEO URL
 * generation (metadata, sitemap, robots, JSON-LD) must go through this
 * function so that asymmetry is only encoded in one place.
 */
export function localizedPath(locale: string, routeKey: RouteKey): string {
    const path = routes[routeKey]
    if (locale === defaultLocale) {
        return path || '/'
    }
    return `/${locale}${path}`
}

export function localizedUrl(locale: string, routeKey: RouteKey): string {
    return `${SITE_URL}${localizedPath(locale, routeKey)}`
}
