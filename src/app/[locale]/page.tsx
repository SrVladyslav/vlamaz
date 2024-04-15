import Navbar from '@/components/miscellaneous/Navbar'
import Landing from '@/app/[locale]/_components/Landing'
import Footer from '@/components/miscellaneous/Footer'
// Translations
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/providers/TranslationsProvider'
const i18nNamespaces = ['home', 'navbar'];

const Home = async ({
  params: {locale}
}:{params: {locale:any}}) => {
  const {t, resources} = await initTranslations(locale, i18nNamespaces)

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className='relative'>
        <Navbar/>
        <div className='relative flex flex-col gap-10 w-full'>
          <Landing/>
          <div>{t('hello-title')}</div>
          <Footer/>
        </div>
      </main>
    </TranslationsProvider>
  );
}
export default Home;