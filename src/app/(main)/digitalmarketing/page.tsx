import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import When from "@/components/when/page";
import Proven from "@/components/Sections/proven";
import Drawer from "@/components/drawer/drawer";
import Faq1 from "@/components/homeFaq/faq2";
import seoimg from "@/assets/unds.jpg";
import Faq from "../../../components/faq/faq";

import Section2 from "@/components/services/sections/section2";
import Section3 from "@/components/services/sections/section3";
export default function Home() {
  const faqData = [
    {
      question:
        "eDigital Marketing Strategy: How do you ensure effective eDigital marketing campaigns?",
      answer:
        "Our eDigital marketing experts craft strategies that align with your business goals, leveraging the latest trends and technologies. We focus on creating engaging content and optimizing campaigns to maximize audience reach and conversions.",
    },
    {
      question: "Audience Segmentation: How do you target specific audiences in eDigital marketing?",
      answer:
        "In eDigital marketing, we implement advanced audience segmentation strategies, considering factors such as demographics, behavior, and online preferences. This precision ensures that your ads are delivered to the most relevant audience, enhancing the effectiveness of your campaigns.",
    },
    {
      question:
        "Ad Visibility in eDigital Marketing: How do you ensure that eDigital ads gain visibility and engagement?",
      answer:
        "We prioritize eDigital ad visibility through strategic placements, eye-catching visuals, and adherence to platform guidelines. Our dedicated team monitors performance metrics to optimize ad delivery, ensuring your ads achieve maximum visibility and engagement.",
    },
    {
      question:
        "Analytics and Reporting for eDigital Marketing: What insights do you provide for eDigital ad performance?",
      answer:
        "Our eDigital marketing analytics cover a spectrum of metrics, including click-through rates, conversion rates, and customer journey analysis. We provide comprehensive reports with actionable insights, empowering you to refine and elevate your future eDigital advertising strategies.",
    },
    {
      question: "Automation in eDigital Marketing: How can automation enhance my eDigital marketing campaigns?",
      answer:
        "Automation is integral to our eDigital marketing approach, streamlining campaigns based on user behavior, preferences, and real-time data. This not only saves time but also increases relevance and efficiency, resulting in superior performance across the eDigital landscape.",
    },
  ];


  return (
    <div className="flex flex-col ">
      <Navbar />

      <Proven
  title1="Proven Digital Marketing Strategies"
  desc1="Explore a collection of proven digital marketing tactics meticulously designed and backed by data. Our strategies are tailored to fortify your online presence and drive tangible results for your business."
  title2="Certified Digital Marketing Experts"
  desc2="Tap into the knowledge and skills of our certified professionals who are dedicated to optimizing your digital marketing endeavors. Stay ahead of industry trends with a team committed to delivering top-notch solutions for your business."
  title3="Guaranteed Digital Marketing Results"
  desc3="Experience the impact of our unwavering commitment to results. We blend expertise, innovation, and personalized digital marketing strategies to ensure your success in the dynamic digital landscape."
/>


      <Faq1 faqData={faqData} mainhead="Why Professional Digital Marketing Services?" />
      <Drawer
  title="Understanding Digital Marketing"
  button="Explore Our Digital Marketing Services"
  desc1="Discover Pie-Bond's Digital Marketing, your intelligent online strategy for dynamic brand engagement. Unlike static approaches, we convert passersby into customers. If we don't enhance your profitability, our service is free."
  Img1={seoimg.src}
  title2="Our 5-stage process for effective Digital Marketing services:"
  submenu1="1. Research & Plan"
  subdesc1="Scout optimal strategies by analyzing competitors and crafting distinctive plans for your online presence."
  submenu2="2. Track & Measure"
  subdesc2="Utilize tracking tools to assess engagement rates and gather valuable data."
  submenu3="3. Execute"
  subdesc3="Construct and implement attention-grabbing strategies, content, and elements for your online presence."
  submenu4="4. Optimize"
  subdesc4="Experiment with various messages, platforms, and CTAs to refine and enhance engagement."
  submenu5="5. Scale"
  subdesc5="Grow your online presence by doing more of what works, similar to expanding your strategies on multiple channels."
  lastdesc="Gain the reputation and visibility your website deserves in the digital world. Ready to amplify your brand's online presence? Explore Pie-Bond's Digital Marketing now!"
/>

<Section2
  title="Generate Better ROI with Proven Digital Marketing Strategies"
  desc1="Discover the proven strategies your competitors are using to dominate the market and achieve outstanding ROI. Are you tired of uncertain marketing channels? Our solutions have generated over 2,480 page 1 Google rankings, increased organic traffic by 140%, and delivered 8,000+ high-quality leads. Steal market share and dominate online space in just months!"
  desc2="Key Highlights:"


/>

<Section3
  maintitle="With our tried-and-tested framework, we confidently assure success in digital marketing"
  title="Research & Plan"
  desc="Uncover proven engagement tactics from your competitors. Analyze your business, set targets, and craft a tailored digital marketing strategy with at least five themes."
  title2="Track & Measure"
  desc2="Uncover proven engagement tactics from your competitors. Analyze your business, set targets, and craft a tailored digital marketing strategy with at least five themes."
  title3="Execute"
  desc3="Leverage our team of digital marketing experts to develop assets needed to execute your strategy and expand your following."
  title4="Optimise"
  desc4="Conduct extensive testing to determine what resonates best, gaining invaluable insights into what drives success for your brand."
  title5="Scale"
  desc5="Enhance your online presence by scaling up successful strategies once desired results are achieved."
/>

      {/* <Price/> */}
       <Faq
  q1="What digital marketing channels offer effective marketing opportunities?"
  a1="The efficacy depends on your business, sector, and audience. We adeptly utilize channels where your target demographic engages."
  q2="Which digital marketing channels do you work with?"
  a2="Our team excels in various digital marketing channels, including but not limited to search engine optimization (SEO), social media marketing (SMM), email marketing, and content marketing. We adapt to evolving platforms, ensuring exceptional outcomes."
  q3="How do your digital marketing services work?"
  a3="From strategy consultation to comprehensive campaign management, we specialize in crafting strategies, content creation, audience engagement, and insightful reporting, adapting to diverse requirements."
  q4="Which industries have you worked with in digital marketing?"
  a4="We collaborate across diverse sectors, from e-commerce and technology to healthcare and finance. Explore our case studies for insights into our expertise across different industries."
  q5="When should I use digital marketing?"
  a5="Digital marketing is essential for establishing a strong online presence, increasing brand visibility, and reaching your target audience. It's particularly effective for generating leads, driving sales, and building credibility. We can guide you in cultivating a successful digital strategy tailored to your business goals and target audience."
/>

      <Footer />
    </div>
  );
}
