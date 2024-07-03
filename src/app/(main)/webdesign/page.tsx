import React from 'react'
import Hero from './hero/hero'
import ImageZoom from '@/components/gsap/ImageZoom'
import TextReveal from '@/components/gsap/TextReveal'
import Navbar from '@/components/navbar/navbar2'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero />
      <ImageZoom />
       <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-10">Text Reveal on Scroll</h1>
      <div className="h-screen"></div> {/* Add some extra height to see the scroll effect */}
      <TextReveal text="You can add multiple instances of this effect on the same page." />
      </div>
      <div className='h-screen'></div>
    </div>
  )
}

export default Home
