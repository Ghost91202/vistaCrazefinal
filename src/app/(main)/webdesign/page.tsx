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

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='w-screen overflow-x-hidden'>
      <NavbarDemo/>
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
      <Footer/>
    </div>
  )
}

export default Home
