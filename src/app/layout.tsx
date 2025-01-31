import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import NavbarDemo from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kravion  Digital Marketing Agency",
  description: "SEO, Google Ads, Facebook Ads, YouTube Ads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white w-screen overflow-x-hidden ">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <meta name="p:domain_verify" content="a13a6546428fe39302ba7e6c2d6ceb6a"/>
          <NavbarDemo/>
          {children}
          <Footer/>
        </ThemeProvider>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C1DCDT8Q0X"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C1DCDT8Q0X');
            `,
          }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4031481397691091"
     crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
