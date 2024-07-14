import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO",
    description: "vistacraze digital marketing agency we provide SEO, Google Ads, Facebook Ads, YouTube Ads, webdeveopment, App development",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}

        </div>

    );
}
