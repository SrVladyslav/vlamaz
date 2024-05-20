/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://vlamaz.com',
    generateRobotsTxt: true, // (optional)
    alternateRefs: [
        {
          href: 'https://vlamaz.com/es',
          hreflang: 'es',
        },
        {
          href: 'https://vlamaz.com/ua',
          hreflang: 'ua',
        },
    ],
    robotsTxtOptions: {
        policies: [
          {
            userAgent: '*',
            allow: ['/',
                '/learn', '/background','/contact',
                '/es/learn', '/es/background','/es/contact',
                '/ua/learn', '/ua/background','/es/contact'
            ],
          }
        ]
      },
  }