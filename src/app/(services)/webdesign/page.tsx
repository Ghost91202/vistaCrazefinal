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
      question: "Website Redesign: How can a website redesign benefit my business?",
      answer:
        "Our web design experts approach website redesigns strategically, focusing on enhancing both aesthetics and functionality. By analyzing user behavior and industry trends, we revamp your site to align with current standards. The result? A visually stunning and user-friendly website that not only attracts but also retains your target audience, ultimately boosting your business's online presence and performance.",
    },
    {
      question: "Responsive Design: Why is responsive design crucial for websites?",
      answer:
        "Responsive design is at the core of our web development philosophy. With an increasing number of users accessing websites on various devices, we ensure your site adapts seamlessly to different screen sizes. This not only improves user experience but also positively impacts search engine rankings. Our commitment to responsive design guarantees that your website looks and functions flawlessly across desktops, tablets, and smartphones.",
    },
    {
      question: "E-commerce Integration: How can you enhance my online store's design?",
      answer:
        "For e-commerce businesses, we specialize in designing visually appealing and intuitive online stores. Our approach includes optimizing product displays, simplifying the checkout process, and incorporating secure payment gateways. By creating an immersive and trustworthy online shopping experience, we aim to maximize conversions and drive sustained growth for your e-commerce venture.",
    },
    {
      question: "SEO-friendly Design: Why is SEO a crucial consideration in web design?",
      answer:
        "SEO isn't an afterthought; it's integral to our web design strategy. We implement SEO-friendly elements from the ground up, including optimized code, strategic keyword placement, and mobile-friendliness. By aligning your website with search engine algorithms, we enhance its visibility and ranking, ensuring your business is easily discoverable by your target audience.",
    },
    {
      question: "Content Management: How can I easily update content on my website?",
      answer:
        "Empowering you to manage your content effortlessly, we integrate user-friendly content management systems (CMS). Whether it's updating text, images, or adding new pages, our CMS solutions make content management a breeze. This not only saves you time but also gives you the autonomy to keep your website content fresh and relevant without technical complexities.",
    },
  ];

  return (
    <div className="flex flex-col ">
      <Navbar />

       <Proven
        title1="Skilled Developers"
        desc1="Step into a realm where skilled developers meticulously construct state-of-the-art websites, merging cutting-edge technologies with industry-leading methodologies."
        title2="Quality Controlled"
        desc2="
     Secure your online footprint with our rigorous quality assurance procedures, guaranteeing that each pixel and line of code meets the most stringent standards."
        title3="Flexible Packages"
        desc3="Experience the advantage of our adaptable packages, customized to suit your specific requirements. Our scalable solutions seamlessly align with your business objectives."
      />

      <Faq1 faqData={faqData} mainhead="empty"/>
      <Drawer
  title="Revolutionize Your Online Presence with Web Design"
  button="Explore Our Web Design Solutions"
  desc1="Welcome to Pie-Bond's Web Design Studio, where we craft intelligent and visually stunning websites that captivate your audience. Unlike static online platforms, we transform casual visitors into loyal customers. If we don't elevate your online presence, our service is on us."
  Img1={seoimg.src}
  title2="Our 5-stage process for effective Web Design services:"
  submenu1="1. Research & Strategy"
  subdesc1="Explore optimal design concepts by analyzing industry trends and developing distinctive layouts for your digital presence."
  submenu2="2. Track & Analyze"
  subdesc2="Leverage advanced analytics tools to assess user engagement and gather valuable insights for continuous improvement."
  submenu3="3. Design & Develop"
  subdesc3="Construct and implement attention-grabbing visuals, seamless navigation, and interactive elements for your online platform."
  submenu4="4. Optimize & Refine"
  subdesc4="Experiment with various design elements, user experiences, and calls-to-action to refine and enhance user engagement."
  submenu5="5. Launch & Expand"
  subdesc5="Grow your online reach by implementing successful strategies, similar to expanding your digital footprint across various channels."
  lastdesc="Attain the recognition and visibility your website deserves in the digital landscape. Ready to elevate your brand's online experience? Explore Pie-Bond's Web Design Studio now!"
/>

<Section2
  title="Maximize Your Returns with Proven Web Design Strategies"
  desc1="Unlock the secrets of proven web design strategies that empower your brand to outshine competitors and achieve remarkable ROI. Tired of navigating uncertain marketing channels? Our solutions have propelled over 2,480 websites to page 1 on Google, witnessed a 140% surge in organic traffic, and delivered a staggering 8,000+ high-quality leads. Seize market dominance and conquer the online landscape in a matter of months!"
  desc2="Key Features:

  - Proven strategies for guaranteed web design results
  - Over 2,480 websites on page 1 of Google
  - 140% growth in organic website traffic
  - 8,000+ high-quality leads delivered
  - Ready to elevate your online presence? Explore more about our proven web design strategies now!"
/>

<Section3
  maintitle="Empowering Your Digital Journey with a Proven Web Design Framework"
  title="Research & Strategy"
  desc="Embark on a journey of discovery as we uncover effective design tactics from leading websites. Analyze your business goals, set objectives, and craft a bespoke web design strategy encompassing at least five key themes."
  title2="Track & Analyze"
  desc2="Leverage our analytics-driven approach to assess user engagement and gather actionable insights. We track the performance of your website, allowing for continuous improvement and informed decision-making."
  title3="Design & Develop"
  desc3="Rely on our team of skilled web designers to create the assets needed to bring your strategy to life. We focus on developing visually appealing, user-friendly, and responsive websites that enhance your online presence."
  title4="Optimize & Refine"
  desc4="Engage in extensive testing to identify the design elements and user experiences that resonate best with your audience. Gain invaluable insights into what drives success for your brand and refine your website for optimal performance."
  title5="Launch & Expand"
  desc5="Elevate your online presence by implementing successful design strategies. Once desired results are achieved, we work with you to scale up, ensuring sustained growth and increased visibility in the digital landscape."
/>

        <Faq
  q1="Which digital platforms offer effective marketing opportunities for websites?"
  a1="The effectiveness depends on your website, industry, and target audience. We strategically leverage platforms where your potential customers actively engage to ensure optimal results."
  q2="What digital channels do you specialize in for web marketing?"
  a2="Our expertise lies in platforms such as Google, Facebook, and Instagram. We stay adaptable to emerging channels, ensuring that your website stands out and achieves exceptional outcomes."
  q3="How does your web marketing service function?"
  a3="From initial strategy consultation to comprehensive online presence management, our services encompass strategic planning, content creation, user engagement, and detailed reporting. We tailor our approach to meet the diverse requirements of each project."
  q4="In which industries have you provided web marketing services?"
  a4="We've collaborated across various industries, ranging from global manufacturers to local service enterprises. Explore our case studies for insights into the diverse expertise we bring to each project."
  q5="When is the ideal time to invest in web marketing for my website?"
  a5="Transparency is key in web marketing. Typically, the primary goal is to boost website visibility, credibility, and trust. While generating leads or sales may require additional strategies like advertising or a substantial following, we can help you build a loyal audience. Once established, this fan base can be transformed into a lucrative channel, echoing our success with other clients."
/>

    <Footer/>
    </div>
  );
}
