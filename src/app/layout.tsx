import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Free YouTube Thumbnails Tester to Boost Your Views | freethumbnailstester",
  description:
    "Welcome to our Free YouTube Thumbnails Tester site! Are you looking to enhance your online presence with eye-catching thumbnails? Look no further!",

  verification: {
    google: "t9dHCWpedhtN56-mHLv09WHtwYIUqXoS6Tco-ftcArA",
  },
  keywords: [
    "youtube thumbnail",
    "Free YouTube Thumbnails Tester",
    "thumbnail tester",
    "thumbnail preview",
    "youtube seo",
    "preview thumbnail youtube",
    "youtube video thumbnail preview",
  ],
  alternates: {
    canonical: "https://freethumbnailstester.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X8P7XCYYDP"
        >
        </Script>


                <Script id="google-analytics">
                      {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-X8P7XCYYDP'); `}
                </Script>
                
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
