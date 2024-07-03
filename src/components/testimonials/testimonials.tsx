// components/CardSlider.tsx
"use client"
// components/CardSlider.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProfileImage from '../../../public/brand.jpg'; // Replace with your image path

const CardSlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        { id: 1, content: 'Card 1 Content', img: ProfileImage },
        { id: 2, content: 'Card 2 Content', img: ProfileImage },
        { id: 3, content: 'Card 3 Content', img: ProfileImage },
        { id: 4, content: 'Card 4 Content', img: ProfileImage },
        { id: 5, content: 'Card 5 Content', img: ProfileImage },
        { id: 6, content: 'Card 6 Content', img: ProfileImage },
        { id: 7, content: 'Card 7 Content', img: ProfileImage },
        { id: 8, content: 'Card 8 Content', img: ProfileImage },
        { id: 9, content: 'Card 9 Content', img: ProfileImage },
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
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full bg-gray-100 overflow-hidden">
            <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {Array.from({ length: Math.ceil(cards.length / 3) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 flex">
                        {cards.slice(slideIndex * 3, slideIndex * 3 + 3).map((card) => (
                            <div key={card.id} className="w-full flex flex-col gap-5 sm:w-1/2 lg:w-1/3 p-2">
                                <div className="p-6 bg-white m-4 rounded-lg shadow-lg">
                                    {card.content}
                                </div>
                                <div className="relative w-full h-48">
                                    <Image
                                        src={card.img}
                                        alt=""
                                        className="rounded-full"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className=' flex items-center justify-center'>
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

export default CardSlider;
