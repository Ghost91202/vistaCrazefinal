
import Image from 'next/image';
import './Grid.css';
import I1 from '../../assets/I1.jpg';
import I2 from '../../assets/I2.jpg';
import I3 from '../../assets/I3.jpg';
import I4 from '../../assets/I4.jpg';
import I5 from '../../assets/I5.jpg';
import I6 from '../../assets/I6.jpg';

const Grid = () => {
  return (
    <div className='p-10 lg:p-20'>
      <div className='grid grid-flow-row  grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
        <div className='relative image-container hover-zoom group'><Image src={I1} alt="pie bond digital marketing agency" className="w-full h-full object-cover" />
          <div className='content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold'><div className='group-hover:opacity-0'>Seo</div> <div className='hidden-container opacity-0 group-hover:opacity-100'>Seo <br />sm</div></div>
        </div>
        <div className='relative image-container hover-zoom group'><Image src={I2} alt="pie bond digital marketing agency" className="w-full h-full object-cover" /><div className='content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold'><div className='group-hover:opacity-0'>Seo</div> <div className='hidden-container opacity-0 group-hover:opacity-100'>Seo <br />sm</div></div></div>
        <div className='relative image-container hover-zoom group'><Image src={I3} alt="pie bond digital marketing agency" className="w-full h-full object-cover" /><div className='content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold'><div className='group-hover:opacity-0'>Seo</div> <div className='hidden-container opacity-0 group-hover:opacity-100'>Seo <br />sm</div></div></div>
        <div className='relative image-container hover-zoom group'><Image src={I4} alt="pie bond digital marketing agency" className="w-full h-full object-cover" /><div className='content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold'><div className='group-hover:opacity-0'>Seo</div> <div className='hidden-container opacity-0 group-hover:opacity-100'>Seo <br />sm</div></div></div>
        <div className='relative image-container hover-zoom group'><Image src={I5} alt="pie bond digital marketing agency" className="w-full h-full object-cover" /><div className='content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold'><div className='group-hover:opacity-0'>Seo</div> <div className='hidden-container opacity-0 group-hover:opacity-100'>Seo <br />sm</div></div></div>
        <div className='relative image-container hover-zoom group'><Image src={I6} alt="pie bond digital marketing agency" className="w-full h-full object-cover" /><div className='content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold'><div className='group-hover:opacity-0'>Seo</div> <div className='hidden-container opacity-0 group-hover:opacity-100'>Seo <br />sm</div></div></div>
      </div>
    </div>
  );
};

export default Grid;
