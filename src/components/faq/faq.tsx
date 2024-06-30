"use client";
import './faq.css';
import { MdKeyboardArrowDown } from "react-icons/md";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './gsap.css';

gsap.registerPlugin(ScrollTrigger);

interface FAQProps {
  q1: string;
  a1: string;
  q2: string;
  a2: string;
  q3: string;
  a3: string;
  q4: string;
  a4: string;
  q5: string;
  a5: string;
}

const FAQ: React.FC<FAQProps> = (props) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.slide-container',
        start: 'bottom center',
        end: 'top center',
        scrub: 1,
      },
    });

    tl.from('.left-text', { x: '-100%', opacity: 0 })
      .from('.right-text', { x: '100%', opacity: 0 }, '-=1')
      .to('.left-text, .right-text', { x: '0%', opacity: 1, ease: 'power2.out' });
  }, []);

  const questions = [
    { question: props.q1, answer: props.a1 },
    { question: props.q2, answer: props.a2 },
    { question: props.q3, answer: props.a3 },
    { question: props.q4, answer: props.a4 },
    { question: props.q5, answer: props.a5 },
  ];

  return (
    <div className="lg:p-10 flex pb-10 pt-20 justify-center w-screen bg-white font-mono overflow-x-hidden items-center">
      <div className="accordion relative w-screen justify-center flex lg:gap-10">
        <div className="slide-container lg:text-6xl font-serif text-3xl lg:mb-0 -mb-12 overflow-hidden flex">
          <div className="h-44">
            <div className="left-text">
              <h1 className="text-left text-black">Frequently</h1>
            </div>
            <div className="right-text">
              <h1 className="text-right text-blue-700">Asked Question</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start">
          {questions.map((item, index) => (
            <div key={index} className="max-w-4xl pb-4">
              <details className="open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg" open>
                <summary className="lg:text-xl leading-6 text-black  select-none">{item.question}</summary>
                <div className="mt-3 lg:text-xl text-gray-500 leading-6">
                  <p>{item.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
