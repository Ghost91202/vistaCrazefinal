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
      question:
        "SEO Strategies: How do you ensure effective search engine optimization?",
      answer:
        "Our team of SEO experts employs proven strategies, including on-page optimization, keyword research, and technical audits. We focus on enhancing your website's visibility and driving organic traffic for optimal results.",
    },
    {
      question: "Link Building: What link-building strategies do you use?",
      answer:
        "We implement effective link-building strategies to boost your website's authority. Our approach involves acquiring high-quality backlinks from reputable sources, enhancing your site's credibility and improving search engine rankings.",
    },
    {
      question:
        "Keyword Research: How do you identify relevant keywords for my business?",
      answer:
        "Our comprehensive keyword research involves analyzing your industry, competitors, and target audience. We identify relevant keywords that align with your business goals, optimizing your content for improved search engine ranking.",
    },
    {
      question:
        "Technical SEO Audits: How do you ensure optimal website performance?",
      answer:
        "We conduct thorough technical SEO audits to identify and resolve any issues affecting your website's performance. This includes addressing issues related to site speed, mobile optimization, and crawlability for a seamless user experience.",
    },
    {
      question: "Content Optimization: How do you optimize website content?",
      answer:
        "Our content optimization strategy focuses on creating high-quality, SEO-friendly content. We ensure that your content is not only engaging for users but also aligned with relevant keywords to enhance search engine visibility.",
    },
  ];


  return (
    <div className="flex flex-col ">
      <Navbar />

      <Proven
  title1="Effective SEO Techniques"
  desc1="Discover a range of tried-and-true SEO techniques, meticulously crafted and supported by data-driven insights. These strategies are customized to enhance your online visibility and generate measurable outcomes for your business."
  title2="SEO Specialists"
  desc2="Harness the expertise and proficiency of our certified SEO professionals devoted to optimizing your website's performance. Stay abreast of industry shifts with a team dedicated to delivering cutting-edge solutions for your online presence."
  title3="Assured Search Results"
  desc3="Witness the impact of our steadfast commitment to results in the dynamic world of SEO. We integrate expertise, innovation, and tailored SEO strategies to ensure your success in the ever-evolving digital landscape."
/>



      <Faq1 faqData={faqData} mainhead="empty"/>
      <Drawer
  title="Understanding SEO Strategies"
  button="Explore Our SEO Services"
  desc1="Discover Pie-Bond's SEO Services, your intelligent navigator for unparalleled online visibility. Unlike static approaches, we transform online visitors into loyal customers. If we don't improve your search rankings, our service is on the house."
  Img1={seoimg.src} // Assuming you have an SEO-related image to replace seoimg
  title2="Our 5-stage process for effective SEO services:"
  submenu1="1. Research & Strategy"
  subdesc1="Analyze your market and devise a comprehensive SEO strategy to boost your website's search engine visibility."
  submenu2="2. Tracking & Analytics"
  subdesc2="Implement advanced tracking tools to measure performance metrics and gather valuable insights for continuous improvement."
  submenu3="3. Implementation"
  subdesc3="Execute strategic SEO elements, optimizing your website's structure, content, and technical aspects for search engine success."
  submenu4="4. Optimization & Testing"
  subdesc4="Experiment with various SEO techniques, keywords, and content optimizations to refine and enhance your website's search performance."
  submenu5="5. Scaling Success"
  subdesc5="Expand your online presence by implementing proven SEO strategies across multiple channels, ensuring sustainable growth."
  lastdesc="Attain the recognition and visibility your website deserves in the digital realm.

  Ready to elevate your brand's online visibility? Explore Pie-Bond's SEO Services now!"
/>

<Section2
  title="Maximize ROI with Proven SEO Strategies"
  desc1="Unlock the proven SEO strategies your competitors are leveraging to dominate the market and achieve exceptional ROI. Tired of unpredictable marketing channels? Our solutions have secured over 2,480 page 1 Google rankings, driven a 140% increase in organic traffic, and delivered 8,000+ high-quality leads. Seize market share and establish online dominance in just a few months!"
  desc2="Key Highlights:

  - Proven strategies for guaranteed SEO results
  - Over 2,480 page 1 Google rankings achieved
  - 140% growth in organic traffic
  - Delivery of 8,000+ high-quality leads
  - Ready to elevate your SEO game? Explore more about our proven strategies now!"
/>

<Section3
  maintitle="With our proven framework, we confidently assure success in SEO strategies"
  title="Research & Strategy"
  desc="Unearth effective SEO tactics from your competitors. Analyze your market, set objectives, and devise a customized SEO strategy with at least five key focus areas."
  title2="Tracking & Analytics"
  desc2="Implement proven tracking tools to gauge performance metrics. Analyze your business, set targets, and craft a tailored SEO strategy with at least five key focus areas."
  title3="Implementation"
  desc3="Leverage our team of SEO experts to execute strategic elements necessary for optimizing your website's structure, content, and technical aspects for search engine success."
  title4="Optimization & Testing"
  desc4="Conduct thorough testing to identify the most effective SEO techniques, gaining valuable insights into what drives success for your brand in search engine rankings."
  title5="Scaling Success"
  desc5="Expand your online visibility by implementing successful SEO strategies across various channels once desired search engine results are achieved."
/>

      {/* <Price/> */}

    <Faq
  q1="Which search engines offer effective marketing opportunities?"
  a1="The effectiveness depends on your business, industry, and target audience. We strategically focus on search engines where your potential customers are most active and likely to engage."
  q2="What search engines do you optimize for?"
  a2="Our team specializes in optimizing for major search engines like Google, Bing, and Yahoo, adapting to changes and emerging platforms to ensure optimal visibility and results."
  q3="How do your SEO services function?"
  a3="From initial website analysis to comprehensive SEO strategy implementation, we excel in optimizing website structure, content, and technical aspects. Our services encompass keyword research, on-page optimization, link building, and performance tracking to meet diverse SEO requirements."
  q4="Which industries have you worked with in SEO?"
  a4="We collaborate across diverse industries, ranging from global corporations to local businesses. Explore our case studies for insights into our expertise and successful SEO campaigns across various sectors."
  q5="When is the right time to invest in SEO?"
  a5="In the realm of SEO, transparency regarding achievable outcomes is crucial. Typically, the primary goal is to enhance online visibility and build credibility and trust. While generating leads or sales may take time, our approach is focused on cultivating a dedicated online presence that can become a lucrative channel over time, similar to our success with other clients."
/>
      <Footer />
    </div>
  );
}
