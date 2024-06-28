import React from 'react'
import Logo from "../../../public/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import HoverContent  from "@/components/ui/hoverMedia"
export function Footer() {
  return (
      <div className='h-auto text-white pt-10 mt-10 p-10 border-t grid'>

              <Link href="/">
                  <Image src={Logo.src} alt="vistaCraze logo" width={200} height={100}/>
          </Link>
          <div>

          </div>
          <div className='grid sm:grid-flow-row sm:grid-cols-5'>
              <HoverContent
          text="Instagram"
          imageUrl={Logo.src}
        />
              <HoverContent
          text="FaceBook"
          imageUrl={Logo.src}
        />
              <HoverContent
          text="Twitter"
          imageUrl={Logo.src}
        />
              <HoverContent
          text="YouTube"
          imageUrl={Logo.src}
        />
              <HoverContent
          text="Pinterest"
          imageUrl={Logo.src}
        />
            </div>




      </div>
  )
}
