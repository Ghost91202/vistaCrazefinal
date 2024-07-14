// components/StaticTabs.tsx
"use client"
import Link from 'next/link';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Accordion from '../Accordion/Accordion';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'All' },
        { label: 'Website' },
        { label: 'Branding' },
        { label: 'Digital Marketing' },
    ];

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1)),
        onSwipedRight: () => setActiveTab((prev) => Math.max(prev - 1, 0)),
    });

    return (
        <div className="flex relative rounded-b-3xl z-10 mb-[100vh] gap-10 xl:p-20 lg:p-10 p-5 lg:pl-10 xxl sm:flex-row flex-col justify-around bg-white text-black">
            <div className=" justify-center xl:pl-0 xl:w-1/3 lg:w-1/3 flex flex-col gap-10">
                <span className="bg-slate-100 w-fit text-sm px-3 py-1">FAQ&apos;S</span>
                <h1 className="xl:text-3xl lg:text-2xl font-semibold">
                    Answers To Frequently Asked Questions
                </h1>
                <p>
                    Curious about how Brand Vision, a leading Web Design Company and Marketing Agency, operates? Explore our FAQ section for a comprehensive understanding of our services and procedures.
                </p>
                <Link href="/" className="border-b w-fit pb-2 hover:text-blue-500">
                    Let&apos;s Discuss
                </Link>
            </div>
            <div {...swipeHandlers} className="ring-offset-transparent">
                <div className="flex border-b xl:text-base text-xs border-gray-200">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`py-2 lg:px-3 px-2 xl:px-4 ${activeTab === index ? 'border-b-2 border-blue-500' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="p-4 ring-offset-transparent">
                    {activeTab === 0 && (
                        <div className=' grid grid-flow-row lg:grid-cols-2 xl:grid-cols-2'>
                            <div>
                                <Accordion items={[
                                    { title: 'What is your refund policy?', content: 'Our refund policy is...' },
                                    { title: 'How do I contact support?', content: 'You can contact support by...' }
                                ]} />
                            </div>
                            <div>
                                <Accordion items={[
                                    { title: 'What is your refund policy?', content: 'Our refund policy is...' },
                                    { title: 'How do I contact support?', content: 'You can contact support by...' }
                                ]} />
                            </div>
                        </div>
                    )}
                    {activeTab === 1 && (
                        <div className=' grid grid-flow-row lg:grid-cols-2 xl:grid-cols-2'>
                            <div>
                                <Accordion items={[
                                    { title: 'What is your refund policy?', content: 'Our refund policy is...' },
                                    { title: 'How do I contact support?', content: 'You can contact support by...' }
                                ]} />
                            </div>
                            <div>
                                <Accordion items={[
                                    { title: 'What is your refund policy?', content: 'Our refund policy is...' },
                                    { title: 'How do I contact support?', content: 'You can contact support by...' }
                                ]} />
                            </div>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div className=' grid grid-flow-row lg:grid-cols-2 xl:grid-cols-2'>
                            <div>
                                <Accordion items={[
                                    { title: 'What is your refund policy?', content: 'Our refund policy is...' },
                                    { title: 'How do I contact support?', content: 'You can contact support by...' }
                                ]} />
                            </div>
                            <div>
                                <Accordion items={[
                                    { title: 'What is your refund policy?', content: 'Our refund policy is...' },
                                    { title: 'How do I contact support?', content: 'You can contact support by...' }
                                ]} />
                            </div>
                        </div>
                    )}
                    {activeTab === 3 && (
                        <div className=' grid grid-flow-row lg:grid-cols-2 xl:grid-cols-2'>
                            <div>
                                <Accordion items={[
                                    { title: 'What is your refund policy?', content: 'Our refund policy is...' },
                                    { title: 'How do I contact support?', content: 'You can contact support by...' }
                                ]} />
                            </div>
                            <div>
                                <Accordion items={[
                                    { title: 'What is your refund policy?', content: 'Our refund policy is...' },
                                    { title: 'How do I contact support?', content: 'You can contact support by...' }
                                ]} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
