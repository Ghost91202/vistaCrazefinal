import React from 'react'
import  "../carousel/style.css"

type Props = {}

const testimonials = (props: Props) => {
  return (
      <div className='text-black h-screen flex flex-col sm:gap-20 bg-gray-100 p-5 sm:p-20'>
          <div className='grid grid-flow-row grid-cols-2'>
              <div className='flex flex-col gap-5'>
                  <span className=' bg-slate-100 w-fit px-3 p-1 sm:text-md text-sm'>
                      testimonials
                  </span>
                  <h1 className='sm:text-6xl font-semibold text-4xl '>
                      Never Convinced?
Hear From Our Clients.
                  </h1>
              </div>
              <div>

              </div>

          </div>
          <div>
              <div className="slider text-black">
            <div className="slide-track flex gap-5">
                <div className="slide bg-white rounded-md">
                    <h1>hello</h1>
                </div>
                <div className="slide bg-white rounded-md">
                    <h1>hello</h1>
                </div>
                <div className="slide bg-white rounded-md">
                    <h1>hello</h1>
                </div>
                <div className="slide bg-white rounded-md">
                    <h1>hello</h1>
                </div>
                <div className="slide bg-white rounded-md">
                    <h1>hello</h1>
                </div>
                <div className="slide bg-white rounded-md">
                    <h1>hello</h1>
                </div>
                <div className="slide bg-white rounded-md">
                    <h1>hello</h1>
                </div>
                <div className="slide bg-white rounded-md">
                    <h1>hello</h1>
                </div>
                <div className="slide bg-white rounded-md">
                    <h1>hello</h1>
                </div>
                <div className="slide bg-white rounded-md">
                    <h1>hello</h1>
                </div>
                <div className="slide bg-white rounded-md">
                    <h1>hello</h1>
                </div>
                <div className="slide bg-white rounded-md">
                    <h1>hello</h1>
                </div>

            </div>
            </div>
          </div>
    </div>
  )
}

export default testimonials
