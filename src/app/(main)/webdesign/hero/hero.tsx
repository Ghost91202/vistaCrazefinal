import React from 'react'
import "./style.css"
import Link from 'next/link'

type Props = {}

const hero = (props: Props) => {
  return (
    <div className='bg h-screen flex flex-col items-center justify-center gap-10'>
      <h1 className='flex xl:text-8xl xl:w-1/2 text-center font-semibold'>Website Design &
        Development Agency</h1>
      <div className='flex items-center gap-10'>
          <Link href="/" className='bg-white rounded-full px-3 py-1 text-black'>Request a Proposal</Link>
      <Link href="/" className='border-b pb-1 border-white'>Contact US</Link>

    </div>
    </div>
  )
}

export default hero
