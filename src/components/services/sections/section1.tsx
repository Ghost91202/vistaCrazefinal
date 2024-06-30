import Slider from "../../servicesslider/Swiperslide"
export default function section1(  ) {

    return (
        <div className="  bg-blue-800 flex flex-col gap-10 lg:h-auto lg:p-20 items-center text-white">
            <div>
                <div className=" flex flex-col gap-5">
                    <div className=" flex gap-2 ">
                        <h1 className=" flex gap-2">Home <span>/</span> </h1>
                        <h1 className=" flex gap-2">Digital Marketing Services <span>/</span></h1>
                        <h1>SEO</h1>
                    </div>
                    <div className=" flex flex-col gap-10">
                        <h1 className=" lg:text-4xl font-mono text-2xl">Professional SEO Agency in India</h1>
                        <p className=" w-3/4 text-xl font-mono">At Pi-bond Digital, we understand the power of SEO in transforming your digital footprint. Our experienced team offers bespoke SEO services, ensuring your website not only engages but converts your audience into loyal customers. Our holistic approach to SEO encompasses technical finesse, content mastery and authoritative link-building, all tailored to your unique business needs.</p>

                        <button>
                            Schedule a call
                         </button>
                    </div>
                </div>
            </div>
            <div>
                <Slider/>
            </div>
        </div>
    )
}
