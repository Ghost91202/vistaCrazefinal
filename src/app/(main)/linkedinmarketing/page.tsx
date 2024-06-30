import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import When from "@/components/when/page";
import Faq from "../../../components/faq/faq";
import Proven from "@/components/Sections/proven";
import Drawer from "@/components/drawer/drawer";
import Faq1 from "@/components/homeFaq/faq2";
import seoimg from "@/assets/unds.jpg";
import Section2 from "@/components/services/sections/section2";
import Section3 from "@/components/services/sections/section3";
export default function Home() {
  const faqData = [
    { question: 'Targeted Ad Campaigns', answer: 'We craft targeted LinkedIn Ads tailored to specific industries, job titles, and professional interests, guaranteeing that your message resonates with the right audience.' },
    { question: 'Content Creation', answer: 'Our team crafts compelling ad content that speaks to professionals, driving engagement and conversions.' },
    { question: 'Campaign Management and Optimisation', answer: 'We manage and continuously optimise your LinkedIn Ads campaigns, ensuring they align with your marketing goals and deliver the desired results.' }
  ];
  return (
    <div className="flex flex-col ">
      <Navbar />

       <Proven
    title1="Proven Techniques"
    desc1="Discover a range of proven landing page optimization tactics, meticulously designed and backed by data. These techniques are tailored to strengthen your online presence and drive tangible results for your business."
    title2="Optimization Specialists"
    desc2="Harness the knowledge and skills of our certified professionals who are dedicated to optimizing your landing page performance. Stay ahead of industry trends with a team committed to delivering top-notch solutions for your business."
    title3="Measurable Improvements"
    desc3="Witness the impact of our unwavering commitment to results. We blend expertise, innovation, and personalized landing page optimization strategies to ensure measurable improvements in the dynamic digital landscape."
/>

      <Faq1 faqData={faqData} mainhead=" empty"/>
      <Drawer title="Understanding LinkedIn Marketing"
        button="Understand Our Seo Service"
        desc1="Think of our LinkedIn Marketing services as orchestrating a refined networking event, but in the digital realm. Envision hosting a business mixer where every participant is a potential customer, partner, or influencer within your industry. This illustrates the potent impact of LinkedIn when wielded adeptly."
        Img1={seoimg.src}
        title2="Our 5-stage process for effective LinkedIn marketing campaigns:"
        submenu1="1. Research & Plan"
        subdesc1="Similar to curating a guest list for a networking event, our process begins with comprehending your business, target audience, and competitors. This foundational understanding enables us to devise a customized strategy aimed at connecting with individuals who contribute value to your business."
        submenu2="2. Track & Measure"
        subdesc2="Just as you would customize your approach and conversation for each prospect at a networking event, our dedicated dashboard monitors key metrics to gauge the impact of your LinkedIn endeavors. Furthermore, we establish attainable goals upfront before initiating any actions or 'conversations,' providing a tangible benchmark against which to measure results."
        submenu3="3. Execute"
        subdesc3="This marks the moment when your networking event &apos;goes live.&apos; Our team of specialists meticulously crafts the essential materials to engage with your target audience, encompassing everything from direct messages to high-caliber posts, guaranteeing a seamless 'event' experience.




        "
        submenu4="4. Optimise"
        subdesc4="Consider this akin to refining your approach based on real-time feedback during the event. Our team will consistently fine-tune your strategy, utilizing real performance metrics to adjust outreach techniques, focus areas, and other elements essential for achieving success."
        submenu5="5. Scale"
        subdesc5="Once we've achieved the level of engagement and conversion that meets your satisfaction, akin to a successful networking event, it's time to broaden our horizons. We can elevate your outreach efforts to connect with an even larger pool of potential clients, thereby scaling up your results significantly."
        lastdesc="Our LinkedIn Marketing services serve as your gateway to hosting the ideal 'online networking event,' continually attracting high-value connections that are pivotal for fostering business growth.




        "
      />
      <Section2 title="Why You Need a Linkedin Ads Agency"
        desc1="Understand the full potential of professional LinkedIn marketing services"
        desc2="Envision a LinkedIn marketing campaign that reliably converts cold prospects into leads for your business each month, all while staying within your existing marketing budget. Are you weary of allocating your LinkedIn marketing budget to unproductive agencies and campaigns? It&apos;s time to implement our tried-and-tested, revenue-centric strategies. Our LinkedIn sales and marketing approaches have empowered businesses across various industries to surpass their competitors and establish dominance on LinkedIn, consistently funneling leads into their pipeline."
      />
      <Section3
      maintitle = "Our proven framework enables us to guarantee success with LinkedIn advertising."
      title='Research & Plan'
      desc= "Our process commences with a thorough analysis of your competitors and a deep understanding of your business. From there, we craft a bespoke LinkedIn prospecting strategy meticulously tailored to achieve the targets necessary for a substantial return on investment."
      title2 = "Track & Measure"
      desc2 = "We implement tracking mechanisms to ensure comprehensive measurement at every stage of the process, allowing us to gauge engagement rates across all activities."
      title3 = "Execute"
      desc3 = "Our team of specialists meticulously crafts the essential materials to engage with your target audience, encompassing everything from direct messages to high-caliber posts, guaranteeing a seamless 'event' experience."
      title4 = "Optimise"
      desc4 = "Consider this akin to refining your approach based on real-time feedback during the event. Our team will consistently fine-tune your strategy, utilizing real performance metrics to adjust outreach techniques, focus areas, and other elements essential for achieving success."
      title5 = "Scale"
      desc5 = "Once we've achieved the level of engagement and conversion that meets your satisfaction, akin to a successful networking event, it's time to broaden our horizons. We can elevate your outreach efforts to connect with an even larger pool of potential clients, thereby scaling up your results significantly."
       />
      {/* <Price/> */}

    <Footer/>
    </div>
  );
}
