import Accordion from '@/components/Accordion/Accordion2'
import Meeting from '@/components/meeting'
import Link from 'next/link'
import React from 'react'

type Props = {}

const section3 = (props: Props) => {
    return (
        <div className='flex flex-col bg-white text-black gap-10 p-5 lg:p-20 xl:p-20'>
            <div className='flex xl:flex-row justify-between gap-10 flex-col  lg:flex-row'>
                <div className='flex flex-col gap-10'>
                    <h1 className='xl:text-4xl lg:text-3xl font-semibold text-2xl'> Our Services</h1>
                    <div className='flex items-center gap-10'>
                        <Link href="#" className=' bg-violet-600 text-white rounded-full px-3 py-1 '>Request a Proposal</Link>
                        <Link href="#" className='border-b pb-1 border-gray-300'>Contact US</Link>

                    </div>
                </div>
                <p className='xl:w-96 lg:w-96 w-full'>
                    Our team integrates strategy, branding, UX design, and technology to create award-winning websites
                </p>
            </div>
            <div className='grid grid-flow-row grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-10'>
                <Accordion items={[
                    { title: 'What is your refund policy?', content: 'Our refund policy is...' },

                ]} />
                <Accordion items={[
                    { title: 'What is your refund policy?', content: 'Our refund policy is...' },

                ]} />
                <Accordion items={[
                    { title: 'What is your refund policy?', content: 'Our refund policy is...' },

                ]} />
            </div>
        </div>
    )
}

export default section3
