import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import When from "@/components/when/page";

import Proven from "@/components/Sections/proven";
import Drawer from "@/components/drawer/drawer";
import Faq1 from "@/components/homeFaq/faq2";
import seoimg from "@/assets/unds.jpg";
import Section2 from "@/components/services/sections/section2";
import Section3 from "@/components/services/sections/section3";
import Faq from "@/components/faq/faq";
export default function Home() {
  const faqData = [
    {
      question: "Audience Targeting and Segmentation",
      answer:
        "Harnessing Facebook's robust targeting capabilities, we pinpoint your ideal audience with precision. Our team meticulously segments audiences based on demographics, interests, behaviors, and more, guaranteeing that your ads reach individuals most inclined to engage with your brand.",
    },
    {
      question: "Creative Ad Development",
      answer:
        "Our creative team excels in crafting ads that go beyond mere visual appeal, resonating emotionally with your audience. We weave narratives that forge connections, resulting in heightened engagement and conversion rates.",
    },
    {
      question: "Performance Monitoring and Analytics",
      answer:
        "Data serves as the cornerstone of our approach. We continually monitor ad performance, delving deep into analytics to comprehend audience responses and campaign effectiveness. This data-driven methodology empowers us to refine and optimize your campaigns, driving even better results.",
    },
    {
      question: "ROI-Focused Campaigns",
      answer:
        "Our primary objective is to maximize your Return on Investment (ROI). We strategically allocate and manage your ad spend, prioritizing campaigns that offer the highest returns. Whether the goal is to boost brand awareness, generate leads, or drive sales, our campaigns are meticulously crafted to deliver tangible and impactful results.",
    },

    {
      question: "Ongoing Optimisation and Adaptation",
      answer:
        "In the dynamic realm of digital marketing, our strategies evolve alongside the ever-changing landscape. We stay ahead of trends and platform updates to ensure that your Facebook Ads remain relevant and impactful. Our team's proactive approach guarantees that your advertising efforts consistently align with the best practices and latest innovations, driving ongoing success in your campaigns.",
    },
  ];
  return (
    <div className="flex flex-col ">
      <Navbar />

      <Proven
        title1="Effective Facebook Ad Strategies"
        desc1="Unlock the power of effective Facebook advertising strategies tailored to your business goals. Our data-driven approach ensures your ads reach the right audience, driving engagement and conversions."
        title2="Expert Facebook Ad Management"
        desc2="Benefit from the expertise of our certified Facebook ad specialists dedicated to optimizing your campaigns. Stay ahead of Facebook advertising trends with a team committed to delivering exceptional results."
        title3="Guaranteed Facebook Ad Performance"
        desc3="Experience the results-driven approach of our Facebook advertising services. We combine innovative techniques and personalized strategies to guarantee success in the competitive landscape of Facebook advertising."
      />

      <Faq1 faqData={faqData} mainhead="Why Professional Facebook Advertising Services?" />
      <Drawer
       title = "Unlock the Power of Facebook Ads"
       button = "Explore Our Facebook Advertising Solutions"
       desc1 = "Discover Pie-Bond's Facebook Advertising, your strategic channel for dynamic brand visibility and engagement. Unlike traditional ads, we convert viewers into engaged customers. If we don't enhance your brand's presence, our service is free."
       Img1 = {seoimg.src}
       title2 = "Our 5-stage process for effective Facebook Advertising services:"
       submenu1 = "1. Research & Plan"
       subdesc1 = "Identify optimal target audiences by analyzing competitors and crafting compelling ad content for your Facebook presence."
       submenu2 = "2. Track & Measure"
       subdesc2 = "Utilize tracking tools to assess impressions, click-through rates, and gather valuable data for informed decision-making."
       submenu3 = "3. Execute"
       subdesc3 = "Create and launch attention-grabbing Facebook ads, incorporating visually appealing elements for maximum engagement."
       submenu4 = "4. Optimize"
       subdesc4 = "Experiment with different ad elements, messaging approaches, and CTAs to refine and enhance audience interaction."
       submenu5 = "5. Scale"
       subdesc5 = "Expand your reach by amplifying successful strategies, such as targeting different audience segments and running ads across multiple placements."
       lastdesc = "Achieve the recognition and visibility your brand deserves in the digital world."
         />
      <Section2
       title = "Boost Your ROI with Proven Facebook Advertising Strategies"
       desc1 = "Unlock the proven strategies your competitors use to dominate the digital landscape and achieve exceptional ROI. Tired of uncertain marketing channels? Our solutions have propelled brands with over 2,480 successful Facebook ad campaigns, a 140% surge in ad engagement, and the delivery of 8,000+ high-quality leads. Seize market share and establish online dominance in just months!"
       desc2 = "Key Highlights:- Proven strategies for guaranteed Facebook ad results- Over 2,480 successful Facebook ad campaigns- 140% growth in ad engagement        - 8,000+ high-quality leads delivered- Ready to elevate your Facebook advertising game? Explore more about our proven strategies now!"

      />
      <Section3
      maintitle = "With our tried-and-tested framework, we confidently assure success in Facebook advertising"
      title = "Research & Plan"
      desc = "Uncover proven engagement tactics from successful Facebook ad campaigns. Analyze your business, set targets, and craft a tailored Facebook advertising strategy with at least five compelling ad themes."
      title2 = "Track & Measure"
      desc2 = "Utilize advanced tracking tools to measure impressions, click-through rates, and other key metrics. Analyze your Facebook advertising performance, set targets, and refine your strategy based on valuable data."
      title3 = "Execute"
      desc3 = "Leverage our team of Facebook advertising experts to develop captivating ad creatives needed to execute your strategy and expand your audience on the platform."
      title4 = "Optimize"
      desc4 = "Conduct extensive A/B testing to determine the most effective ad elements, gaining invaluable insights into what drives success for your brand on Facebook."
      title5 = "Scale"
      desc5 = "Enhance your Facebook presence by scaling up successful strategies once desired results are achieved. Expand your reach and achieve sustainable growth on the Facebook platform."


      />
      {/* <Price/> */}
       <Faq
      q1 = "Which platforms offer effective advertising opportunities?"
      a1 = "The effectiveness depends on your business, sector, and audience. We adeptly identify platforms where your target demographic actively engages, ensuring optimal results for your Facebook advertising campaigns."

      q2 = "Which channels do you work with?"
      a2 = "Our team excels in Facebook advertising, with expertise in crafting compelling ad content for optimal engagement. We stay adaptable to evolving platforms, ensuring exceptional outcomes in the dynamic landscape of video advertising."

      q3 = "How do your Facebook advertising services work?"
      a3 = "From strategic planning to comprehensive ad campaign management, we specialize in crafting Facebook advertising strategies, ad content creation, audience targeting, and insightful reporting, adapting to diverse requirements to maximize the impact of your campaigns."

      q4 = "Which industries have you worked with in Facebook advertising?"
      a4 = "We collaborate across diverse sectors, from global brands to local businesses, delivering successful Facebook advertising campaigns. Explore our case studies for insights into our expertise in driving results for various industries."

      q5 = "When should I use Facebook advertising?"
      a5 = "In the realm of Facebook advertising, transparency regarding achievable outcomes is paramount. Typically, the primary objective revolves around enhancing brand visibility and cultivating credibility. Without leveraging Facebook advertising or building a substantial audience, generating leads or conversions may pose challenges. However, we can assist you in cultivating a dedicated following and transforming it into a lucrative channel once you've established a loyal fan base, mirroring our success with other clients."

      />
      <Footer />
    </div>
  );
}
