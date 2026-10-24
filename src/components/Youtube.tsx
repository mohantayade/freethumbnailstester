"use client";

import ytprofile from "@/assets/ytprofile.png";
import youtube from "@/assets/YouTube-Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useMemo } from "react";

interface VideoItem {
  id: number;
  title: string;
  channelName: string;
  image: string;
  duration: string;
  views: string;
  timeAgo: string;
  isUserVideo?: boolean;
}

const BASE_COMPETITORS: Omit<VideoItem, "id">[] = [
  {
    title: "10 Minutes To Escape Or This Room Explodes!",
    channelName: "MrBeast",
    image: "/thum1.webp",
    duration: "14:26",
    views: "48M views",
    timeAgo: "3 weeks ago",
  },
  {
    title: "I BOUGHT A NEW HOUSE IN THE CITY (Full Tour)",
    channelName: "Ujjwal",
    image: "/thum7.webp",
    duration: "22:40",
    views: "5.1M views",
    timeAgo: "2 months ago",
  },
  {
    title: "Our New Toy - Will It Fly? Worth ₹5 Lakhs",
    channelName: "MR. INDIAN HACKER",
    image: "/thum2.webp",
    duration: "16:08",
    views: "3.8M views",
    timeAgo: "5 months ago",
  },
  {
    title: "Non Stop Comedy Scenes - Paresh Rawal & Akshay Kumar",
    channelName: "Shemaroo Comedy",
    image: "/thum3.webp",
    duration: "38:52",
    views: "19M views",
    timeAgo: "1 year ago",
  },
  {
    title: "Rabbit R1: Barely Reviewable Hardware",
    channelName: "Marques Brownlee",
    image: "/thum4.webp",
    duration: "11:15",
    views: "2.8M views",
    timeAgo: "6 months ago",
  },
  {
    title: "Pehli Dafa Song (Official Video) | Latest Hindi Song",
    channelName: "T-Series",
    image: "/thum5.webp",
    duration: "4:52",
    views: "192M views",
    timeAgo: "3 years ago",
  },
  {
    title: "FINALE - 100 Days But Ores Are LUCKY BLOCK in Minecraft",
    channelName: "Anshu Bisht",
    image: "/thum6.webp",
    duration: "28:14",
    views: "1.9M views",
    timeAgo: "8 months ago",
  },
];

