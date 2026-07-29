import type { MetadataRoute } from 'next'
import { routes, locales, localizedUrl, type RouteKey } from '@/lib/seo/routes'

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = []

    for (const routeKey of Object.keys(routes) as RouteKey[]) {
        for (const locale of locales) {
            entries.push({
                url: localizedUrl(locale, routeKey),
                lastModified: new Date(),
                changeFrequency: routeKey === 'blog' ? 'weekly' : 'monthly',
                alternates: {
                    languages: Object.fromEntries(
                        locales.map((l) => [l, localizedUrl(l, routeKey)])
                    ),
                },
            })
        }
    }

    return entries
}
