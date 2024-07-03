import React from 'react'
import Hero from './hero/hero'
import ImageZoom from '@/components/gsap/ImageZoom'
import TextReveal from '@/components/gsap/TextReveal'
import NavbarDemo from '@/components/navbar/navbar'
import Section1 from './section/section1'
import Section2 from './section/section2'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='w-screen overflow-x-hidden'>
      <NavbarDemo/>
      <Hero />
      <ImageZoom />
      <div className='relative'></div>
      <Section1 />
      <Section2/>
    </div>
  )
}

export default Home
