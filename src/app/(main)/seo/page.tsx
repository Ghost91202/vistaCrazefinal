import Faq from '@/components/faq/faq'
import Footer from '@/components/footer/footer'
import SeoHero from '@/components/hero/seoHero'

import Industries from '@/components/industry/industries'
import NavbarDemo from '@/components/navbar/navbar'
import Seosection2 from '@/components/Sections/seosection2'
import Seosection3 from '@/components/Sections/seosection3'
import Testimonials from '@/components/testimonials/testimonials'
import Head from 'next/head'

type Props = {}

const Home = (props: Props) => {
  return (
    <>

       <Head>
      <title>SEO page Digital marketing agency</title>
      <meta name="description" content="This is my awesome Next.js website." />
      <meta name="Kravion  DIgital marketing agency" content="next.js, SEO, web development" />

         <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://www.kravion.com",
          "@type": "WebSite",
          "name": "Kravion  Digital marketing agency  ",
          "url": "https://www.kravion.com",
        })}
      </script>
      </Head>

    <div >
          <SeoHero />
          <Seosection2 />
          <Seosection3 />
          <Industries/>
          <Testimonials />
          <Faq />
    </div>
    </>
  )
}

export default Home
