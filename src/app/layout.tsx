import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import Adsense from "@/components/Adsense";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title:
    "YouTube Thumbnail Tester & Checker – Test Your Thumbnails Online",
  description:
    "Test and check your YouTube thumbnails instantly! Use our free thumbnail tester, checker, and downloader to optimize your videos for more views and clicks.",
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
        <Adsense />

        <Script
          type="text/javascript"
          async
          src="https://platform.foremedia.net/code/56871/analytics"
        />

        <Script
          type="text/javascript"
          src="//pl26732460.profitableratecpm.com/04/99/b8/0499b848e8a80a41021abfa5097afb33.js"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X8P7XCYYDP');
          `}
        </Script>

        <Script
          async
          src="https://script.adquake.com/js/adquake.js"
          adquake-key="qSW3TW8DuUycQJarJJeZzw=="
        />

        <Script id="google-tag-manager" type="text/javascript">
          {`(function(a,b,c,d,e,f,g){
              a[c]=a[c]||function(){(a[c].q=a[c].q||[]).push(arguments)};
              f=b.createElement(d);f.async=1;f.setAttribute("adquake-key",e);
              f.src="https://script.adquake.com/js/adquake.js";
              g=b.getElementsByTagName(d)[0];g.parentNode.insertBefore(f,g);
            })(window,document,"adquake","script","qSW3TW8DuUycQJarJJeZzw==");
          `}
        </Script>

        <script src='https://push.aplu.io/push-notify.js'></script>
        
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar />
        {children}
        <Footer />

        {/* ✅ New script inserted here just above </body> */}
        <Script
          type="text/javascript"
          src="//pl26732658.profitableratecpm.com/0d/3e/7b/0d3e7b10a136867a68bd0503666ee1f0.js"
        />
      </body>
    </html>
  );
}
