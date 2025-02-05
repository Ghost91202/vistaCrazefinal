import React from 'react'
import Logo from "../../../public/Untitled design-4.png"
import Image from 'next/image'
import Link from 'next/link'
import "./style.css"
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialPintarest } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";

export default function Footer() {
  return (
    <div className='relative z-0'>

      <div className='h-auto w-full  bottom-0 -z-1 fixed footerbg text-white flex p-5 xl:p-10 flex-col gap-10'>

              <Link href="/" className='flex items-center gap-2 text-center'>
                  <Image src={Logo.src} alt="Kravion  marketing agency" width={50} height={100} className='rounded-lg'/>
                 <h2 className=' text-xl font-semibold'> Kravion marketing agency</h2>
      </Link>


      <div className='border-b flex gap-5 flex-col border-gray-300 pb-5 sm:pb-10'>
        <h2>follow Us:</h2>
        <div className='flex items-center  gap-3'>
          <Link href="https://www.instagram.com/kravionagency/"><RiInstagramFill className='text-pink-500 bg-white rounded-full text-3xl p-1' /></Link>
          <Link href="https://x.com/KravionAgency?t=sXFmyicst7nrSEkY_scofQ&s=09"><TiSocialTwitter className='text-blue-500 bg-white rounded-full text-3xl p-1' /></Link>
          <Link href="/"><SlSocialPintarest className='text-white bg-red-600 rounded-full text-3xl p-1' /></Link>
          <Link href="https://www.linkedin.com/company/kravion/"><SlSocialLinkedin className='text-white bg-blue-500 rounded-md text-3xl p-1' /></Link>
          {/* <Link href="/"><SlSocialGithub className='text-white  text-2xl ' /></Link> */}
          <Link href="https://www.facebook.com/share/1B6mPsoeGJ/"><TiSocialFacebook className='text-blue-500 bg-white rounded-full text-3xl p-1' /></Link>

        </div>
      </div>
      <div className='grid grid-flow-row gap-5 grid-cols-2 sm:grid-cols-4'>
      <div className='flex flex-col  gap-2 sm:flex-col'>
        <h5 className='text-lg font-semibold'>
          Quick Links
        </h5>
        <div className='flex flex-col  gap-2 '>
          <Link href="/">Home</Link>
        <Link href="/">Our Work</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        </div>
      </div>
      <div className='flex flex-col  gap-2 '>
        <h5 className='text-lg font-semibold'>
          Services
        </h5>
        <div className='flex flex-col gap-2'>

        <Link href="/webdesign">Web Development</Link>
        <Link href="/uiux">Branding</Link>
        <Link href="/uiux">UI UX</Link>
        {/* <Link href="/">Consultattion and Audit</Link> */}
        <Link href="/seo">SEO</Link>
        </div>
      </div>
      <div className='flex flex-col  gap-2 '>
        <h5 className='text-lg font-semibold'>
          Company
        </h5>
        <div className='flex flex-col gap-2'>
          <Link href="/">Insights</Link>
        <Link href="/career">Career</Link>
        <Link href="#faq">FAQs</Link>
        <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
      <div className='flex flex-col gap-2 sm:gap-10'>
        <h5 className='text-lg font-semibold'>
          Contact Us
        </h5>
        <div className='flex flex-col gap-2'>
          <Link href="/">info.Kravion@gmail.com</Link>
        <Link href="/">+91 7068669909</Link>
        <Link href="/">Uttar Pradesh</Link>

        </div>
      </div>
      </div>

      <div className=' border-t border-gray-300/40 flex items-center justify-center border-b p-5' id="cities">
        <div className='grid grid-flow-row grid-cols-3 gap-5 sm:gap-10 sm:grid-cols-6 w-full sm:px-32  items-center justify-between'>
      <Link href="/">Kanpur</Link>
      <Link href="/">Delhi</Link>
      <Link href="/">Bangalore</Link>
      <Link href="/">Lacknow</Link>
      <Link href="/">Chennai</Link>
      <Link href="/">Mumbai</Link>
      </div>
      </div>

      <h6 className='flex items-center text-center  justify-center xl:pb-10'>© All Copyright Reserved by Kravion  Marketing agency.</h6>
      </div>
    </div>
  )
}
