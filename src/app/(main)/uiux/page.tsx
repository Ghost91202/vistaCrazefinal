"use client";
import Bgblur from "@/components/bgblur/blurbg"
import Stickycard2 from "@/components/cards/stickycard2";
import Section2 from "./section/section2";
import Section3 from "./section/section3";
import Industries from "@/components/industry/industries";
import Faq from "@/components/faq/faq"
import Head from "next/head";

export default function Home() {


  return (
    <>
      <Head>
      <title>UIUX page VIstacraze Digital marketing agency</title>
      <meta name="description" content="This is my awesome Next.js website." />
      <meta name="Vistacraze DIgital marketing agency" content="next.js, SEO, web development" />

         <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://www.Vistacraze.in",
          "@type": "WebSite",
          "name": "vistacraze Digital marketing agency  ",
          "url": "https://www.Vistacraze.in",
        })}
      </script>
      </Head>
    <div >
      <Bgblur />
      <Stickycard2 />
      <Section2 />
      <Section3 />
      <Industries />
      <Faq/>
    </div>
    </>
  );
}
