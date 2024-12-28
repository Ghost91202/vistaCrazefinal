import React from 'react'
import Hero from './hero/hero'
import ImageZoom from '@/components/gsap/ImageZoom'
import TextReveal from '@/components/gsap/TextReveal'
import NavbarDemo from '@/components/navbar/navbar'
import Section1 from './section/section1'
import Section2 from './section/section2'
import Section3 from './section/section3'
import Industries from '@/components/industry/industries'
import Testimonials from '@/components/testimonials/testimonials'
import Faq from '@/components/faq/faq'
import Footer from '@/components/footer/footer'
import Section4 from './section/section4'
import Head from 'next/head'

type Props = {}

const Home = (props: Props) => {
  return (
    <>

      <Head>
      <title>Web designing | Kravion  Digital marketing agency</title>
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

    <div className='w-screen overflow-x-hidden'>
      <Hero />
      <ImageZoom />
      <div className='relative'></div>
      <Section1 />
      <Section2 />
      {/* <Section3 /> */}
      <Section4/>
      <Industries />
      <Testimonials />
      <Faq />
    </div>
    </>
  )
}

export default Home
