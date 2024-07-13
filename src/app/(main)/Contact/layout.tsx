import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/provider/theme-provider"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact US  || VistaCraze Digital Marketing Agency - SEO, Google Ads, Facebook Ads",
  description: "Boost your business with VistaCraze's SEO, Google Ads, Facebook Ads, Bing Ads, and YouTube Ads services. Expert digital marketing in Kanpur.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className}>
<ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
                  disableTransitionOnChange>
                  {children}
              </ThemeProvider>
          </body>
    </html>
  );
}
