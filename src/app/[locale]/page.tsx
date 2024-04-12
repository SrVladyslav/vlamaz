import Navbar from '@/components/miscellaneous/Navbar'
import Landing from '@/app/[locale]/_components/Landing'
import Footer from '@/components/miscellaneous/Footer'
import initTranslations from '@/app/i18n'

const Home = async ({
  params: {locale}
}:{params: {locale:any}}) => {
  const {t} = await initTranslations(locale, ['home'])

  return (
    <main className='relative'>
      <Navbar/>
      <div className='relative flex flex-col gap-10 w-full'>
        <Landing/>
        <div>{t('hello-title')}</div>
        <Footer/>
      </div>
    </main>
  );
}
export default Home;