// components/StaticTabs.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Accordion from "../Accordion/Accordion";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "All" },
    { label: "Website" },
    { label: "Branding" },
    { label: "Digital Marketing" },
  ];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1)),
    onSwipedRight: () => setActiveTab((prev) => Math.max(prev - 1, 0)),
  });

  // FAQ Data for Each Tab
  const faqData = {
    all: [
      {
        title: "What services does Kravion offer?",
        content:
          "Kravion offers a wide range of digital marketing services, including SEO, PPC, social media marketing, website design, branding, and content marketing. We help businesses grow their online presence and achieve their goals.",
      },
      {
        title: "How long does it take to see results from SEO?",
        content:
          "SEO is a long-term strategy, and results typically take 3-6 months to become noticeable. However, this timeline can vary depending on factors like competition, industry, and the current state of your website.",
      },
      {
        title: "What is the cost of digital marketing services?",
        content:
          "The cost of digital marketing services varies depending on the scope of the project, the services required, and the size of your business. We offer customized packages to fit your budget and goals.",
      },
      {
        title: "Do you offer social media management?",
        content:
          "Yes, we provide comprehensive social media management services, including content creation, posting, engagement, and performance tracking across platforms like Facebook, Instagram, LinkedIn, and Twitter.",
      },
    ],
    website: [
      {
        title: "How long does it take to build a website?",
        content:
          "The timeline for building a website depends on its complexity. A basic website can take 2-4 weeks, while a more complex site with custom features may take 8-12 weeks or longer.",
      },
      {
        title: "Do you offer website maintenance?",
        content:
          "Yes, we provide website maintenance services to ensure your site remains up-to-date, secure, and optimized for performance. This includes updates, backups, and security checks.",
      },
      {
        title: "Can you redesign an existing website?",
        content:
          "Absolutely! We specialize in website redesigns to improve functionality, user experience, and aesthetics while maintaining your brand identity.",
      },
    ],
    branding: [
      {
        title: "What is branding, and why is it important?",
        content:
          "Branding is the process of creating a unique identity for your business through logos, colors, messaging, and tone. It helps differentiate your business from competitors and builds trust with your audience.",
      },
      {
        title: "How do you develop a brand strategy?",
        content:
          "We develop a brand strategy by understanding your business goals, target audience, and market positioning. This includes creating a brand identity, messaging, and guidelines for consistent communication.",
      },
      {
        title: "Can you help with rebranding?",
        content:
          "Yes, we assist businesses with rebranding to refresh their image, align with new goals, or appeal to a different audience. This includes updating logos, messaging, and marketing materials.",
      },
    ],
    digitalMarketing: [
      {
        title: "What is SEO, and how does it work?",
        content:
          "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results. This involves keyword research, on-page optimization, technical SEO, and link building.",
      },
      {
        title: "What is the difference between SEO and PPC?",
        content:
          "SEO focuses on organic search rankings, while PPC (Pay-Per-Click) involves paid advertising. SEO takes longer to show results but offers long-term benefits, whereas PPC provides immediate traffic.",
      },
      {
        title: "How do you measure the success of a digital marketing campaign?",
        content:
          "We measure success using key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), return on ad spend (ROAS), and overall ROI.",
      },
      {
        title: "What platforms do you use for social media marketing?",
        content:
          "We use platforms like Facebook, Instagram, LinkedIn, Twitter, and YouTube for social media marketing, depending on your target audience and business goals.",
      },
    ],
  };

  return (
    <div
      className="flex relative rounded-b-3xl z-10 mb-[100vh] gap-10 xl:p-20 lg:p-10 p-5 lg:pl-10 xxl sm:flex-row flex-col justify-around bg-white text-black"
      {...swipeHandlers}
    >
      <div className="justify-center xl:pl-0 xl:w-1/3 lg:w-1/3 flex flex-col gap-10">
        <span className="bg-slate-100 w-fit text-sm px-3 py-1">FAQ&apos;S</span>
        <h1 className="xl:text-3xl lg:text-2xl font-semibold">
          Answers to Frequently Asked Questions About Digital Marketing
        </h1>
        <p>
          Curious about how Kravion, a leading digital marketing agency, can help your business grow? Explore our FAQ section to learn more about our services, processes, and expertise in SEO, PPC, branding, and website design.
        </p>
        <Link href="/" className="border-b w-fit pb-2 hover:text-blue-500">
          Let&apos;s Discuss
        </Link>
      </div>
      <div className="ring-offset-transparent">
        <div className="flex border-b xl:text-base text-xs border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-2 lg:px-3 px-2 xl:px-4 ${
                activeTab === index ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-4 ring-offset-transparent">
          {activeTab === 0 && (
            <div className="grid grid-flow-row lg:grid-cols-2 xl:grid-cols-2 gap-4">
              <Accordion items={faqData.all.slice(0, 2)} />
              <Accordion items={faqData.all.slice(2, 4)} />
            </div>
          )}
          {activeTab === 1 && (
            <div className="grid grid-flow-row lg:grid-cols-2 xl:grid-cols-2 gap-4">
              <Accordion items={faqData.website} />
            </div>
          )}
          {activeTab === 2 && (
            <div className="grid grid-flow-row lg:grid-cols-2 xl:grid-cols-2 gap-4">
              <Accordion items={faqData.branding} />
            </div>
          )}
          {activeTab === 3 && (
            <div className="grid grid-flow-row lg:grid-cols-2 xl:grid-cols-2 gap-4">
              <Accordion items={faqData.digitalMarketing} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
