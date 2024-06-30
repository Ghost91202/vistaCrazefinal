import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/provider/theme-provider"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkedIn Ads VistaCraze digital marketing agency",
  description: "LinkIn ads  Bing Ads,  google ads,  FaceBook ads youTube Ads",
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
            disableTransitionOnChange
        >{children}
        </ThemeProvider>      </body>
    </html>
  );
}
