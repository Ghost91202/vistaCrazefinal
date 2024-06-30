import Image from "next/image";
import Engagement from "../../assets/engagement.avif"

export default function engagement(  ) {
    return (
        <div className="lg:pb-10 lg:h-2xl lg:p-10">

            <div className="bg-blue-700 flex flex-col lg:gap-10  p-5 rounded-2xl">
                <div className=" ">
                      <div className=" flex flex-col gap-5 absolute z-10 text-white lg:w-1/2 p-2 lg:p-10">
                    <h1 className="lg:text-5xl text-xl font-semibold ">SEO Engagement Models</h1>
                    <p className=" text-xl text-bold">You can partner with Pie-bond to get solutions tailored specially for your unique needs. Are you a CEO or Marketing Manager looking to increase your brand’s digital footprint or a start-up looking for consultation? We have got you covered in our dynamic SEO Engagement Models.
                    </p>
                </div>
                <Image src={Engagement} alt="pie-bond" className="
                  rounded-2xl w-full lg:h-96 "  width={500}
      height={500}/>


                </div>
                <div className="flex lg:gap-5 lg:p-5">
                     <div className="flex flex-col text-white font-semibold gap-10">
                    <div className="">
                        <h1 className="lg:text-4xl">SEO Plans (Enterprise Plans)</h1>
                        <p>You can onboard us as an SEO Agency by choosing a suitable SEO package, and we’ll do the heavy lifting of managing SEO for your brand end-to-end.</p>
                    </div>
                    <div>
                        <h1 className="lg:text-4xl">SEO Consulting</h1>
                        <p>If you already have an in-house SEO team and need experts to step in for strategy and monitoring, you can onboard us as SEO Consultants.</p>
                        </div>
                         <div className="">
                        <h1 className="lg:text-4xl">SEO Advisory</h1>
                        <p>If you’re a start-up and need help with disrupting the market, you can sign us up to capitalize on our experience SEO strategy and get organic growth.</p>
                    </div>
                </div>
                <div className="flex flex-col text-white font-semibold gap-10">
                    <div className="">
                        <h1 className="lg:text-4xl">Dedicated SEO Resources</h1>
                        <p>You can hire a dedicated SEO resource or even a remote SEO team that will work primarily on your project.</p>
                    </div>
                    <div>
                        <h1 className="lg:text-4xl">SEO Reseller Services</h1>
                        <p>If you’re an agency, you can avail our SEO reseller services to part off with the responsibilities to manage your SEO campaign.</p>
                    </div>
                </div>


               </div>
            </div>
        </div>
    )
}
