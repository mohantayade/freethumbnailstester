import type { Metadata } from 'next'
import Script from 'next/script';
export const metadata: Metadata = {
  title: "YouTube Thumbnail Downloader HD free | freethumbnailstester",
  description: "Free YouTube Thumbnail Downloader HD Quality ,You can download any YouTube Thumbnail in .jpg .webp format freely on freethumbnailstester",
  alternates: {
    canonical: 'https://freethumbnailstester.vercel.app/thumbnail-downloader'
  },
  keywords: [
    "thumbnail youtube download",
    "youtube thumbnail downloader",
    "download thumbnail",
    "download thumbnail one click",
    "download thumbnail youtube",
    "download youtube thumbnail",
    "yt thumbnail download",
    "youtube thumbnail saver",
    "youtube thumbnail download 4k",
    "download youtube thumbnail hd",
    "download youtube thumbnail jpg hd",
    "download youtube thumbnail high quality",
    "How do I download a thumbnail image?",
    "How do I download an image from YouTube?",
    "How to copy YouTube thumbnails?",
  ]
}


const jsonld = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://freethumbnailstester.vercel.app/thumbnail-downloader"
  },
  "headline": "How to Download a YouTube Thumbnail ?",
  "description": "Free YouTube Thumbnail Downloader HD Quality ,You can download any YouTube Thumbnail in .jpg .webp format freely on freethumbnailstester",
  "author": {
    "@type": "Organization",
    "name": "Free Thumbnail Tester"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Free Thumbnail Tester",
    "logo": {
      "@type": "ImageObject",
      "url": "https://freethumbnailstester.vercel.app/favicon.ico"
    }
  },
  "datePublished": "2024-07-30"
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
    <Script id="4" type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonld),
      }} />
    {children}</section>
}