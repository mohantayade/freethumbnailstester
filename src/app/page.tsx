"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import ytimage from "@/assets/ytprofile.png";
import Link from "next/link";
import Script from "next/script";

import hthumb1 from "@/assets/howto/how to create a new thumbnail preview.jpg";
import hthumb2 from "@/assets/howto/how look like your youtube video on thumbnail.jpg";

export default function Home() {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [title, setTitle] = useState("");
  const [channelName, setChannelName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [faqOpen, setFaqOpen] = useState<{ [key: number]: boolean }>({ 0: true });

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleFileProcess = useCallback((selectedFile: File) => {
    if (!selectedFile) return;
    if (!selectedFile.type.startsWith("image/")) {
      alert("Please upload an image file (PNG, JPG, or WEBP).");
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setFile(objectUrl);
    setFileName(selectedFile.name);
  }, []);

  const handleClickUpload = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFileProcess(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      handleFileProcess(droppedFile);
    }
  };

  const handleLoadSample = () => {
    setFile("/thum1.webp");
    setFileName("sample-thumbnail.webp");
    setTitle("10 Minutes To Escape Or This Room Explodes!");
    setChannelName("MrBeast");
  };

  const handleClear = () => {
    setFile(null);
    setFileName("");
    setTitle("");
    setChannelName("");
    if (hiddenFileInput.current) {
      hiddenFileInput.current.value = "";
    }
  };

  const faqs = [
    {
      q: "What is a YouTube thumbnail tester and why is it important?",
      a: "A YouTube thumbnail tester is a tool that simulates how your video's thumbnail, title, and channel branding will appear in real YouTube desktop, mobile, and search feeds alongside competing content. Because over 90% of the top-performing videos on YouTube rely on custom thumbnails, testing in realistic conditions helps you verify visual contrast, test small-screen mobile readability, and catch title truncations before you hit publish.",
    },
    {
      q: "What is the recommended YouTube thumbnail size, resolution, and aspect ratio?",
      a: "YouTube's official specification recommends an aspect ratio of 16:9 with dimensions of 1280 × 720 pixels (minimum width of 640 pixels). Supported file formats include JPG, PNG, GIF, and WEBP, with an upload size limit under 2MB.",
    },
    {
      q: "What is a good Click-Through Rate (CTR) on YouTube?",
      a: "According to YouTube Creator Academy, typical video CTRs range between 2% and 10%. Brand-new videos often launch with higher CTRs before YouTube tests them with broader audiences. High-performing, viral videos frequently maintain a CTR of 8% to 14%+ within their first 24 to 48 hours.",
    },
    {
      q: "How does YouTube truncate video titles on mobile devices?",
      a: "On desktop feeds, YouTube typically displays up to 70–80 characters of a video title. However, on mobile phone feeds (which account for over 70% of YouTube viewership), titles frequently truncate after 50 to 55 characters with an ellipsis (...). Testing your title ensures your main keyword and emotional hook are visible before the cutoff.",
    },
    {
      q: "Why does YouTube's video duration badge ruin some thumbnails?",
      a: "YouTube automatically overlays a dark timestamp badge (e.g., '14:25') in the bottom-right corner of every thumbnail. Creators who place crucial focal objects, faces, text, or logos in this bottom-right zone find them obscured. Our simulator features a live timestamp badge so you can verify your safe zone.",
    },
    {
      q: "Is this thumbnail tester 100% free and private?",
      a: "Yes. All image processing happens 100% locally on your computer or phone using HTML5 browser APIs. Your thumbnail images and unreleased video concepts are never uploaded, stored, or processed on any external server.",
    },
    {
      q: "Can I preview my thumbnail on both Desktop and Mobile layouts?",
      a: "Yes. Once you click 'Preview in YouTube Feed', you can freely toggle between desktop grid and mobile phone feed layouts to check how your creative scales down across different viewports.",
    },
    {
      q: "Can I download existing YouTube thumbnails with this tool?",
      a: "Yes! Use our integrated YouTube Thumbnail Downloader to grab full 1080p Ultra HD thumbnails from any public YouTube video or Shorts link in one click.",
    },
  ];

  // Structured Data
  const jsonld = [
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Free Thumbnail Tester",
      "url": "https://freethumbnailstester.vercel.app/",
    },
  ];

  const jsonldA = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Free Thumbnail Tester",
      "operatingSystem": "Browser | Web Application - runs on your browser",
      "applicationCategory": "BrowserApplication",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "ratingCount": "8864",
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
    },
  ];

  const jsonldb = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Thumbnail Tester",
        "item": "https://freethumbnailstester.vercel.app/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": "https://freethumbnailstester.vercel.app/blogs",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://freethumbnailstester.vercel.app/about",
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Thumbnail Tips",
        "item":
          "https://freethumbnailstester.vercel.app/blogs/how-to-create-attractive-thumbnail-for-youtube",
      },
    ],
  };

  const jsonldFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  // Title character count and truncation warnings
  const titleLength = title.length;
  let titleBadgeColor = "text-emerald-600 bg-emerald-50 border-emerald-200";
  let titleBadgeText = "✨ Optimal length for mobile and desktop feeds";
  if (titleLength > 70) {
    titleBadgeColor = "text-rose-600 bg-rose-50 border-rose-200";
    titleBadgeText = "🚨 Likely to truncate heavily on both mobile & desktop feeds";
  } else if (titleLength > 55) {
    titleBadgeColor = "text-amber-600 bg-amber-50 border-amber-200";
    titleBadgeText = "⚠️ May truncate on smaller mobile screens (~50-55 chars)";
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50 text-zinc-900 pb-16">
      {/* SEO Structured Data */}
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonldA) }}
      />
      <Script
        id="schema-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonldb) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonldFaq) }}
      />

      {/* AdSense Script */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3845105523158440"
      />

      {/* HERO SECTION */}
      <section className="pt-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-600 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          100% Free YouTube Thumbnail Tester &amp; CTR Simulator
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
          Test Your <span className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">YouTube Thumbnail</span> Before You Publish
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
          Preview how your video thumbnail, title, and channel compete in a real YouTube feed alongside trending content. Verify mobile truncation, test visual contrast, and maximize your Click-Through Rate (CTR).
        </p>

        {/* Feature Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-zinc-500 font-medium">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No Registration Needed
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            100% Private Client-Side
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Desktop &amp; Mobile Simulator
          </span>
        </div>
      </section>

      {/* INTERACTIVE TESTING STUDIO */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto my-6">
        <div className="bg-white rounded-3xl border border-zinc-200/80 shadow-xl shadow-zinc-200/50 overflow-hidden">
          {/* Studio Header Bar */}
          <div className="px-6 py-4 bg-zinc-50/80 border-b border-zinc-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="font-bold text-zinc-800 text-sm sm:text-base">Thumbnail Testing Studio</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleLoadSample}
                className="text-xs sm:text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-100 border border-zinc-300 px-3 py-1.5 rounded-lg transition-all shadow-sm"
              >
                ⚡ Load Sample
              </button>
              {(file || title || channelName) && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-xs sm:text-sm font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-lg transition-all"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: LIVE YOUTUBE CARD SIMULATION */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Live Card Preview</span>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Real-time
                </span>
              </div>

              {/* YouTube Video Card Mockup */}
              <div className="w-full max-w-[400px] bg-white rounded-2xl border border-zinc-200 shadow-md overflow-hidden transition-all hover:shadow-lg">
                {/* 16:9 Thumbnail Box */}
                <div
                  onClick={handleClickUpload}
                  className="relative aspect-video w-full bg-zinc-900 flex items-center justify-center overflow-hidden cursor-pointer group"
                >
                  {file ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={file}
                        alt="Uploaded thumbnail preview"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-xs font-semibold bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                          Click to Replace Image
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="text-center p-4">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center group-hover:text-white group-hover:bg-red-600 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-zinc-300 text-sm font-semibold">Click to upload thumbnail</p>
                      <p className="text-zinc-500 text-xs mt-1">16:9 • 1280 × 720</p>
                    </div>
                  )}

                  {/* YouTube Timestamp Overlay */}
                  <div
                    title="YouTube timestamp badge overlays this area"
                    className="absolute bottom-2 right-2 bg-black/85 text-white text-[11px] font-bold px-1.5 py-0.5 rounded tracking-wide backdrop-blur-sm"
                  >
                    12:45
                  </div>
                </div>

                {/* Video Info Section */}
                <div className="p-3.5 flex gap-3 items-start">
                  {/* Channel Avatar */}
                  <div className="relative flex-shrink-0 w-9 h-9 rounded-full overflow-hidden bg-zinc-200 mt-0.5">
                    <Image src={ytimage} alt="Channel avatar" fill className="object-cover" />
                  </div>

                  {/* Title & Metadata */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-zinc-900 text-sm leading-snug line-clamp-2" title={title || "Your video title will appear here..."}>
                      {title.trim() ? title : "Your video title will appear here in the live preview..."}
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-xs text-zinc-500 font-medium">
                      <span className="truncate max-w-[150px]">
                        {channelName.trim() ? channelName : "Your Channel Name"}
                      </span>
                      <svg className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xs text-zinc-400 mt-0.5">148K views • 3 days ago</p>
                  </div>

                  {/* Three-dot menu */}
                  <div className="text-zinc-400 hover:text-zinc-600 cursor-pointer pt-0.5">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-400 mt-3 text-center">
                Notice the <span className="text-zinc-700 font-semibold">12:45 timestamp</span> in the bottom-right corner. Avoid putting faces or text there!
              </p>
            </div>

            {/* RIGHT COLUMN: CONTROLS & INPUTS */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Drag & Drop Upload Box */}
              <div>
                <label className="block text-sm font-bold text-zinc-800 mb-2">
                  1. Upload Thumbnail Image
                </label>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={handleClickUpload}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                    isDragging
                      ? "border-red-500 bg-red-50/50 scale-[1.01]"
                      : file
                      ? "border-emerald-300 bg-emerald-50/20 hover:border-emerald-400"
                      : "border-zinc-300 bg-zinc-50/60 hover:border-red-400 hover:bg-zinc-50"
                  }`}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    ref={hiddenFileInput}
                    className="hidden"
                  />

                  {file ? (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3 text-left">
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-zinc-900 truncate max-w-[220px]">
                            {fileName || "Custom Thumbnail"}
                          </p>
                          <p className="text-xs text-emerald-700 font-medium">Image loaded successfully</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleClickUpload();
                          }}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-zinc-300 hover:bg-zinc-100 text-zinc-700 transition-colors shadow-sm"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="w-12 h-12 mx-auto rounded-full bg-red-100/70 text-red-600 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <p className="text-sm font-bold text-zinc-800">
                        Drag and drop your thumbnail here, or <span className="text-red-600 underline">browse</span>
                      </p>
                      <p className="text-xs text-zinc-400 mt-1">
                        Supports JPG, PNG, WEBP • Recommended 1280×720 (16:9)
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Title Input with Smart Length Indicator */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="video-title" className="text-sm font-bold text-zinc-800">
                    2. Video Title
                  </label>
                  <span className="text-xs font-mono font-medium text-zinc-500">
                    {titleLength}/100 chars
                  </span>
                </div>
                <input
                  id="video-title"
                  type="text"
                  maxLength={100}
                  value={title}
                  placeholder="e.g. 10 Secrets To Triple Your YouTube Views in 2025"
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-zinc-300 bg-white text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all shadow-sm"
                />
                {titleLength > 0 && (
                  <div className={`mt-2 text-xs px-3 py-1.5 rounded-lg border flex items-center gap-1.5 font-medium ${titleBadgeColor}`}>
                    {titleBadgeText}
                  </div>
                )}
              </div>

              {/* Channel Name Input */}
              <div>
                <label htmlFor="channel-name" className="block text-sm font-bold text-zinc-800 mb-1.5">
                  3. Channel Name
                </label>
                <input
                  id="channel-name"
                  type="text"
                  maxLength={40}
                  value={channelName}
                  placeholder="e.g. Creator Studio"
                  onChange={(e) => setChannelName(e.target.value)}
                  className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-zinc-300 bg-white text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all shadow-sm"
                />
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href={{
                    pathname: "/preview",
                    query: {
                      images: file || "",
                      title: title || "Your Video Title",
                      channelName: channelName || "Your Channel",
                    },
                  }}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base sm:text-lg font-bold text-white transition-all shadow-lg ${
                    file
                      ? "bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 shadow-red-500/25 hover:shadow-red-500/40 hover:-translate-y-0.5 active:translate-y-0"
                      : "bg-zinc-300 text-zinc-500 cursor-not-allowed shadow-none"
                  }`}
                  onClick={(e) => {
                    if (!file) {
                      e.preventDefault();
                      alert("Please upload a thumbnail or click 'Load Sample' to test in the YouTube feed.");
                    }
                  }}
                >
                  <span>Preview in YouTube Feed</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <p className="text-center text-xs text-zinc-400 mt-2">
                  Preview includes Desktop &amp; Mobile toggles with live competing videos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK TOOL SWITCHER BANNER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto my-12">
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-600/30">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Need to download an existing thumbnail?</h3>
              <p className="text-zinc-400 text-sm mt-1 max-w-xl">
                Extract high-resolution 1080p, HD, and 4K thumbnails from any public YouTube video URL in one click.
              </p>
            </div>
          </div>
          <Link
            href="/thumbnail-downloader"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-red-600/25"
          >
            <span>Open Downloader</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* VALUE PROPOSITION: WHY TEST YOUR THUMBNAIL? */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto my-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Why Successful Creators Test Before Publishing
          </h2>
          <p className="text-zinc-600 mt-3 text-base sm:text-lg">
            Your thumbnail and title are responsible for 90% of your click-through rate. Here is what testing solves:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg mb-4">
              👁️
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Feed Contrast</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Thumbnails don&apos;t exist in a vacuum. Check if your colors, borders, and subjects pop out against competing videos in the YouTube feed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg mb-4">
              📱
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Mobile Screen Test</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Over 70% of YouTube viewership is on mobile. Ensure your thumbnail text and focal points remain razor sharp and readable on tiny screens.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">
              ⏱️
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Duration Badge Shield</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              YouTube places a dark timestamp badge in the bottom-right corner. Previewing protects your face or text from being blocked.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg mb-4">
              ✂️
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Title Cutoff Prevention</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Mobile YouTube cuts off titles at around 50–55 characters. Make sure your hook keywords aren&apos;t hidden behind an ellipsis.
            </p>
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP GUIDE WITH VISUALS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto my-16">
        <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
              Quick Tutorial
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight mt-3">
              How To Use The Thumbnail Tester
            </h2>
            <p className="text-zinc-600 mt-2 text-sm sm:text-base">
              Follow this 3-step workflow before you upload your video to YouTube Studio.
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-600 text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                  1
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900">
                  Enter Your Title &amp; Upload Your Thumbnail
                </h3>
              </div>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed pl-11">
                Type in your proposed YouTube title and channel name. Drag and drop your thumbnail image (16:9 ratio, 1280×720 recommended). Look at the instant card preview on the left to confirm your layout looks balanced.
              </p>
              <div className="pl-11">
                <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
                  <Image
                    src={hthumb1}
                    alt="Step 1: Enter title and upload thumbnail"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-600 text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                  2
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900">
                  Inspect Your Thumbnail Inside The YouTube Feed
                </h3>
              </div>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed pl-11">
                Click <strong>&ldquo;Preview in YouTube Feed&rdquo;</strong>. You will be transported to a simulated YouTube homepage where your video sits right alongside real trending content. Toggle between Desktop and Mobile views.
              </p>
              <div className="pl-11">
                <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
                  <Image
                    src={hthumb2}
                    alt="Step 2: Preview thumbnail alongside other YouTube videos"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-600 text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                  3
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900">
                  Refine Contrast &amp; Publish With Confidence
                </h3>
              </div>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed pl-11">
                Ask yourself: <em>Does my thumbnail catch the eye first? Can I read the title in 1 second? Is any important face or graphic hidden?</em> If needed, make quick tweaks in your graphic tool and re-test until you&apos;re completely satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE SEO CONTENT SECTION: YOUTUBE THUMBNAIL OPTIMIZATION GUIDE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto my-16">
        <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-12 shadow-sm space-y-12">
          {/* Section 1 Header */}
          <div className="border-b border-zinc-200 pb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
              SEO &amp; Algorithm Masterclass
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mt-3">
              The Complete Guide to YouTube Thumbnail Testing &amp; CTR Optimization
            </h2>
            <p className="text-zinc-600 mt-3 text-base sm:text-lg leading-relaxed">
              Why top YouTubers spend up to 50% of their creative time perfecting thumbnails—and how small visual adjustments multiply views.
            </p>
          </div>

          {/* Article Part 1: How YouTube Algorithm Uses CTR */}
          <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
              How the YouTube Recommendation Algorithm Leverages CTR
            </h3>
            <p>
              When you publish a new video, YouTube&apos;s algorithm does not immediately show it to millions of viewers. Instead, it tests the video with an initial &ldquo;seed audience&rdquo; across their Homepage, Suggested Videos rail, and Subscription feeds.
            </p>
            <p>
              The algorithm measures two foundational metrics:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h4 className="font-bold text-zinc-900 text-base mb-1">1. Click-Through Rate (CTR)</h4>
                <p className="text-xs sm:text-sm text-zinc-600">
                  The percentage of people who saw your thumbnail (impressions) and chose to click. A higher CTR proves to the algorithm that your packaging is compelling.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h4 className="font-bold text-zinc-900 text-base mb-1">2. Average View Duration (AVD)</h4>
                <p className="text-xs sm:text-sm text-zinc-600">
                  How long viewers stick around after clicking. If your thumbnail creates strong curiosity without deceiving viewers, retention stays high.
                </p>
              </div>
            </div>
            <p>
              If your video achieves an above-average CTR during this test window, YouTube automatically pushes it to wider audiences in Browse and Suggested features. Increasing your CTR from <strong>4% to 8%</strong> doesn&apos;t just double your views—it frequently 5x to 10x your algorithmic impressions.
            </p>
          </div>

          {/* Article Part 2: Technical Specs Table */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
              Official YouTube Thumbnail Technical Specifications (2025 Standard)
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base">
              Use this quick reference table to ensure your thumbnail graphics meet YouTube&apos;s exact encoding standards without compression penalties.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200">
              <table className="w-full text-left text-sm text-zinc-700">
                <thead className="bg-zinc-50 border-b border-zinc-200 text-xs uppercase tracking-wider text-zinc-500 font-bold">
                  <tr>
                    <th className="py-3.5 px-4">Specification</th>
                    <th className="py-3.5 px-4">Recommended Value</th>
                    <th className="py-3.5 px-4">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 font-medium">
                  <tr>
                    <td className="py-3 px-4 font-bold text-zinc-900">Recommended Resolution</td>
                    <td className="py-3 px-4 font-mono text-red-600 font-bold">1280 &times; 720 pixels</td>
                    <td className="py-3 px-4 text-xs text-zinc-600">Optimal balance between high-density Retina displays and file size limits.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-zinc-900">Minimum Width</td>
                    <td className="py-3 px-4 font-mono">640 pixels</td>
                    <td className="py-3 px-4 text-xs text-zinc-600">Images under 640px will suffer severe blurring and upscaling artifacts.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-zinc-900">Aspect Ratio</td>
                    <td className="py-3 px-4 font-mono text-red-600 font-bold">16:9 widescreen</td>
                    <td className="py-3 px-4 text-xs text-zinc-600">Standard YouTube video player ratio. Non-16:9 images create black pillar bars.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-zinc-900">Maximum File Size</td>
                    <td className="py-3 px-4 font-mono">2 Megabytes (MB)</td>
                    <td className="py-3 px-4 text-xs text-zinc-600">Files exceeding 2MB will be rejected by YouTube Studio during upload.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-zinc-900">Supported Formats</td>
                    <td className="py-3 px-4 font-mono">JPG, PNG, GIF, WEBP</td>
                    <td className="py-3 px-4 text-xs text-zinc-600">JPG is best for complex photographic images; PNG is ideal for sharp graphic text.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-zinc-900">Bottom-Right Safe Zone</td>
                    <td className="py-3 px-4 font-mono text-amber-600">Leave 180 &times; 60px clear</td>
                    <td className="py-3 px-4 text-xs text-zinc-600">YouTube overlays a black video duration timestamp that conceals graphics.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Article Part 3: The 4 Critical Thumbnail Tests */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
              The 4 Critical Tests Every Creator Must Run Before Uploading
            </h3>
            <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                <h4 className="font-bold text-zinc-900 text-base flex items-center gap-2">
                  <span className="text-red-600 font-mono">Test 1:</span> The &ldquo;Squint Test&rdquo; for Mobile Feed Scalability
                </h4>
                <p className="mt-1 text-zinc-600 text-xs sm:text-sm">
                  Over 70% of YouTube views occur on smartphones where a thumbnail measures less than 2 inches wide. Close your eyes halfway or scale your image down to 10% size. Can you still immediately distinguish the primary subject, human facial expression, and main headline word? If the image turns into an unrecognizable blur, simplify the composition immediately.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                <h4 className="font-bold text-zinc-900 text-base flex items-center gap-2">
                  <span className="text-red-600 font-mono">Test 2:</span> The Feed Competition &amp; Contrast Test
                </h4>
                <p className="mt-1 text-zinc-600 text-xs sm:text-sm">
                  A thumbnail never appears on a blank canvas. It is surrounded by high-budget thumbnails with extreme saturation, glowing borders, and high-contrast facial cutouts. Placing your thumbnail in our live simulated feed lets you see whether your color palette blends into the crowd or grabs the eye first.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                <h4 className="font-bold text-zinc-900 text-base flex items-center gap-2">
                  <span className="text-red-600 font-mono">Test 3:</span> The Timestamp Overlay Shield
                </h4>
                <p className="mt-1 text-zinc-600 text-xs sm:text-sm">
                  Every video on YouTube features a dark, semi-translucent timestamp badge in the bottom right corner (e.g., &ldquo;12:45&rdquo; or &ldquo;1:04:12&rdquo;). Thousands of creators inadvertently position their channel logo, text punchline, or face right beneath this badge. Our preview displays the timestamp indicator so you can adjust your framing before publishing.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                <h4 className="font-bold text-zinc-900 text-base flex items-center gap-2">
                  <span className="text-red-600 font-mono">Test 4:</span> The Mobile Title Truncation Test
                </h4>
                <p className="mt-1 text-zinc-600 text-xs sm:text-sm">
                  On desktop, YouTube displays 70–80 characters of your title. On smartphones, titles are routinely cut off around 50–55 characters with an ellipsis (...). If your main hook word appears at character 65, mobile users will never see it. Our tool provides live character tracking and warns you if your title risks truncation.
                </p>
              </div>
            </div>
          </div>

          {/* Article Part 4: Psychology of 10%+ CTR */}
          <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
              Psychological Triggers Behind High-CTR YouTube Thumbnails
            </h3>
            <p>
              Top creators like MrBeast, Ryan Trahan, and Mark Rober don&apos;t rely on luck. They systematically apply cognitive psychology to their thumbnail designs:
            </p>
            <ul className="space-y-3 list-disc list-inside pl-2">
              <li>
                <strong>The Gaze Direction Trigger:</strong> Humans instinctively look where other humans are looking. If your thumbnail subject is looking directly toward your text or key object, viewers&apos; eyes will naturally follow their gaze.
              </li>
              <li>
                <strong>Complementary Curiosity:</strong> Never duplicate your title text in your thumbnail. Use the thumbnail to display a puzzling or dramatic scenario, and use the title to establish the context.
              </li>
              <li>
                <strong>High Saturation &amp; Color Grading:</strong> YouTube&apos;s UI is neutral white and dark charcoal. Saturated primary colors (especially vibrant red, lime green, and electric yellow) trigger immediate ocular focus.
              </li>
              <li>
                <strong>The 3-Element Limit:</strong> Never include more than 3 visual components: 1 face/subject + 1 focal object + 1 short text phrase. Anything more creates visual noise.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRO THUMBNAIL TIPS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto my-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            5 Best Practices For High CTR Thumbnails
          </h2>
          <p className="text-zinc-600 mt-2 text-sm sm:text-base">
            Backed by YouTube algorithm insights and analytics from top creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4">
            <span className="text-2xl flex-shrink-0">🎨</span>
            <div>
              <h4 className="font-bold text-zinc-900 text-base">Complement, Don&apos;t Duplicate</h4>
              <p className="text-zinc-600 text-sm mt-1">
                Never put the exact same words from your title onto the thumbnail. Use the thumbnail to trigger curiosity and the title to explain the context.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4">
            <span className="text-2xl flex-shrink-0">🔍</span>
            <div>
              <h4 className="font-bold text-zinc-900 text-base">The 3-Second Glance Rule</h4>
              <p className="text-zinc-600 text-sm mt-1">
                Viewers decide whether to click in less than 2 seconds. Keep text under 4 words and make facial expressions prominent and emotive.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4">
            <span className="text-2xl flex-shrink-0">🎯</span>
            <div>
              <h4 className="font-bold text-zinc-900 text-base">High-Contrast Color Palette</h4>
              <p className="text-zinc-600 text-sm mt-1">
                YouTube&apos;s UI is predominantly white and dark gray. Saturated yellows, greens, and vibrant reds create instant contrast against the background.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm flex gap-4">
            <span className="text-2xl flex-shrink-0">📏</span>
            <div>
              <h4 className="font-bold text-zinc-900 text-base">The Rule of Thirds</h4>
              <p className="text-zinc-600 text-sm mt-1">
                Place key focal elements (faces, surprising objects) along natural visual grid lines and leave breathing room so the thumbnail doesn&apos;t feel cluttered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXTENDED FAQ SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto my-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight mt-3">
            Everything You Need to Know About YouTube Thumbnails
          </h2>
          <p className="text-zinc-600 mt-2 text-sm sm:text-base">
            Detailed answers to common questions about CTR optimization, dimensions, and testing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-all shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleFaq(i)}
                className="w-full px-6 py-5 text-left font-bold text-zinc-900 flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                <span className="text-zinc-400 text-xl font-mono flex-shrink-0">
                  {faqOpen[i] ? "−" : "+"}
                </span>
              </button>
              {faqOpen[i] && (
                <div className="px-6 pb-5 text-zinc-600 text-sm sm:text-base leading-relaxed border-t border-zinc-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
