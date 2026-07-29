import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo/routes'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: '*', allow: '/' },
            // Explicit allow rules for known AI/LLM crawlers, since the goal
            // here is LLM visibility, not blocking them (redundant with the
            // '*' allow above, but makes intent explicit for anyone auditing
            // this file).
            { userAgent: 'GPTBot', allow: '/' },
            { userAgent: 'ChatGPT-User', allow: '/' },
            { userAgent: 'ClaudeBot', allow: '/' },
            { userAgent: 'anthropic-ai', allow: '/' },
            { userAgent: 'Claude-Web', allow: '/' },
            { userAgent: 'Google-Extended', allow: '/' },
            { userAgent: 'CCBot', allow: '/' },
            { userAgent: 'PerplexityBot', allow: '/' },
            { userAgent: 'Applebot-Extended', allow: '/' },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    }
}
