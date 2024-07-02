import Image from 'next/image'
import React from 'react'
import Ngo from "../../../public/ngo.jpg"
type Props = {}

const card = (props: Props) => {
  return (
      <div>
           <div className=''>
              <Image src={Ngo} alt='vistacraze Industries page'/>
          </div>
    </div>
  )
}

export default card
