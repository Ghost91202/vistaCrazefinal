import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import NavbarDemo from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata: Metadata = {
  title: {
    default: "Kravion Partners",
    template: "%s | Kravion Digital Marketing Agency",
  },
  description:
    "Kravion Digital Marketing Agency: Boost your online presence with expert SEO, Google Ads, Facebook Ads, and YouTube Ads services. Get more traffic and conversions today!",
  keywords: [
    "SEO Services",
    "Google Ads Agency",
    "Facebook Ads",
    "YouTube Ads",
    "Digital Marketing Company",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://kravion.com",
    title: "Kravion Digital Marketing Agency",
    description:
      "Boost your online presence with expert SEO, Google Ads, Facebook Ads, and YouTube Ads services.",
    images: [
      {
        url: "/fevicon.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en" className="bg-white w-screen overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <meta name="p:domain_verify" content="a13a6546428fe39302ba7e6c2d6ceb6a" />
          <NavbarDemo />
          {children}
          <Footer />
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

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4031481397691091"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
