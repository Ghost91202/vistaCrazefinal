import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import When from "@/components/when/page";
import Proven from "@/components/Sections/proven";
import Drawer from "@/components/drawer/drawer";
import Faq1 from "@/components/homeFaq/faq2";
import seoimg from "@/assets/unds.jpg";
import Section2 from "@/components/services/sections/section2";
import Section3 from "@/components/services/sections/section3";
export default function Home() {
  const faqData = [
    { question: 'SEO Audits: In-Depth Analysis for Tailored Strategies', answer: 'Our SEO audits go beyond automated checks. Each audit is conducted by an experienced team member, covering on-site and off-site SEO, user experience, content analysis and competitor analysis, providing a comprehensive roadmap in our Performance Tracker for your digital success.' },
    { question: 'Content Audit: Gaining a Competitive Edge', answer: 'We conduct thorough competitor backlink audits to uncover their strategies and identify untapped opportunities. This insight allows us to integrate effective tactics into your SEO campaign, ensuring you stay ahead in the digital race.' },
    { question: 'Content Optimisation: Maximising Your Digital Reach', answer: 'Content optimisation ensures your content ranks high in both direct and related searches. We use advanced SEO tools, such as SE Ranking and AHREF, and manual analysis to enhance your content&apos;s visibility, driving traffic and conversions' },
    { question: 'What is FAQ #4?', answer: 'Answer to FAQ #4' },
    { question: 'What is FAQ #5?', answer: 'Answer to FAQ #5' },
  ];
  return (
    <div className="flex flex-col ">
      <Navbar />

      <Faq1 faqData={faqData} mainhead="empty"/>
      <Drawer title="Understanding SEO Services"
        button="Understand Our Seo Service"
        desc1="Think of SEO as the digital equivalent of attending a high-stakes networking event. In the room (search engine rankings),
            everyone&apos;s jostling for the attention of a few key people (your target audience). Some have the advantage of being well-known, others are newcomers. Like you at a networking event, your website starts as one among many. But just as your interactions at the event can turn you into a &apos;must-meet&apos; figure, our SEO strategies ensure your website becomes a &apos;must-visit&apos; destination on the digital landscape."
        Img1={seoimg.src}
        title2="Our 5-stage process for effective SEO services:"
        submenu1="1. Research & Plan"
        subdesc1="Just as you would study the guest list and topics before a networking event, we start by understanding your business landscape and competitors. Knowing who and what you&apos;re up against enables us to position you strategically, so you&apos;re not just a face in the crowd but a key player in your field."
        submenu2="2. Track & Measure"
        subdesc2="At a networking event, you&apos;d take note of who you spoke with, who showed interest and who you connected with. Our SEO analytics are the digital equivalent, providing real-time data on who&apos;s visiting your site, what they&apos;re interested in, and how they found you in the first place. To pair with these analytic tools we also set certain goals that we can measure the success of our SEO efforts against so that we know that we are on the right path"
        submenu3="3. Execute"
        subdesc3="Now, it&apos;s time to enter the room, or in your case, to make your presence felt on search engines. Our team takes care of everything from keyword optimisation to high-quality content creation, just like you&apos;d prepare your elevator pitch and choose your conversations carefully at a networking event."
        submenu4="4. Optimise"
        subdesc4="After the initial interactions, you&apos;d think about what went well and where you could improve. We do the same with your SEO, continuously fine-tuning based on performance data to make sure you&apos;re not just in the room but drawing a crowd."
        submenu5="5. Scale"
        subdesc5="Once you&apos;ve made a name for yourself at one event, you&apos;d look to attend others and expand your network. Similarly, once your SEO starts yielding results, we explore opportunities to target new keywords, and audiences and even break into different markets"
        lastdesc="    Much like how you become a well-known figure in a networking room by being at the right place, saying the right things and connecting with the right people, our Infinity-5 Framework ensures your website gains the reputation and visibility it deserves in the digital world."
      />
      <Section2 title="Generate Better Roi with Proven Marketing Strategies"
        desc1="Learn The Proven Strategies Your Competitors Are Using To Dominate The Market."
        desc2="Are you tired of spending money on marketing strategies or digital channels that you&apos;re unsure will be effective and provide a return on investment? Have you invested in marketing campaigns and hoped for positive results, but have been disappointed? We have the solutions for all of your concerns. Our strategies have generated over 2,480 page 1 Google rankings, grown organic traffic by more than 140% and delivered more than 8,000+ high-quality leads, helping businesses like yours to steal market share from their competitors and dominate the online space in just a matter of months!"
      />
      {/* <Price/> */}

    <Footer/>
    </div>
  );
}
