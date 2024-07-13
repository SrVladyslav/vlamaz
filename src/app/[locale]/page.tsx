import Navbar from '@/components/miscellaneous/Navbar'
import Landing from '@/app/[locale]/_components/Landing'
// import LetsTalk from '@/components/sections/LetsTalk'
// import Knowledge from '@/app/[locale]/_components/Knowledge'
// import LearnVlamaz from '@/app/[locale]/_components/LearnVlamaz'
// import QASection from '@/app/[locale]/_components/QASection'
// import Footer from '@/components/miscellaneous/Footer'

import dynamic from 'next/dynamic'
const LetsTalk = dynamic(() => import('@/components/sections/LetsTalk'), { ssr: false })
const Knowledge = dynamic(() => import('@/app/[locale]/_components/Knowledge'), { ssr: false })
const LearnVlamaz = dynamic(() => import('@/app/[locale]/_components/LearnVlamaz'), { ssr: false })
const QASection = dynamic(() => import('@/app/[locale]/_components/QASection'), { ssr: false })
const Footer = dynamic(() => import('@/components/miscellaneous/Footer'), { ssr: false })

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
          <LearnVlamaz/>
          <QASection/>
          <LetsTalk/>
          <Footer/>
        </div>
      </main>
    </TranslationsProvider>
  );
}
export default Home;