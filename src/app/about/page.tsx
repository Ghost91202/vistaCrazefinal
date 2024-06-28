import React from 'react'
import About from './components/carousel'

type Props = {}

const page = (props: Props) => {
  return (
      <div className='h-screen flex items-center justify-center'>
          <About/>
    </div>
  )
}

export default page
