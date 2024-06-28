import React from 'react';
import HoverContent from './hovertext'; // Assuming correct path to HoverContent component
import Img from '../../../../public/Picsart_24-06-26_08-48-38-630.png';

interface Props {}

const Service: React.FC<Props> = (props) => {
  return (
    <div className='flex flex-col mt-10 lg:mt-20'>
      <h1 className='lg:text-3xl font-bold text-xl'>Services</h1>
      <div className='flex flex-col gap-5'>
        <HoverContent text="Branding" imageUrl={Img.src} />
        <HoverContent text="Brand Strategy" imageUrl={Img.src} />
        <HoverContent text="Motion graphics" imageUrl={Img.src} />
        <HoverContent text="Video Editing" imageUrl={Img.src} />
        <HoverContent text="3D Animation" imageUrl={Img.src} />
        <HoverContent text="Audio Production" imageUrl={Img.src} />
        <HoverContent text="Web Design" imageUrl={Img.src} />
        <HoverContent text="Advertising" imageUrl={Img.src} />
      </div>
    </div>
  );
};

export default Service;
