
import React from 'react'


interface ProvenProps {
  title1: string;
  desc1: string;
  title2: string;
  desc2: string;
  title3: string;
  desc3: string;
}

const Proven: React.FC<ProvenProps> = ({ title1, desc1, title2, desc2, title3, desc3 }) => {
    return (
        <div className=" lg:h-96 w-screen justify-center items-center h-auto lg:p-20 bg-black text-white ">
            <div className=" grid grid-flow-row grid-cols-1 lg:grid-cols-3 ">
                <div className=" flex flex-col gap-5 border-r border-gray-600 p-5">
                    <div>

                    </div>
                    <div className="flex flex-col gap-10 justify-between">
                        <h1 className="lg:text-2xl text-lg">
                            {title1}
                        </h1>
                        <p className="text-balance text-sm ">
                            {desc1}
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col gap-5 border-r border-gray-600 p-5">
                 <div>

                    </div>
                    <div className="flex flex-col gap-10 justify-between">
                        <h1 className="lg:text-2xl text-lg">
                            {title2}
                        </h1>
                        <p className="text-balance text-sm ">
                            {desc2}
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col gap-5 border-gray-600 p-5">
 <div>

                    </div>
                    <div className="flex flex-col gap-10 justify-between">
                        <h1 className="lg:text-2xl text-lg">
                            {title3}
                        </h1>
                        <p className=" text-sm ">
                            {desc3}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Proven
