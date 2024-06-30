import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import When from "@/components/when/page";
import Proven from "@/components/Sections/proven";
import Drawer from "@/components/drawer/drawer";
import Faq1 from "@/components/homeFaq/faq2";
import seoimg from "@/assets/unds.jpg";
import Section2 from "@/components/services/sections/section2";
import Section3 from "@/components/services/sections/section3";
import FAQ from "../../../components/faq/faq"


export default function Home() {
  const faqData = [
    { question: 'Audience Targeting', answer: "Employing Instagram's advanced targeting capabilities, we guarantee that your ads reach the appropriate audience, thereby maximizing engagement and conversion potential." },
    { question: 'Creative Contentr Creation', answer: "Our team designs visually compelling content that stands out in Instagram's crowded feed, capturing your audience's imagination and interest." },
    { question: 'Performance Analytics', answer: "We consistently monitor and analyze ad performance, leveraging insights to refine and optimize your campaigns for enhanced engagement and return on investment (ROI)." },
    { question: "Strategic Campaign Management", answer: 'From conceptualization to execution, we oversee every facet of your Instagram Ads campaign, ensuring seamless alignment with your overarching marketing strategy.' }
  ];
  return (
    <div className="flex flex-col ">
      <Navbar />

      <Proven
        title1="Proven Instagram Ad Tactics"
        desc1="Discover a collection of proven Instagram advertising tactics, meticulously designed and backed by data. These strategies are tailored to enhance your brand visibility on Instagram and drive tangible results for your business."

        title2="Certified Instagram Ad Experts"
        desc2="Harness the knowledge and skills of our certified professionals dedicated to optimizing your Instagram advertising campaigns. Stay ahead of Instagram advertising trends with a team committed to delivering top-notch solutions for your business."

        title3="Guaranteed Instagram Ad Results"
        desc3="Witness the impact of our unwavering commitment to Instagram advertising results. We blend expertise, innovation, and personalized strategies to ensure your success in the dynamic Instagram advertising landscape."
      />

      <Faq1 faqData={faqData} mainhead="Why Professional Instagrsm Advertising Services?" />
      <Drawer title="Why You Need an Instagram Ads Agency"
        button="Understand the full potential of professional Instagram Ad services"
        desc1="Envision an Instagram Ads campaign that consistently transforms social media users into tangible sales for your business each month, all while staying within your established marketing budget. Are you weary of squandering your Instagram Ads budget on unproductive ad agencies and campaigns? It's time to implement our tried-and-tested, revenue-centric Instagram Ads strategies."
        Img1={seoimg.src}
        title2="Our 5-stage process for effective SEO services:"
        submenu1="1. Research & Plan"
        subdesc1="Just like strategically placing billboards at high-traffic junctions, our goal is to maximize visibility. We conduct thorough research to comprehend your business, competitors, and target audience. This empowers us to position your Instagram 'billboards' where they will generate the most impact."
        submenu2="2. Track & Measure"
        subdesc2="In traditional marketing, gauging the number of individuals who notice your billboard is challenging. However, with Instagram Ads, you benefit from real-time tracking. Our specialized dashboard monitors key metrics, ensuring your message isn't merely cast into the wind but precisely targeted. Additionally, we establish specific, tangible targets before initiating any actions, providing a benchmark against which to measure success once the work begins."
        submenu3="3. Execute"
        subdesc3="Crafting an effective billboard entails striking a balance between captivating visuals and a clear message. Our team of Instagram Ads specialists is dedicated to creating eye-catching and engaging ads, ensuring that your digital billboard' receives the attention it deserves."
        submenu4="4. Optimise"
        subdesc4="Similar to how billboard designs are adjusted based on customer feedback and performance, we consistently test and refine your Instagram Ads. By analyzing campaign data, we fine-tune your ads to ensure they resonate effectively with your target audience."
        submenu5="5. Scale"
        subdesc5="Just as a successful billboard campaign might prompt consideration of additional locations or larger displays, when your Instagram Ads yield promising results, we explore opportunities to expand your reach. By tapping into new audiences, we aim to bolster your sales and revenue, further amplifying your success."
        lastdesc="   Through the implementation of our Infinity-5 Framework for Instagram Ads, your digital 'billboard' will not only seize attention but also prompt action, transitioning casual viewers into devoted customers."
      />
      <Section2 title="Maximize Your ROI with Proven Instagram Advertising Strategies"
        desc1="Unlock the proven strategies your competitors use to dominate the digital landscape and achieve exceptional ROI. Tired of uncertain marketing channels? Our solutions have propelled brands with over 2,480 successful Instagram ad campaigns, a 140% surge in ad engagement, and the delivery of 8,000+ high-quality leads. Seize market share and establish online dominance in just months!"
        desc2="Key Highlights:- Proven strategies for guaranteed Instagram ad results- Over 2,480 successful Instagram ad campaigns- 140% growth in ad engagement- 8,000+ high-quality leads delivered- Ready to elevate your Instagram advertising game? Explore more about our proven strategies now!"
      />
      <Section3
        maintitle="Our proven framework enables us to guarantee success with Instagram Ads."
        title="Research and Plan"
        desc="Our process begins with thorough competitor research and a deep understanding of your business. From there, we develop a customized Instagram Ads strategy that prioritizes the targets necessary to achieve a return on investment."

        title2="Track & Measure"
        desc2="We implement comprehensive tracking to ensure we can measure every aspect of the Instagram Ads campaign. Additionally, we construct a custom reporting dashboard that incorporates the targets we aim to achieve, providing transparent insights into campaign performance."

        title3="Execute"
        desc3="As a specialized agency, we leverage our team of Certified Instagram Ads experts to produce all necessary campaign assets tailored to achieve ROI with your strategy. Subsequently, we execute the strategy meticulously to drive results effectively."

        title4="Optimise"
        desc4="We conduct a series of tests to gain insights into what truly works, allowing campaign data to inform our decisions. Even after reaching our initial targets, we persist in optimizing the campaign for ongoing improvement."

        title5="Scale"
        desc5="Once we attain the desired results, we expand your campaign to drive increased sales revenue."

      />
      {/* <Price/> */}
    
      <Footer />
    </div>
  );
}
