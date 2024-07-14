import React from 'react'
import "./style.css"
import Link from 'next/link'
import Image from 'next/image'
import Webimg from "../../../../../public/uiux.svg"
type Props = {}

const hero = (props: Props) => {
  return (
    <div className='bg-black xl:h-screen text-white h-screen  grid grid-flow-row grid-cols-2 sm:p-20 items-center justify-center gap-10'>
      <div className='flex flex-col gap-10'>
        <h1 className='sm:text-2xl lg:text-7xl '>
          Unlimited Design, One Monthly Price
        </h1>
        <p className=''>Elevate Your Business with Professional Design Service. One Affordable Monthly Fee. Your Design, Your Terms. Transform Your Business today!</p>
        <div className='flex gap-10'>
          <Link href="#" className='bg-violet-600 rounded-md px-5 py-3'>See plans</Link>
          <Link href="#" className='border-2 rounded-md px-5 py-3'>How it works</Link>
        </div>
      </div>
      <div>
        <Image src={Webimg} alt="vistacraze web design "/>
      </div>
    </div>
  )
}

export default hero
