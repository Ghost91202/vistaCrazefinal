"use client";
import Image from "next/image";
import React from "react";
import Aboutimg from "../../../../public/pngtree-abstract-technology-background-technical-electric-image_443494.jpg";
import Accordion from "@/components/Accordion/Accordion";
import Head from "next/head";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      {/* SEO and Metadata */}
      <Head>
        <title>About Kravion - Top Digital Marketing Agency in Kanpur, Noida, Delhi, Bangalore & Chandigarh</title>
        <meta
          name="description"
          content="Kravion is a leading digital marketing agency in Kanpur, Noida, Delhi, Bangalore, and Chandigarh. Founded by Karan Sharma and Avantika Nigam, we specialize in SEO, PPC, social media marketing, and more to help businesses grow online."
        />
        <meta
          name="keywords"
          content="digital marketing agency, Kanpur, Noida, Delhi, Bangalore, Chandigarh, Kravion, SEO services, PPC advertising, social media marketing, online marketing agency"
        />
        <link rel="canonical" href="https://www.kravion.com/about" />
        <meta property="og:title" content="About Kravion - Top Digital Marketing Agency in Kanpur, Noida, Delhi, Bangalore & Chandigarh" />
        <meta
          property="og:description"
          content="Kravion is a leading digital marketing agency in Kanpur, Noida, Delhi, Bangalore, and Chandigarh. Founded by Karan Sharma and Avantika Nigam, we specialize in SEO, PPC, social media marketing, and more to help businesses grow online."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kravion.com/about" />
        <meta property="og:image" content="https://www.kravion.com/images/og-about.jpg" />
        <meta property="og:site_name" content="Kravion Digital Marketing Agency" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Kravion - Top Digital Marketing Agency in Kanpur, Noida, Delhi, Bangalore & Chandigarh" />
        <meta
          name="twitter:description"
          content="Kravion is a leading digital marketing agency in Kanpur, Noida, Delhi, Bangalore, and Chandigarh. Founded by Karan Sharma and Avantika Nigam, we specialize in SEO, PPC, social media marketing, and more to help businesses grow online."
        />
        <meta name="twitter:image" content="https://www.kravion.com/images/twitter-about.jpg" />
        <meta name="twitter:site" content="@KravionAgency" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Kravion Digital Marketing Agency",
            "url": "https://www.kravion.com",
            "description": "Kravion is a leading digital marketing agency in Kanpur, Noida, Delhi, Bangalore, and Chandigarh. We specialize in SEO, PPC, social media marketing, and more to help businesses grow online.",
            "founder": [
              {
                "@type": "Person",
                "name": "Karan Sharma"
              },
              {
                "@type": "Person",
                "name": "Avantika Nigam"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kanpur",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "208001",
              "addressCountry": "India"
            },
            "sameAs": [
              "https://www.facebook.com/KravionAgency",
              "https://www.twitter.com/KravionAgency",
              "https://www.linkedin.com/company/KravionAgency",
              "https://www.instagram.com/kravionagency/"
            ]
          })}
        </script>
      </Head>

      {/* Main Content */}
      <div className="relative min-h-screen bg-white text-black">
        {/* Hero Section */}
        <div className="relative h-screen">
          <Image
            src={Aboutimg}
            alt="About Kravion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Our Company
            </h1>
            <p className="text-lg lg:text-xl text-white max-w-4xl">
              Kravion Digital Marketing Agency is a premier digital marketing firm headquartered in India, specializing in data-driven strategies to elevate brands across key cities, including Kanpur, Noida, Delhi, Bangalore, and Chandigarh. Established on January 10, 2024, by Founder & CEO Karan Sharma and Co-Founder Avantika Nigam, Kravion has rapidly emerged as a trusted partner for businesses seeking tailored digital solutions.
            </p>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Accordion
              items={[
                {
                  title: "Our History",
                  content:
                    "Founded in 2024 by Software Engineer Karan Sharma, Kravion Marketing Agency began as a small consultancy serving local businesses in the bustling city of Kanpur. With a team of just three passionate individuals, the agency quickly gained traction, thanks to its innovative approach and dedication to client success.",
                },
              ]}
            />
            <Accordion
              items={[
                {
                  title: "Our Mission",
                  content:
                    "At Kravion Marketing Agency, our mission is to empower businesses to thrive in the digital age through innovative strategies, personalized solutions, and unwavering commitment to excellence. We strive to be trusted partners, delivering tangible results and exceptional experiences that drive growth, inspire confidence, and exceed expectations.",
                },
              ]}
            />
            <Accordion
              items={[
                {
                  title: "Our Vision",
                  content:
                    "At Kravion Marketing Agency, our vision is to be the leading force in shaping the future of digital marketing, revolutionizing the way businesses connect with their audiences and achieve success online. We aspire to be recognized globally for our innovative strategies, exceptional service, and unwavering commitment to client satisfaction.",
                },
              ]}
            />
          </div>
        </div>

        {/* Founders Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
              Meet The Founders
            </h1>
            <p className="text-lg text-center max-w-2xl mx-auto mb-12">
              At the heart of Kravion Digital Marketing Agency are two passionate visionaries who have redefined the digital marketing landscape with their expertise, innovation, and commitment to client success.
            </p>

            {/* Karan Sharma Section */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Karan Sharma – Founder & CEO</h2>
              <p className="text-lg">
                Karan Sharma is a seasoned digital marketing expert with over 8 years of experience in crafting data-driven strategies that deliver measurable results. As the driving force behind Kravion, Karan brings a unique blend of creativity and technical expertise to the table. His vision is to empower businesses of all sizes to thrive in the digital age by leveraging cutting-edge tools and tailored solutions.
              </p>
            </div>

            {/* Avantika Nigam Section */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Avantika Nigam – Co-Founder</h2>
              <p className="text-lg">
                Avantika Nigam is the strategic mind behind Kravion&apos;s seamless operations and client-centric approach. With a strong background in business development and marketing, Avantika ensures that every campaign aligns with the client&apos;s goals and delivers maximum ROI.
              </p>
            </div>

            {/* Shared Vision Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">A Shared Vision</h2>
              <p className="text-lg">
                Karan and Avantika founded Kravion with a shared mission: to create a digital marketing agency that combines creativity, technology, and analytics to drive real-world results. Their collaborative approach has enabled Kravion to stand out as a leader in the industry, offering tailored solutions for businesses in Kanpur, Noida, Delhi, Bangalore, and Chandigarh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
