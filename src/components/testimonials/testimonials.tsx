// components/CardSlider.tsx
"use client"
// components/CardSlider.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProfileImage from '../../../public/brand.jpg'; // Replace with your image path

const Testimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        { id: 2, head: "heading1", Name: "karan ", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore nobis quasi voluptas. Beatae ratione itaque inventore quod iure et similique, autem aspernatur earum, iusto repellat eaque obcaecati laboriosam dolor?', img: ProfileImage },
        { id: 1, head: "heading1", Name: "karan ", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore nobis quasi voluptas. Beatae ratione itaque inventore quod iure et similique, autem aspernatur earum, iusto repellat eaque obcaecati laboriosam dolor?', img: ProfileImage },
        { id: 3, head: "heading1", Name: "karan ", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore nobis quasi voluptas. Beatae ratione itaque inventore quod iure et similique, autem aspernatur earum, iusto repellat eaque obcaecati laboriosam dolor?', img: ProfileImage },
        { id: 4, head: "heading1", Name: "karan ", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore nobis quasi voluptas. Beatae ratione itaque inventore quod iure et similique, autem aspernatur earum, iusto repellat eaque obcaecati laboriosam dolor?', img: ProfileImage },
        { id: 5, head: "heading1", Name: "karan ", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore nobis quasi voluptas. Beatae ratione itaque inventore quod iure et similique, autem aspernatur earum, iusto repellat eaque obcaecati laboriosam dolor?', img: ProfileImage },
        { id: 6, head: "heading1", Name: "karan ", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore nobis quasi voluptas. Beatae ratione itaque inventore quod iure et similique, autem aspernatur earum, iusto repellat eaque obcaecati laboriosam dolor?', img: ProfileImage },
        { id: 7, head: "heading1", Name: "karan ", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore nobis quasi voluptas. Beatae ratione itaque inventore quod iure et similique, autem aspernatur earum, iusto repellat eaque obcaecati laboriosam dolor?', img: ProfileImage },
        { id: 8, head: "heading1", Name: "karan ", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore nobis quasi voluptas. Beatae ratione itaque inventore quod iure et similique, autem aspernatur earum, iusto repellat eaque obcaecati laboriosam dolor?', img: ProfileImage },
        { id: 9, head: "heading1", Name: "karan ", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore nobis quasi voluptas. Beatae ratione itaque inventore quod iure et similique, autem aspernatur earum, iusto repellat eaque obcaecati laboriosam dolor?', img: ProfileImage },
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(cards.length / 3) - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === Math.ceil(cards.length / 3) - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full bg-gray-100 text-black flex flex-col gap-10 overflow-hidden p-5 lg:p-5 xl:p-10">
            <div className='flex flex-col gap-5'>
                <span className='text-sm w-fit px-3 py-1 bg-slate-200 rounded-md'>Testimonials</span>
                <h1 className='xl:w-1/2 lg:w-1/2 text-2xl lg:text-4xl  xl:text-5xl font-semibold'>Never Convinced?
Hear From Our Clients.</h1>
            </div>
            <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {Array.from({ length: Math.ceil(cards.length / 3) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 flex">
                        <div className='xl:flex lg:flex hidden '>
                            {cards.slice(slideIndex * 3, slideIndex * 3 + 3).map((card) => (
                            <div key={card.id} className="w-full flex flex-col gap-5 sm:w-1/2 lg:w-1/3 p-2">

                                <div className="p-6 flex flex-col gap-5 bg-white m-4 rounded-lg shadow-lg">
                                    <h1  className='xl:text-2xl  lg:text-2xl border-l pl-4 '>{card.head}</h1>

                                    <div>
                                        {card.content}
                                    </div>
                                </div>
                                <div className="relative items-center pl-5 flex gap-5 w-full">
                                    <Image
                                        src={card.img}
                                        alt=""
                                        className="rounded-full h-12 w-12"
                                        width={50}

                                    />
                                    <h6>{card.Name}</h6>
                                </div>
                            </div>
                        ))}
                        </div>
                        <div className=' flex xl:hidden lg:hidden '>
                            {cards.slice(slideIndex * 1, slideIndex * 1 + 3).map((card) => (
                            <div key={card.id} className="w-full flex flex-col gap-5 sm:w-1/2 lg:w-1/3 p-2">

                                <div className="p-6 flex flex-col gap-5 bg-white m-4 rounded-lg shadow-lg">
                                    <h1  className='xl:text-2xl  lg:text-2xl border-l pl-4 '>{card.head}</h1>

                                    <div>
                                        {card.content}
                                    </div>
                                </div>
                                <div className="relative items-center pl-5 flex gap-5 w-full">
                                    <Image
                                        src={card.img}
                                        alt=""
                                        className="rounded-full h-12 w-12"
                                        width={50}

                                    />
                                    <h6>{card.Name}</h6>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className=' flex items-center gap-5 justify-center'>
                <button onClick={handlePrev} className=" left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full">
                    <FaChevronLeft />
                </button>
                <button onClick={handleNext} className=" right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full">
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
