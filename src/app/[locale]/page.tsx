import Navbar from '@/components/miscellaneous/Navbar'
import Landing from '@/app/[locale]/_components/Landing'

import dynamic from 'next/dynamic'
const LetsTalk = dynamic(() => import('@/components/sections/LetsTalk'), { ssr: true })
const Knowledge = dynamic(() => import('@/app/[locale]/_components/Knowledge'), { ssr: true })
// const LearnVlamaz = dynamic(() => import('@/app/[locale]/_components/LearnVlamaz'), { ssr: true })
// const QASection = dynamic(() => import('@/app/[locale]/_components/QASection'), { ssr: true })
const Footer = dynamic(() => import('@/components/miscellaneous/Footer'), { ssr: true })

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
          {/* <LearnVlamaz/> */}
          {/* <QASection/> */}
          <LetsTalk/>
          <Footer/>
        </div>
      </main>
    </TranslationsProvider>
  );
}
export default Home;