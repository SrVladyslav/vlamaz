/** @type {import('next-i18n-router/dist/types').Config} */
const i18nConfig = {
    locales: ['en', 'es', 'ua', 'ar-AE', 'ru'],
    defaultLocale: 'en',
    noPrefix: false,
    // don't auto-redirect cookie-less visitors based on Accept-Language;
    // always fall back to defaultLocale so English stays primary
    localeDetector: false,
    cookieOptions: {
        path: '/',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60, // 30 days, matches LanguageSelector
    },
};
  
module.exports = i18nConfig;