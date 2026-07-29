import { localizedUrl, SITE_URL, type RouteKey } from './routes'
import { loadSeoCopy } from './metadata'

const SOCIAL_LINKS = [
    'https://github.com/SrVladyslav',
    'https://www.linkedin.com/in/vladyslav-mazurkevych/',
]

export function buildPersonSchema(locale: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${SITE_URL}#person`,
        name: 'Vladyslav Mazurkevych',
        alternateName: 'Vlad',
        url: localizedUrl(locale, 'home'),
        jobTitle: 'Computer Engineer',
        alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'Universitat Politècnica de València',
        },
        knowsAbout: [
            'Artificial Intelligence',
            'Natural Language Processing',
            'Machine Learning',
            'Data Science',
            'Full-Stack Development',
        ],
        sameAs: SOCIAL_LINKS,
    }
}

export function buildWebsiteSchema(locale: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        name: 'Vlamaz',
        url: localizedUrl(locale, 'home'),
        inLanguage: locale,
        publisher: { '@id': `${SITE_URL}#person` },
    }
}

export function buildWebPageSchema(locale: string, routeKey: RouteKey, title: string, description: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        url: localizedUrl(locale, routeKey),
        name: title,
        description,
        inLanguage: locale,
        isPartOf: { '@id': `${SITE_URL}#website` },
    }
}

export async function buildRoutePageJsonLd(locale: string, routeKey: Exclude<RouteKey, 'home'>) {
    const seo = await loadSeoCopy(locale)
    const { title, description } = seo[routeKey]
    return [
        buildWebPageSchema(locale, routeKey, title, description),
        buildBreadcrumbSchema(locale, routeKey, title),
    ]
}

export function buildBreadcrumbSchema(locale: string, routeKey: RouteKey, routeName: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: localizedUrl(locale, 'home'),
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: routeName,
                item: localizedUrl(locale, routeKey),
            },
        ],
    }
}
