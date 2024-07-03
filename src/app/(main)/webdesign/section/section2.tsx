import TextReveal from '@/components/gsap/TextReveal'
import React from 'react'

type Props = {}

const section2 = (props: Props) => {
  return (
      <div className='flex h-screen flex-col xl:gap-20 xl:p-20 bg-black'>
          <h1 className='xl:text-6xl xl:w-1/2 font-semibold'><TextReveal text='Websites That
              Push New Limits'/></h1>
          <div className='grid grid-flow-row grid-cols-3'>
              <span className=' rounded-full px-3 py-1 bg '>Our Excellence
              </span>
              <div>

              </div>
          </div>
    </div>
  )
}

export default section2
