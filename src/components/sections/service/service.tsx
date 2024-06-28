import React from 'react';
import HoverContent from './hovertext'; // Assuming correct path to HoverContent component
import Img from '../../../../public/brand.jpg';
import Img1 from '../../../../public/branding.png';
import Img3 from '../../../../public/motion.png';
import img4 from "../../../../public/rd.png"

interface Props {}

const Service: React.FC<Props> = (props) => {
  return (
    <div className='flex flex-col  p-20'>
      <h1 className='lg:text-5xl font-bold text-xl float-right flex items-end justify-end '>Services</h1>
      <div className='flex flex-col '>
        <HoverContent text="Branding" imageUrl={Img.src} />
        <HoverContent text="Brand Strategy" imageUrl={Img1.src} />
        <HoverContent text="Motion graphics" imageUrl={Img3.src} />
        <HoverContent text="Video Editing" imageUrl={img4.src} />
        <HoverContent text="3D Animation" imageUrl={Img1.src} />
        <HoverContent text="Audio Production" imageUrl={Img3.src} />
        <HoverContent text="Web Design" imageUrl={Img.src} />
        <HoverContent text="Advertising" imageUrl={img4.src} />
      </div>
    </div>
  );
};

export default Service;
