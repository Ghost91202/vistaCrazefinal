interface Section3Props {
  maintitle: string;
  title: string;
  desc: string;
  title2: string;
  desc2: string;
  title3: string;
  desc3: string;
  title4: string;
  desc4: string;
  title5: string;
  desc5: string;
}

const Section3: React.FC<Section3Props> = ( params ) => {
  return (
    <div className="grid grid-flow-row grid-cols-1 bg-violet-800 font-serif text-white p-10 lg:p-20 lg:grid-cols-2  gap-10">
      <div className="flex flex-col gap-4 lg:gap-10">
        <h1 className=" sm:text-4xl text-xl ">Our Infinity-5 Framework</h1>
        <p className=" sm:text-xl text-sm">{params.maintitle}</p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-2">
          <div>
            <span className=" bg-violet-600 p-2 rounded-full w-10 h-10 flex justify-center items-center text-white">
              1
            </span>
          </div>
          <div className=" flex flex-col gap-5">
            <h1 className="flex gap-5 lg:text-2xl text-lg ">{params.title}</h1>
            <p className="flex gap-5 lg:text-lg text-sm">{params.desc}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <span className=" bg-violet-600 p-2 rounded-full w-10 h-10 flex justify-center items-center text-white">
              2
            </span>
          </div>
          <div className=" flex flex-col gap-5">
            <h1 className="flex gap-5 lg:text-2xl text-lg"> {params.title2}</h1>
            <p className="flex gap-5 lg:text-lg text-sm">{params.desc2}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <span className=" bg-violet-600 p-2 rounded-full w-10 h-10 flex justify-center items-center text-white">
              3
            </span>
          </div>
          <div className=" flex flex-col gap-5">
            <h1 className="flex gap-5 lg:text-2xl text-lg ">
              {" "}
              {params.title3}
            </h1>
            <p className="flex gap-5 lg:text-lg text-sm">{params.desc3}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <span className=" bg-violet-600 p-2 rounded-full w-10 h-10 flex justify-center items-center text-white">
              4
            </span>
          </div>
          <div className=" flex flex-col gap-5">
            <h1 className="flex gap-5 lg:text-2xl text-lg"> {params.title4}</h1>
            <p className="flex gap-5lg:text-lg text-sm">
              {params.desc4}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <span className=" bg-violet-600 p-2 rounded-full w-10 h-10 flex justify-center items-center text-white">
              5
            </span>
          </div>
          <div className=" flex flex-col gap-5">
            <h1 className="flex gap-5 lg:text-2xl text-lg "> {params.title5}</h1>
            <p className="flex gap-5 lg:text-lg text-sm">
              {params.desc5}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section3
