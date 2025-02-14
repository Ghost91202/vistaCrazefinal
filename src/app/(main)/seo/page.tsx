import Faq from '@/components/faq/faq'
import Footer from '@/components/footer/footer'
import SeoHero from '@/components/hero/seoHero'

import Industries from '@/components/industry/industries'
import NavbarDemo from '@/components/navbar/navbar'
import Seosection2 from '@/components/Sections/seosection2'
import Seosection3 from '@/components/Sections/seosection3'
import Testimonials from '@/components/testimonials/testimonials'
import Head from 'next/head'

type Props = {}

const Home = (props: Props) => {
  return (
    <>

       <Head>
  {/* Optimized Title with Primary Keywords */}
  <title>Search Engine Optimization</title>

  {/* Enhanced Meta Description with Focus Keywords */}
  <meta
    name="description"
    content="Kravion is a leading digital marketing agency in Kanpur, Noida, Delhi, Bangalore, and Chandigarh. Founded by Karan Sharma and Avantika Nigam, we specialize in SEO, PPC, social media marketing, and more to help businesses grow online."
  />

  {/* Keywords Meta Tag (Optional, as most search engines don't use it anymore) */}
  <meta
    name="keywords"
    content="digital marketing agency, Kanpur, Noida, Delhi, Bangalore, Chandigarh, Kravion, SEO services, PPC advertising, social media marketing, online marketing agency"
  />

  {/* Canonical Link to Avoid Duplicate Content */}
  <link rel="canonical" href="https://www.kravion.com/seo" />

  {/* Open Graph Tags for Social Media Sharing */}
  <meta property="og:title" content="About Kravion - Top Digital Marketing Agency in Kanpur, Noida, Delhi, Bangalore & Chandigarh" />
  <meta
    property="og:description"
    content="Kravion is a leading digital marketing agency in India. Founded by Karan Sharma and Avantika Nigam, we specialize in SEO, PPC, social media marketing, and more to help businesses grow online."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.kravion.com/seo" />
  <meta property="og:image" content="https://www.kravion.com/images/og-about.jpg" />
  <meta property="og:site_name" content="Kravion Digital Marketing Agency" />

  {/* Twitter Card Tags for Twitter Sharing */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Kravion - Top Digital Marketing Agency in Kanpur, Noida, Delhi, Bangalore & Chandigarh" />
  <meta
    name="twitter:description"
    content="Kravion is a leading digital marketing agency in Kanpur, Noida, Delhi, Bangalore, and Chandigarh. Founded by Karan Sharma and Avantika Nigam, we specialize in SEO, PPC, social media marketing, and more to help businesses grow online."
  />
  <meta name="twitter:image" content="https://www.kravion.com/images/twitter-about.jpg" />
  <meta name="twitter:site" content="@KravionAgency" />

  {/* Structured Data (JSON-LD) for Better Search Engine Understanding */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Kravion Digital Marketing Agency",
      "url": "https://www.kravion.com/seo",
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
        "https://www.linkedin.com/company/KravionAgency"
      ]
    })}
  </script>
</Head>

    <div >
          <SeoHero />
          <Seosection2 />
          <Seosection3 />
          <Industries/>
          {/* <Testimonials /> */}
          <Faq />
    </div>
    </>
  )
}

export default Home
