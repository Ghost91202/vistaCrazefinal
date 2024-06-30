

import Footer from '@/components/footer/footer';
import Navbar from "@/components/navbar/navbar"



export default function Contactus() {
  return (
    <>
    <Navbar />
    <div className="h-max pb-10 bg-gray-300 lg:flex xl:justify-around pt-16">
      <div className="p-4">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold pb-5 py-2 xl:pt-20 pt-10 2xl:text-8xl">
          Let&apos;s work <div className="text-gray-600">— together.</div>
       </div>
      </div>
      <div className="form-box  xl:w-1/2 xl:py-10">
        <div className="form-group p-4">
          <label htmlFor="name" className="block xl:text-lg py-4 text-sm font-bold">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full outline-none border-b-2 border-black bg-transparent text-xl"
          />
        </div>

        <div className="form-group p-4">
          <label htmlFor="companyname" className="block xl:text-lg py-4 text-sm font-bold">
            Company Name
          </label>
          <input
            type="text"
            name="companyname"
            className="w-full outline-none border-b-2 border-black bg-transparent text-xl"
          />
        </div>

        <div className="form-group p-4">
          <label htmlFor="phoneno" className="block xl:text-lg py-4 text-sm font-bold">
            Phone No.
          </label>
          <input
            type="text"
            name="phoneno"
            className="w-full outline-none border-b-2 border-black bg-transparent text-xl"
          />
        </div>

        <div className="form-group p-4">
          <label htmlFor="email" className="block xl:text-lg py-4 text-sm font-bold">
            Email*
          </label>
          <input
            type="text"
            name="email"
            className="w-full outline-none border-b-2 border-black bg-transparent text-xl"
          />
        </div>

        <div className="form-group p-4">
          <label htmlFor="service" className="block xl:text-lg py-6 xl:pb-10 text-sm font-bold">
            Service required
          </label>
          <select
            name="service"
            className="w-full outline-none border-b-2 border-black bg-transparent text-xl"
          >
            <option value="" disabled selected>
              Select a service
            </option>
            <option value="digital-marketing">DIGITAL MARKETING</option>
            <option value="digital-strategy">DIGITAL STRATEGY</option>
            <option value="web-development">WEB DEVELOPMENT</option>
            <option value="branding-design">BRANDING and UX/UI DESIGN</option>
            <option value="app-development">APP DEVELOPMENT</option>
            <option value="staff-augmentation">STAFF AUGMENTATION</option>
            <option value="content-service">CONTENT SERVICE</option>
          </select>
        </div>

        <div className="form-group p-4">
          <label htmlFor="email" className="block xl:text-lg py-4 text-sm font-bold">
            Project Details
          </label>
          <input
            type="text"
            name="email"
            className="w-full outline-none text-wrap border-b-2 border-black bg-transparent py-4 text-xl"
          />
        </div>

        <div className="p-4  pb-20">
          <button className='bg-yellow-400 text-gray-700 text-lg font-semibold  py-2 px-10 rounded'>Send Inquiry</button>
        </div>
      </div>
    </div>
    <div className="bg-black py-16 px-5 xl:py-20">
        <div className="text-white text-2xl xl:text-4xl xl:w-1/2 xl:px-10 leading-8 ">
          Feel free to reach out to us via email for <span className="text-gray-500">Business collaborations</span> or
          <span className="text-gray-500"> career opportunities</span> at <div className="underline py-12"><a href='mailto:piebondtech@gmail.com'>piebondtech@gmail.com</a></div>
        </div>
       <div className="p-2 xl:px-10 xl:pb-8"> <button className='bg-yellow-400 text-gray-700 text-lg font-semibold  py-2 px-10 rounded'>Positions</button></div>
      </div>
      <Footer />
    </>
  );
}