export default function Youtube() {
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [highlightMyVideo, setHighlightMyVideo] = useState<boolean>(true);
  const [userPosition, setUserPosition] = useState<number>(2); // 1-based position

  const searchParams = useSearchParams();
  const imageyt = searchParams.get("images") || "/thum1.webp";
  const titleyt = searchParams.get("title") || "10 Secrets To Triple Your YouTube Views in 2025";
  const channelyt = searchParams.get("channelName") || "Your Channel";

  // Reorder videos based on userPosition
  const videoList = useMemo(() => {
    const userVideo: VideoItem = {
      id: 999,
      title: titleyt,
      channelName: channelyt,
      image: imageyt,
      duration: "12:45",
      views: "185K views",
      timeAgo: "2 days ago",
      isUserVideo: true,
    };

    const competitors = BASE_COMPETITORS.map((c, i) => ({ ...c, id: i + 1 }));
    const result = [...competitors];
    const targetIdx = Math.max(0, Math.min(userPosition - 1, result.length));
    result.splice(targetIdx, 0, userVideo);
    return result;
  }, [titleyt, channelyt, imageyt, userPosition]);

  const categories = [
    "All",
    "Podcasts",
    "Gaming",
    "Tech",
    "Live",
    "Recently uploaded",
    "Music",
    "Watched",
    "News",
  ];

  return (
    <div className="min-h-screen pt-4 sm:pt-8 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 text-zinc-900 pb-16">
      {/* ============================================================ */}
      {/* TOP CONTROLS & TOOLBAR (Always Clean Website Theme)          */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <header className="rounded-2xl border border-zinc-200/80 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-3.5 shadow-md flex flex-wrap items-center justify-between gap-4 text-zinc-900">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Editor</span>
          </Link>

          {/* Center: Device & Theme Switchers */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Device Toggle */}
            <div className="p-1 rounded-xl flex items-center border border-zinc-200 bg-zinc-100">
              <button
                type="button"
                onClick={() => setDeviceMode("desktop")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  deviceMode === "desktop"
                    ? "bg-red-600 text-white shadow-sm"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Desktop Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setDeviceMode("mobile")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  deviceMode === "mobile"
                    ? "bg-red-600 text-white shadow-sm"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Mobile Feed</span>
              </button>
            </div>

            {/* Simulated YouTube Theme Toggle (Only affects device screen) */}
            <button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              title={isDarkMode ? "Switch device to YouTube Light Theme" : "Switch device to YouTube Dark Theme"}
              className="p-2 px-3 rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-800 hover:bg-zinc-200 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-sm"
            >
              {isDarkMode ? (
                <>
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <span>Device: Dark Mode</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <span>Device: Light Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Right Controls: Highlight & Position */}
          <div className="flex items-center gap-3 text-xs">
            {/* Highlight Toggle */}
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={highlightMyVideo}
                onChange={(e) => setHighlightMyVideo(e.target.checked)}
                className="w-4 h-4 accent-red-600 rounded cursor-pointer"
              />
              <span className="font-semibold text-zinc-700">
                Highlight My Video
              </span>
            </label>

            {/* Position Picker */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-zinc-200">
              <span className="text-[11px] font-semibold text-zinc-500">
                Slot:
              </span>
              {[1, 2, 4].map((pos) => (
                <button
                  key={pos}
                  type="button"
                  onClick={() => setUserPosition(pos)}
                  className={`w-6 h-6 rounded-md text-[11px] font-mono font-bold transition-all ${
                    userPosition === pos
                      ? "bg-red-600 text-white shadow-sm"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200"
                  }`}
                >
                  #{pos}
                </button>
              ))}
            </div>
          </div>
        </header>
      </div>

      {/* ============================================================ */}
      {/* SIMULATOR BODY */}
      {/* ============================================================ */}
      <main className="py-8 px-2 sm:px-4 lg:px-6">
        {deviceMode === "desktop" ? (
          /* ========================================================== */
          /* DESKTOP YOUTUBE SIMULATION CONTAINER                       */
          /* ========================================================== */
          <div className={`max-w-7xl mx-auto rounded-3xl border shadow-2xl overflow-hidden transition-colors ${
            isDarkMode ? "bg-[#0F0F0F] border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"
          }`}>
            {/* YouTube Desktop Header */}
            <div className={`px-4 sm:px-6 py-3 border-b flex items-center justify-between gap-4 ${
              isDarkMode ? "border-zinc-800 bg-[#0F0F0F]" : "border-zinc-200 bg-white"
            }`}>
              {/* Left Brand */}
              <div className="flex items-center gap-4">
                <button type="button" aria-label="Menu" className={`p-1.5 rounded-full ${isDarkMode ? "hover:bg-zinc-800 text-zinc-300" : "hover:bg-zinc-100 text-zinc-700"}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <div className="flex items-center gap-1">
                  <Image src={youtube} alt="YouTube" width={90} height={20} className="object-contain" />
                  <span className={`text-[10px] font-mono font-bold -mt-2 ${isDarkMode ? "text-zinc-500" : "text-zinc-400"}`}>
                    IN
                  </span>
                </div>
              </div>

              {/* Center Search Bar */}
              <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-4">
                <div className={`flex items-center w-full rounded-full border overflow-hidden ${
                  isDarkMode ? "border-zinc-700 bg-zinc-950 text-white" : "border-zinc-300 bg-white text-zinc-900"
                }`}>
                  <input
                    type="text"
                    readOnly
                    value="Search"
                    className={`w-full px-4 py-2 text-sm bg-transparent outline-none cursor-default ${
                      isDarkMode ? "text-zinc-500" : "text-zinc-400"
                    }`}
                  />
                  <button type="button" aria-label="Search" className={`px-5 py-2.5 border-l ${
                    isDarkMode ? "bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700" : "bg-zinc-100 border-zinc-300 text-zinc-600 hover:bg-zinc-200"
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
                <button type="button" aria-label="Voice Search" className={`p-2.5 rounded-full flex-shrink-0 ${
                  isDarkMode ? "bg-zinc-800 text-zinc-300 hover:bg-zinc-700" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
              </div>

              {/* Right Profile / Actions */}
              <div className="flex items-center gap-3">
                <button type="button" aria-label="Create Video" className={`p-2 rounded-full hidden sm:block ${isDarkMode ? "hover:bg-zinc-800 text-zinc-300" : "hover:bg-zinc-100 text-zinc-700"}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <button type="button" aria-label="Notifications" className={`p-2 rounded-full ${isDarkMode ? "hover:bg-zinc-800 text-zinc-300" : "hover:bg-zinc-100 text-zinc-700"}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 text-white font-bold text-xs flex items-center justify-center">
                  M
                </div>
              </div>
            </div>

            {/* Layout with Sidebar & Content */}
            <div className="flex">
              {/* Left Mini Sidebar */}
              <aside className={`hidden lg:flex flex-col gap-6 p-3 border-r text-center ${
                isDarkMode ? "border-zinc-800 text-zinc-400" : "border-zinc-200 text-zinc-600"
              }`}>
                <div className="flex flex-col items-center gap-1 text-[10px] font-medium py-2 px-1 rounded-xl hover:bg-zinc-500/10 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span>Home</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-[10px] font-medium py-2 px-1 rounded-xl hover:bg-zinc-500/10 cursor-pointer">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.77 10.32l-1.2-.5L18 9.06a3.74 3.74 0 00-3.5-5.32 3.7 3.7 0 00-2.86 1.34L6 12.68a3.75 3.75 0 003.54 5.58 3.7 3.7 0 002.86-1.34L18 9.32a.75.75 0 00-.23-.99zM10 14.5v-5l4.5 2.5-4.5 2.5z" />
                  </svg>
                  <span>Shorts</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-[10px] font-medium py-2 px-1 rounded-xl hover:bg-zinc-500/10 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>Subscriptions</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-[10px] font-medium py-2 px-1 rounded-xl hover:bg-zinc-500/10 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>You</span>
                </div>
              </aside>

              {/* Main Feed Content */}
              <div className="flex-1 p-4 sm:p-6 overflow-hidden">
                {/* Category Chips Bar */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
                  {categories.map((cat, idx) => (
                    <button
                      key={cat}
                      type="button"
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                        idx === 0
                          ? isDarkMode
                            ? "bg-white text-black font-bold"
                            : "bg-black text-white font-bold"
                          : isDarkMode
                          ? "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700"
                          : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-7 mt-2">
                  {videoList.map((video) => (
                    <div
                      key={video.id}
                      className={`group flex flex-col cursor-pointer transition-all ${
                        video.isUserVideo && highlightMyVideo
                          ? "ring-2 ring-red-500 ring-offset-2 ring-offset-zinc-900 rounded-2xl p-1"
                          : ""
                      }`}
                    >
                      {/* Thumbnail with Timestamp */}
                      <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-zinc-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={video.image}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Timestamp Badge */}
                        <div className="absolute bottom-2 right-2 bg-black/85 text-white text-[11px] font-bold px-1.5 py-0.5 rounded tracking-wide backdrop-blur-sm">
                          {video.duration}
                        </div>

                        {/* Highlight Badge if User's Video */}
                        {video.isUserVideo && highlightMyVideo && (
                          <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1">
                            <span>★</span> Your Video
                          </div>
                        )}
                      </div>

                      {/* Video Info */}
                      <div className="flex gap-3 items-start mt-3">
                        {/* Avatar */}
                        <div className="relative flex-shrink-0 w-9 h-9 rounded-full overflow-hidden bg-zinc-700">
                          <Image src={ytprofile} alt="Avatar" fill className="object-cover" />
                        </div>

                        {/* Text & Meta */}
                        <div className="flex-1 min-w-0">
                          <h3
                            className={`font-semibold text-sm leading-snug line-clamp-2 transition-colors ${
                              isDarkMode ? "text-zinc-100 group-hover:text-white" : "text-zinc-900 group-hover:text-black"
                            }`}
                            title={video.title}
                          >
                            {video.title}
                          </h3>
                          <div className={`mt-1 flex items-center gap-1 text-xs ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                            <span className="truncate">{video.channelName}</span>
                            <svg className="w-3 h-3 text-zinc-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className={`text-xs mt-0.5 ${isDarkMode ? "text-zinc-500" : "text-zinc-500"}`}>
                            {video.views} • {video.timeAgo}
                          </p>
                        </div>

                        {/* Menu */}
                        <button type="button" aria-label="More Options" className={`opacity-0 group-hover:opacity-100 transition-opacity p-1 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================== */
          /* MOBILE PHONE YOUTUBE APP SIMULATION CONTAINER              */
          /* ========================================================== */
          <div className="flex justify-center">
            {/* Phone Bezel */}
            <div className={`w-full max-w-[390px] rounded-[48px] border-[10px] shadow-2xl overflow-hidden transition-colors ${
              isDarkMode ? "bg-[#0F0F0F] border-zinc-800 text-white" : "bg-white border-zinc-400 text-zinc-900"
            }`}>
              {/* Dynamic Island / Notch + Status Bar */}
              <div className={`px-6 pt-3 pb-2 flex items-center justify-between text-xs font-semibold ${
                isDarkMode ? "bg-[#0F0F0F] text-zinc-300" : "bg-white text-zinc-700"
              }`}>
                <span>9:41</span>
                <div className="w-24 h-4 bg-black rounded-full mx-auto"></div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zm-2.829 2.828a3 3 0 00-4.242 0 1 1 0 01-1.415-1.414 5 5 0 017.072 0 1 1 0 01-1.415 1.414zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <div className="w-5 h-2.5 border border-current rounded-sm p-0.5 flex items-center">
                    <div className="w-full h-full bg-current rounded-xs"></div>
                  </div>
                </div>
              </div>

              {/* YouTube Mobile App Top Bar */}
              <div className={`px-4 py-2.5 flex items-center justify-between border-b ${
                isDarkMode ? "border-zinc-800 bg-[#0F0F0F]" : "border-zinc-200 bg-white"
              }`}>
                <div className="flex items-center gap-1">
                  <Image src={youtube} alt="YouTube" width={80} height={18} className="object-contain" />
                </div>
                <div className="flex items-center gap-4">
                  <button type="button" aria-label="Cast">
                    <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                  <button type="button" aria-label="Notifications">
                    <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                  <button type="button" aria-label="Search">
                    <svg className="w-5 h-5 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Mobile Filter Chips */}
              <div className={`px-3 py-2 flex items-center gap-2 overflow-x-auto scrollbar-none border-b ${
                isDarkMode ? "border-zinc-800 bg-[#0F0F0F]" : "border-zinc-200 bg-white"
              }`}>
                {["All", "Gaming", "Podcasts", "Live", "Tech"].map((chip, idx) => (
                  <span
                    key={chip}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${
                      idx === 0
                        ? isDarkMode
                          ? "bg-white text-black"
                          : "bg-black text-white"
                        : isDarkMode
                        ? "bg-zinc-800 text-zinc-300"
                        : "bg-zinc-100 text-zinc-800"
                    }`}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Scrollable Mobile Feed (Height clamped) */}
              <div className="h-[620px] overflow-y-auto divide-y divide-zinc-800/40">
                {videoList.map((video) => (
                  <div key={video.id} className="pb-5">
                    {/* Full Width Edge Thumbnail */}
                    <div className="relative aspect-video w-full bg-zinc-800">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={video.image}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/85 text-white text-[11px] font-bold px-1.5 py-0.5 rounded tracking-wide backdrop-blur-sm">
                        {video.duration}
                      </div>

                      {video.isUserVideo && highlightMyVideo && (
                        <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-lg">
                          ★ Your Video
                        </div>
                      )}
                    </div>

                    {/* Metadata */}
                    <div className="px-3 pt-3 flex gap-3 items-start">
                      <div className="relative flex-shrink-0 w-9 h-9 rounded-full overflow-hidden bg-zinc-700">
                        <Image src={ytprofile} alt="Avatar" fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`font-semibold text-sm leading-snug line-clamp-2 ${
                            isDarkMode ? "text-zinc-100" : "text-zinc-900"
                          }`}
                        >
                          {video.title}
                        </h4>
                        <p className={`text-xs mt-1 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                          {video.channelName} • {video.views} • {video.timeAgo}
                        </p>
                      </div>
                      <button type="button" aria-label="Menu" className={`pt-0.5 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile App Bottom Navigation Bar */}
              <div className={`px-4 py-2.5 border-t flex items-center justify-around text-[10px] font-medium ${
                isDarkMode ? "border-zinc-800 bg-[#0F0F0F] text-zinc-400" : "border-zinc-200 bg-white text-zinc-600"
              }`}>
                <div className="flex flex-col items-center gap-1 text-current">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span>Home</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Shorts</span>
                </div>
                <div className="flex items-center justify-center -mt-1">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-lg ${
                    isDarkMode ? "border-zinc-400 text-white" : "border-zinc-700 text-black"
                  }`}>
                    +
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>Subscriptions</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-5 h-5 rounded-full bg-purple-600 text-white font-bold text-[9px] flex items-center justify-center">
                    M
                  </div>
                  <span>You</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
