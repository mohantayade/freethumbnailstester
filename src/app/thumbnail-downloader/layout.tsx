import type { Metadata } from 'next'
export const metadata: Metadata = {
  title:"YouTube Thumbnail Downloader HD free | freethumbnailstester",
  description:"Free YouTube Thumbnail Downloader HD Quality ,You can download any YouTube Thumbnail in .jpg .webp format freely on freethumbnailstester",
  alternates:{
    canonical: 'https://freethumbnailstester.vercel.app/thumbnail-downloader'
  },
  keywords:[
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

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }