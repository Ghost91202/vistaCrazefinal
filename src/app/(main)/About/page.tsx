
"use client"
import Image from 'next/image';
import React from 'react';
import Aboutimg from '../../../../public/pngtree-abstract-technology-background-technical-electric-image_443494.jpg';
import Accordion from '@/components/Accordion/Accordion';
import Head from 'next/head';

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      {/* SEO and Metadata */}
      <Head>
        <title>About Kravion Digital Marketing Agency</title>
        <meta
          name="description"
          content="Learn about Kravion Digital Marketing Agency, a leading digital marketing firm in Kanpur, Noida, Delhi, Bangalore, and Chandigarh. Founded by Karan Sharma and Avantika Nigam."
        />
        <meta
          name="keywords"
          content="digital marketing agency, Kanpur, Noida, Delhi, Bangalore, Chandigarh, Kravion, SEO, PPC, social media marketing"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://www.kravion.com",
            "@type": "WebSite",
            "name": "Digital Marketing Agency in Bangalore",
            "url": "https://www.kravion.com",
          })}
        </script>
      </Head>

      {/* Main Content */}
      <div className="relative z-10 mb-[100vh] gap-16 text-center bg-white flex-col flex items-center  text-black backdrop-blur-3xl">
        {/* About Section */}
        <Image src={Aboutimg} alt="About the kravion " className=' w-screen h-screen absolute'/>
        <div className=" gap-10 absolute text-white top-32  align-center  items-center text-center justify-center flex flex-col">
            <h1 className="flex items-center gap-2 text-2xl font-bold sm:text-4xl">

              About Our Company
            </h1>
            <p className="text-lg lg:text-xl w-3/4  ">
              Kravion Digital Marketing Agency is a premier digital marketing firm headquartered in India, specializing in data-driven strategies to elevate brands across key cities, including Kanpur, Noida, Delhi, Bangalore, and Chandigarh. Established on January 10, 2024, by Founder & CEO Karan Sharma and Co-Founder Avantika Nigam, Kravion has rapidly emerged as a trusted partner for businesses seeking tailored digital solutions. The agency combines creativity, technology, and analytics to deliver measurable growth for clients in competitive markets.
            </p>

           <div className="grid grid-flow-row grid-cols-3 gap-10  z-40">
            <Accordion
              items={[
                {
                  title: 'Our History',
                  content:
                    'Founded in 2024 by Software Engineer Karan Sharma, Kravion Marketing Agency began as a small consultancy serving local businesses in the bustling city of Kanpur. With a team of just three passionate individuals, the agency quickly gained traction, thanks to its innovative approach and dedication to client success.',
                },

              ]}
            /> <Accordion
              items={[

                {
                  title: 'Our Mission',
                  content:
                    'At Kravion Marketing Agency, our mission is to empower businesses to thrive in the digital age through innovative strategies, personalized solutions, and unwavering commitment to excellence. We strive to be trusted partners, delivering tangible results and exceptional experiences that drive growth, inspire confidence, and exceed expectations. With integrity, creativity, and a relentless pursuit of success, we are dedicated to shaping a brighter future for our clients and our community.',
                },

              ]}
            /> <Accordion
              items={[


                {
                  title: 'Our Vision',
                  content:
                    'At Kravion Marketing Agency, our vision is to be the leading force in shaping the future of digital marketing, revolutionizing the way businesses connect with their audiences and achieve success online. We aspire to be recognized globally for our innovative strategies, exceptional service, and unwavering commitment to client satisfaction. Through continuous growth, collaboration, and dedication to excellence, we aim to empower businesses of all sizes to thrive in the ever-evolving digital landscape.',
                },
              ]}
            />
          </div>

          </div>

          {/* Company Introduction */}


          {/* Accordion Section */}



        {/* Founders Section */}
        <div className="flex flex-col gap-10 pt-0  p-20  pb-20">

          <div className='relative h-screen'>

</div>
          {/* Karan Sharma Section */}
           <h1 className=" text-2xl sm:text-3xl">

            Meet The Founders
          </h1>
          <h2 className="text-xl sm:text-xl">
            At the heart of Kravion Digital Marketing Agency are two passionate visionaries who have redefined the digital marketing landscape with their expertise, innovation, and commitment to client success. Together, they have built Kravion into a trusted name for businesses in Kanpur, Noida, Delhi, Bangalore, and Chandigarh.
          </h2>
          <h1 className="text-2xl sm:text-3xl">Karan Sharma – Founder & CEO</h1>
          <p className="text-base sm:text-xl">
            Karan Sharma is a seasoned digital marketing expert with over 8 years of experience in crafting data-driven strategies that deliver measurable results. As the driving force behind Kravion, Karan brings a unique blend of creativity and technical expertise to the table. His vision is to empower businesses of all sizes to thrive in the digital age by leveraging cutting-edge tools and tailored solutions.
            <br /><br />
            Karan&apos;s journey began with a deep fascination for technology and its potential to transform businesses. Over the years, he has honed his skills in SEO, PPC, and social media marketing, helping brands achieve unprecedented growth. His leadership at Kravion is marked by a relentless focus on innovation, transparency, and client satisfaction.
          </p>

          {/* Avantika Nigam Section */}
          <h1 className="text-2xl sm:text-3xl">Avantika Nigam – Co-Founder</h1>
          <p className="text-base sm:text-xl">
            Avantika Nigam is the strategic mind behind Kravion&apos;s seamless operations and client-centric approach. With a strong background in business development and marketing, Avantika ensures that every campaign aligns with the client&apos;s goals and delivers maximum ROI.
            <br /><br />
            Avantika&apos;s expertise lies in building strong client relationships and understanding the unique challenges businesses face in competitive markets like Delhi, Bangalore, and Chandigarh. Her ability to translate complex ideas into actionable strategies has been instrumental in Kravion&apos;s success.
          </p>

          {/* Shared Vision Section */}
          <h1 className="text-2xl sm:text-3xl">A Shared Vision</h1>
          <p className="text-base sm:text-xl">
            Karan and Avantika founded Kravion with a shared mission: to create a digital marketing agency that combines creativity, technology, and analytics to drive real-world results. Their collaborative approach has enabled Kravion to stand out as a leader in the industry, offering tailored solutions for businesses in Kanpur, Noida, Delhi, Bangalore, and Chandigarh.
            <br /><br />
            Together, they have built a team of skilled professionals who share their passion for innovation and excellence. Under their leadership, Kravion continues to set new benchmarks in digital marketing, helping clients achieve their goals and grow their brands.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
