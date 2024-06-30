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
      question: "Strategic Blueprint for Genuine Engagement",
      answer:
        "Our specialists delve deeply into your brand, harmonizing strategies with your fundamental values to communicate a cohesive, trust-building narrative across various platforms. Through meticulous research, we tailor our approach to your audience, ensuring content that deeply resonates and stimulates increased engagement.",
    },
    {
      question: "Captivating Content: Key to Social Media Triumph",
      answer:
        "Compelling Content Reigns Supreme in Social Media, and we meticulously craft each piece to resonate with your audience. Our designers produce visually striking graphics and images, while our copywriters craft captivating captions, ensuring a consistent flow of top-notch, engaging content.",
    },
    {
      question: "Community Interaction: Cultivating Genuine Bonds",
      answer:
        "We promptly and considerately engage with your audience, cherishing their interactions and nurturing a positive experience. Our team formulates personalized responses and strategies that deeply connect with your audience, cultivating them into dedicated brand advocates.",
    },
    {
      question:
        "Insightful Data Analysis: Enhancing Strategies for Peak Performance",
      answer:
        "Our methodology revolves around comprehending your audience through analytics. We fine-tune our strategies using performance metrics, adjusting to trends and user behaviors to maintain the relevance and effectiveness of your social media presence.",
    },
    {
      question: "Campaign Optimisation: Maximising Your ROI",
      answer:
        "We meticulously optimize every facet of your social media campaigns, spanning targeting, messaging, and ad placement. Our ongoing optimization process is fueled by data, guaranteeing that your campaigns yield measurable success and a robust return on investment.",
    },
  ];
  return (
    <div className="flex flex-col ">
      <Navbar />

      <Proven
        title1="Proven Strategies"
        desc1="Discover our assortment of proven digital marketing tactics, supported by data, aimed at bolstering your online business success."
        title2="Certified Experts"
        desc2="Harness the expertise of our certified professionals, armed with the knowledge and skills to optimize your digital marketing endeavors."
        title3="Guaranteed Results"
        desc3="Feel the impact with our commitment to delivering impressive results, blending expertise, innovation, and customized digital marketing strategies."
      />

      <Faq1 faqData={faqData} mainhead="empty"/>
      <Drawer
        title="Understanding Social Media Marketing"
        button="Understand Our Social Media Marketing"
        desc1="Consider Pie-Bond's social media service as your intelligent online billboard. Unlike a static ad on the highway, we engage with passersby, converting them into customers. If we fail to generate more attention and active customer interest for you, our service is free. We don't just increase 'likes'; we enhance your profitability. Many clients experience tangible returns on their investment within just a few months."
        Img1={seoimg.src}
        title2="Our 5-stage process for effective SEO services:"
        submenu1="1. Research & Plan"
        subdesc1="It's akin to scouting the optimal location for your billboard. We analyze the traffic—your competitors—to determine which signs attract the most attention. Additionally, we delve into your previous messages and objectives to ascertain what your sign should convey. Subsequently, we draft at least five distinctive designs or 'themes' for your billboard."
        submenu2="2. Track & Measure"
        subdesc2="Picture installing sensors near your billboard to monitor every car that slows down to observe or take a photo. In the digital realm, we employ tracking tools to assess how many individuals are engaging with your 'billboard,' providing us with the data required to comprehend engagement rates."
        submenu3="3. Execute"
        subdesc3="Now, it's time to proceed with constructing and installing the billboard. Our team of specialists develops all the assets—visuals, text, and other elements—necessary to ensure your online presence is as attention-grabbing as possible.

        "
        submenu4="4. Optimise"
        subdesc4="This marks the refinement stage. We experiment with various billboard messages, lighting schemes, and even how we prompt passersby to engage (our 'CTAs' or Calls to Action). We observe what prompts drivers to slow down, glance, and ultimately, turn into your driveway."
        submenu5="5. Scale"
        subdesc5="When we find the winning formula, we don’t just celebrate; we make it bigger. Imagine installing similar billboards on multiple highways to attract even more customers. In the social media context, this means doing more of what works to grow your following."
        lastdesc="    Much like how you become a well-known figure in a networking room by being at the right place, saying the right things and connecting with the right people, our Infinity-5 Framework ensures your website gains the reputation and visibility it deserves in the digital world."
      />
      <Section2
        title="Generate Better Roi with Proven Marketing Strategies"
        desc1="Learn The Proven Strategies Your Competitors Are Using To Dominate The Market."
        desc2="Are you tired of spending money on marketing strategies or digital channels that you're unsure will be effective and provide a return on investment? Have you invested in marketing campaigns and hoped for positive results, but have been disappointed? We have the solutions for all of your concerns. Our strategies have generated over 2,480 page 1 Google rankings, grown organic traffic by more than 140% and delivered more than 8,000+ high-quality leads, helping businesses like yours to steal market share from their competitors and dominate the online space in just a matter of months!"
      />
      <Section3
        maintitle="With our tried-and-tested framework, we confidently assure success in social media marketing"
        title="Research & Plan"
        desc="We kick off by delving into your competitors' strategies to identify proven engagement tactics. Subsequently, we familiarize ourselves with your business, analyzing past successes and defining the targets we aim to accomplish. Lastly, we craft a tailored social media strategy encompassing at least five themes."
        title2="Track & Measure"
        desc2="We implement tracking mechanisms to ensure comprehensive measurement at every stage of the process, allowing us to gauge engagement rates across all activities."
        title3="Execute"
        desc3="We leverage our team of social media experts to develop all the assets required to execute your strategy and expand your following."
        title4="Optimise"
        desc4="We conduct extensive testing to determine what resonates best: the content, the day of the week, the CTAs, and more. Through this process, we gain invaluable insights into what drives success for your brand."
        title5="Scale"
        desc5="Once we attain the desired results, we enhance your social media following by scaling up the successful strategies."
      />
      {/* <Price/> */}
       <Faq
        q1="What social media platforms offer the most effective marketing opportunities?"
        a1="The efficacy of employing social media as a marketing avenue hinges on your business, sector, and intended audience. When your target demographic engages with a specific social media platform, it can serve as a potent marketing asset when utilized adeptly."
        q2="
      What social media channels do you work with?
      "
        a2="Our social media team excels in Facebook, Instagram, and LinkedIn, while remaining adaptable to other evolving platforms. We pledge exceptional outcomes across any social media channel you may require."
        q3="
      How exactly do your social media marketing services work?
      "
        a3="Our social media marketing agency provides a diverse array of services to clients, spanning social media strategy consultation to comprehensive management of all social media channels for large enterprises. We specialize in crafting and refining social media strategies, curating and disseminating social media content, community management, and delivering insightful reports. With adaptability at our core, we are equipped to accommodate a multitude of requirements."
        q4="
      What industries do you have experience in running social media marketing for?
      "
        a4="We collaborate with a diverse array of brands spanning various sectors, from global product manufacturers and software providers to local service-oriented enterprises. Explore our case studies or reach out to us directly to gain insights into our expertise."
        q5="
      When should I use social media marketing?
      "
        a5="In the realm of social media marketing, transparency regarding achievable outcomes is paramount. Typically, the primary objective revolves around augmenting brand visibility and cultivating credibility and trust. Without leveraging social media advertising or amassing a considerable following, generating leads or sales may pose challenges. Nevertheless, we can aid you in cultivating a dedicated following and transforming it into a lucrative channel once you've established a loyal fan base, mirroring our success with other clients."
      />
      <Footer />
    </div>
  );
}
