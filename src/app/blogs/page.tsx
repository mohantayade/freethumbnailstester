import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Thumbnail Guides & CTR Strategies | Free Thumbnail Tester",
  description:
    "Learn how to create high-converting YouTube thumbnails, choose the best fonts, optimize CTR, and master the YouTube algorithm with our creator guides.",
  alternates: {
    canonical: "https://freethumbnailstester.vercel.app/blogs",
  },
  keywords: [
    "youtube thumbnail guides",
    "how to make youtube thumbnails",
    "best fonts for youtube thumbnails",
    "increase youtube ctr",
    "youtube thumbnail tips",
  ],
};

const blogPosts = [
  {
    slug: "how-to-create-attractive-thumbnail-for-youtube",
    title: "How to Create Attractive Thumbnails for YouTube That Win Clicks",
    excerpt:
      "A thumbnail is the first impression that decides whether a viewer clicks or scrolls past. Discover how to leverage human emotion, contrast, and visual hierarchy to maximize your click-through rate.",
    image: "/blogs-images/how-to-create-attractive-thumbnail.jpg",
    category: "CTR & Design",
    readTime: "5 min read",
    date: "June 2024",
    featured: true,
  },
  {
    slug: "5-steps-to-make-a-thumbnail-easy",
    title: "5 Simple Steps to Make a High-Impact YouTube Thumbnail",
    excerpt:
      "A fast, repeatable 5-step framework to design clean and compelling video thumbnails without getting overwhelmed by graphic design software.",
    image: "/blogs-images/5-steps-to-make-a-thumbnail-easy.jpg",
    category: "Workflow",
    readTime: "4 min read",
    date: "June 2024",
    featured: false,
  },
  {
    slug: "top-10-fonts-for-youtube-thumbnails-for-youtube",
    title: "Top 10 Best Fonts for YouTube Thumbnails (With Free Downloads)",
    excerpt:
      "The exact typography choices used by top creators like MrBeast and Marques Brownlee. Bold, condensed, ultra-readable fonts that stand out even on tiny phone screens.",
    image: "/blogs-images/top-10-fonts-for-youtube-thumbnails.jpg",
    category: "Typography",
    readTime: "6 min read",
    date: "June 2024",
    featured: false,
  },
  {
    slug: "how-to-create-high-quality-youtube-thumbnails",
    title: "How to Create Crisp, High-Quality (1080p HD) YouTube Thumbnails",
    excerpt:
      "Avoid pixelation and aggressive YouTube compression. Master resolution dimensions (1280×720), sharpness settings, color grading, and format choices.",
    image: "/blogs-images/how-to-create-high-quality-youtube-thumbnails.jpg",
    category: "Quality & Specs",
    readTime: "4 min read",
    date: "June 2024",
    featured: false,
  },
];

export default function BlogsPage() {
  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((p) => p.slug !== featuredPost.slug);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50 text-zinc-900 pb-16">
      {/* HEADER SECTION */}
      <section className="pt-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-600 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
          <span>📚</span>
          Creator Academy &amp; Design Guides
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
          Master the Art of the{" "}
          <span className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">
            YouTube Thumbnail
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Actionable tutorials, font breakdowns, and proven CTR strategies to help you turn impressions into views.
        </p>
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ARTICLES FEED */}
          <main className="lg:col-span-8 space-y-8">
            {/* FEATURED ARTICLE */}
            <article className="group bg-white rounded-3xl border border-zinc-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden">
              <Link href={`/blogs/${featuredPost.slug}`} className="block">
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                    Featured Guide
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-xs font-semibold text-zinc-500 mb-3">
                    <span className="text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 group-hover:text-red-600 transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-1.5 font-bold text-red-600 group-hover:text-red-700 text-sm">
                    <span>Read Full Guide</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>

            {/* MORE ARTICLES GRID */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                <span>Recent Guides &amp; Tutorials</span>
                <span className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full">
                  {regularPosts.length} articles
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group bg-white rounded-2xl border border-zinc-200/80 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between"
                  >
                    <Link href={`/blogs/${post.slug}`} className="block flex-1">
                      <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-zinc-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                          {post.category}
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2 font-medium">
                          <span>{post.readTime}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>

                        <h4 className="font-bold text-zinc-900 group-hover:text-red-600 transition-colors text-base line-clamp-2 leading-snug">
                          {post.title}
                        </h4>

                        <p className="mt-2 text-xs sm:text-sm text-zinc-600 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>

                    <div className="px-5 pb-5 pt-1">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-red-600 group-hover:text-red-700"
                      >
                        <span>Read Article</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </main>

          {/* SIDEBAR WIDGETS */}
          <aside className="lg:col-span-4 space-y-6">
            {/* TOOL WIDGET: THUMBNAIL TESTER */}
            <div className="bg-gradient-to-br from-red-600 to-rose-600 rounded-3xl p-6 text-white shadow-xl shadow-red-600/20">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full">
                Interactive Tool
              </span>
              <h3 className="text-xl font-extrabold mt-3 tracking-tight">Free Thumbnail Tester</h3>
              <p className="text-red-100 text-sm mt-2 leading-relaxed">
                Before uploading to YouTube, simulate how your thumbnail competes in desktop and mobile feeds.
              </p>
              <Link
                href="/"
                className="mt-5 inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white text-red-600 font-bold text-sm hover:bg-zinc-100 transition-colors shadow-md"
              >
                <span>Launch Thumbnail Tester</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* TOOL WIDGET: THUMBNAIL DOWNLOADER */}
            <div className="bg-white rounded-3xl p-6 border border-zinc-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Thumbnail Downloader</h3>
              <p className="text-zinc-600 text-xs sm:text-sm mt-1 leading-relaxed">
                Download full 1080p Ultra HD thumbnails from any YouTube video or Shorts link in one click.
              </p>
              <Link
                href="/thumbnail-downloader"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs transition-colors"
              >
                <span>Open Downloader</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* TOPICS / TAGS */}
            <div className="bg-white rounded-3xl p-6 border border-zinc-200/80 shadow-sm">
              <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-3">
                Key Creator Topics
              </h4>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-700">
                  YouTube CTR Optimization
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-700">
                  Thumbnail Fonts
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-700">
                  1280×720 Resolution
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-700">
                  Mobile Truncation
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-700">
                  Color Contrast
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-700">
                  A/B Testing
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
