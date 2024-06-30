import React from 'react'
import { Interface } from 'readline'



const Hero1 = ({head, head2, para, para2, para3, number, number2, number3, para4}:{head:String, head2:String, para:String, para2:String, para3:String, para4:String, number:string, number2:String, number3:String }) => {
  return (
      <div className='h-auto py-10  bg-gray-100  grid grid-flow-col grid-rows-2 items-center p-10'>
          <h1 className='text-7xl text-slate-950 opacity-80  font-bold sm:mt-40 pb-10  font-mono  w-2/3'>{head}</h1>
          <div>
              <div className='text-slate-950 opacity-90  grid grid-flow-row grid-cols-2 sm:gap-40'>
              <div className='flex flex-col gap-10'>
                   <h1 className='sm:text-4xl text-balance font-semibold font-mono'>{head2}</h1>
              <p>{para}</p>
                  </div>
                  <div className='grid grid-flow-row grid-cols-2 gap-5'>
                     <div className=' flex flex-col  '>
                          <h1 className='sm:text-7xl text-4xl font-bold opacity-65'>
                              {number}
                          </h1>
                          <p className=' flex items-center text-2xl'>{para2}</p>
                    </div>
                     <div className=' flex flex-col  '>
                          <h1 className='sm:text-7xl text-4xl font-bold opacity-65'>
                              {number2}
                          </h1>
                          <p className=' flex items-center text-2xl'>{para3}</p>
                    </div>
                     <div className=' flex flex-col  '>
                          <h1 className='sm:text-7xl text-4xl font-bold opacity-65'>
                             {number3}
                          </h1>
                          <p className=' flex items-center text-2xl'>{para4}</p>
                    </div>
                  </div>
          </div>
          </div>

    </div>
  )
}

export default Hero1
