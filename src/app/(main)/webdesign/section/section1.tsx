import React from 'react'
import "../hero/style.css"
import TextReveal from '@/components/gsap/TextReveal'
import Link from 'next/link'

type Props = {}

const section1 = (props: Props) => {
    return (
        <div className='h-auto bg-white xl:pb-0 p-20'>
            <div className='bg2 h-full rounded-2xl '>
                <div className='grid grid-flow-row grid-cols-2 xl:p-20 xl:gap-20 border-b border-gray-300/40'>
                     <div className='flex flex-col gap-10'>
                    <span className='xl:text-6xl font-semibold'>
                        <TextReveal text='Custom websites,
backed by strategy'/>

                    </span>
                    <div className='flex items-center gap-10'>
                        <Link href="/" className='bg-white rounded-full px-3 py-1 text-black'>Request a Proposal</Link>
                        <Link href="/" className='border-b pb-1 border-white'>Contact US</Link>

                    </div>
                </div>
                <div className='text-sm flex flex-col gap-10'>
                    <p>A strong online presence is essential to ensure the success of any business as it impacts how your audience perceives your brand. In order to maximize growth, a business needs to clearly differentiate itself from the vast sea of competition.  At Brand Vision, we specialize in designing websites that are not only visually stunning but also user-friendly, ensuring your brand makes an unforgettable impression.</p>
                    <p>Our team of award-winning web designers and expert web developers is passionate about modern web design and deeply understands the psychology of user experience. This combination results in a perfect blend of aesthetic appeal and functional excellence, all designed to help you achieve your business objectives through your website.</p>
                </div>
               </div>
            </div>

        </div>
    )
}

export default section1
