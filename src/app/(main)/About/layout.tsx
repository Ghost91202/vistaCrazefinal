import Footer from "@/components/footer/footer";
import NavbarDemo from "@/components/navbar/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About us",
    description: "vistacraze digital marketing agency we provide SEO, Google Ads, Facebook Ads, YouTube Ads, webdeveopment, App development",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <NavbarDemo/>
            {children}
            <Footer/>
        </div>

    );
}
