import Faq from '@/components/faq/faq'
import Footer from '@/components/footer/footer'
import SeoHero from '@/components/hero/seoHero'
import Service from '@/components/homesections/service/service'
import Industries from '@/components/industry/industries'
import NavbarDemo from '@/components/navbar/navbar'
import Seosection2 from '@/components/Sections/seosection2'
import Seosection3 from '@/components/Sections/seosection3'
import Testimonials from '@/components/testimonials/testimonials'
import { IconLayoutNavbarInactive } from '@tabler/icons-react'

import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
      <div >
          <NavbarDemo/>
          <SeoHero />
          <Seosection2 />
          <Seosection3 />
          <Industries/>
          <Testimonials />
          <Faq />
          <Footer/>
    </div>
  )
}

export default Home
