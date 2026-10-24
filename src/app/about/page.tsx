import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Free YouTube Thumbnail Tester",
  description:
    "Learn about Free Thumbnails Tester, our mission to empower YouTube creators, and our free browser-based tools for optimizing CTR and thumbnail performance.",
  alternates: {
    canonical: "https://freethumbnailstester.vercel.app/about",
  },
  keywords: [
    "about free thumbnail tester",
    "youtube thumbnail tool",
    "youtube creator tools",
    "youtube ctr optimizer",
  ],
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50 text-zinc-900 pb-16">
      {/* HERO SECTION */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-600 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <span>✨</span>
          About Free Thumbnails Tester
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
          Empowering Creators to <br />
          <span className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">
            Stand Out &amp; Win Clicks
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Over 500 hours of video are uploaded to YouTube every minute. We build free, browser-based tools to help creators preview, compare, and optimize their thumbnails before going live.
        </p>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mt-4">
        {/* OUR STORY & MISSION */}
        <section className="bg-white p-6 sm:p-10 rounded-3xl border border-zinc-200/80 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-lg">
              🎯
            </div>
            <h2 className="text-2xl font-bold text-zinc-900">Our Mission</h2>
          </div>
          <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
            Creators often spend 20+ hours recording and editing a video, but only judge their thumbnail in a vacuum on a large Photoshop or Canva canvas. When published, that thumbnail has to compete against viral videos on tiny 5-inch smartphone screens.
          </p>
          <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
            Our mission is to eliminate that guesswork. By providing a live, high-fidelity simulation of YouTube&apos;s desktop and mobile feeds, <strong>Free Thumbnails Tester</strong> allows creators of all sizes to evaluate contrast, readability, and duration badge placement before publishing.
          </p>
        </section>

        {/* CORE PILLARS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-xl mb-4">
              👁️
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Real-Feed Simulation</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Test your thumbnail alongside actual trending videos in your niche. Catch mobile title truncations and avoid placing key faces beneath YouTube&apos;s timestamp badge.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl mb-4">
              🔒
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">100% Client-Side Privacy</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Your unreleased video ideas are confidential. All image rendering and previews happen locally in your browser; your thumbnails are never uploaded to our servers.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl mb-4">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">High-Res Downloader</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Study the competition by grabbing full 1080p HD thumbnails from any public YouTube video or Shorts link in one click.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xl mb-4">
              🎁
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Free For Everyone</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              No paywalls, no mandatory account sign-ups, and no watermarks. We believe every creator should have access to professional CTR tools.
            </p>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="bg-white p-6 sm:p-10 rounded-3xl border border-zinc-200/80 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-lg">
              ⭐
            </div>
            <h2 className="text-2xl font-bold text-zinc-900">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70">
              <h4 className="font-bold text-zinc-900 text-base">Creator-Centric Design</h4>
              <p className="text-zinc-600 text-xs sm:text-sm mt-1">
                Every feature is designed to save you time and solve real workflow frustrations.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70">
              <h4 className="font-bold text-zinc-900 text-base">Simplicity &amp; Speed</h4>
              <p className="text-zinc-600 text-xs sm:text-sm mt-1">
                Zero clutter, instant drag-and-drop, and blazing fast browser performance.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70">
              <h4 className="font-bold text-zinc-900 text-base">Continuous Innovation</h4>
              <p className="text-zinc-600 text-xs sm:text-sm mt-1">
                Regular updates aligned with YouTube&apos;s evolving mobile and desktop interfaces.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70">
              <h4 className="font-bold text-zinc-900 text-base">Honest Transparency</h4>
              <p className="text-zinc-600 text-xs sm:text-sm mt-1">
                Respecting your privacy, data, and time with zero deceptive tactics.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT & FEEDBACK CARD */}
        <section className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-zinc-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 px-3 py-1 rounded-full">
              Get In Touch
            </span>
            <h3 className="text-2xl font-bold tracking-tight mt-3">Questions or Feedback?</h3>
            <p className="text-zinc-400 text-sm mt-1 max-w-md">
              Have an idea to improve the tool, or want to report an issue? We would love to hear from you.
            </p>
          </div>

          <a
            href="mailto:mohanpixels@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-red-600/30 flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>mohanpixels@gmail.com</span>
          </a>
        </section>

        {/* CTA TO TRY TOOL */}
        <div className="text-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-base rounded-2xl shadow-lg shadow-red-500/25 transition-all hover:-translate-y-0.5"
          >
            <span>Start Testing Your Thumbnails</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
