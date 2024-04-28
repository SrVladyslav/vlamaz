import Navbar from '@/components/miscellaneous/Navbar'
import Landing from '@/app/[locale]/_components/Landing'
import LetsTalk from '@/components/sections/LetsTalk'
import Knowledge from '@/app/[locale]/_components/Knowledge'
import Footer from '@/components/miscellaneous/Footer'
// Translations
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/providers/TranslationsProvider'
const i18nNamespaces = ['home', 'navbar','misc'];

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
        <div className='relative flex flex-col w-full'>
          <Landing/>
          <Knowledge/>
          <LetsTalk/>
          <Footer/>
        </div>
      </main>
    </TranslationsProvider>
  );
}
export default Home;