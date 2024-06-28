import React from 'react';
import HoverContent from './hovertext'; // Assuming correct path to HoverContent component
import Img from '../../../../public/Picsart_24-06-26_08-48-38-630.png';

interface Props {}

const Service: React.FC<Props> = (props) => {
  return (
    <div className='flex flex-col mt-10 lg:mt-20'>
      <h1 className='lg:text-3xl font-bold text-xl'>Services</h1>
      <div className='flex flex-col gap-5'>
        <HoverContent text="Branding" imageUrl={Img} />
        <HoverContent text="Brand Strategy" imageUrl={Img} />
        <HoverContent text="Motion graphics" imageUrl={Img} />
        <HoverContent text="Video Editing" imageUrl={Img} />
        <HoverContent text="3D Animation" imageUrl={Img} />
        <HoverContent text="Audio Production" imageUrl={Img} />
        <HoverContent text="Web Design" imageUrl={Img} />
        <HoverContent text="Advertising" imageUrl={Img} />
      </div>
    </div>
  );
};

export default Service;
