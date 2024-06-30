// section2.tsx
import Image from "next/image";
import seoimg2 from "../../../assets/seoimg2.jpg";

interface Section2Props {
  title: string;
  desc1: string;
  desc2: string;
}

export default function Section2({ title, desc1, desc2 }: Section2Props) {
  return (
    <div className="flex lg:flex-row flex-col gap-10 font-serif p-10">
      <Image src={seoimg2} alt="pie-bond" className="w-96" />
      <div className="flex flex-col gap-5 lg:p-10">
        <h1 className="lg:text-4xl text-2xl">{title}</h1>
        <p className="lg:text-xl text-sm">{desc1}</p>
        <p className="lg:text-lg text-sm">{desc2}</p>
      </div>
    </div>
  );
}
