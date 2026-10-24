"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

function extractYouTubeId(urlOrId: string): string | null {
  if (!urlOrId) return null;
  const trimmed = urlOrId.trim();

  // If directly an 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  // Comprehensive YouTube URL matcher
  const patterns = [
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|shorts\/|live\/|watch\?(?:.*&)?v=))([a-zA-Z0-9_-]{11})/,
    /[?&]v=([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

export default function ThumbnailDownloaderPage() {
  const [inputUrl, setInputUrl] = useState("https://www.youtube.com/watch?v=tVWWp1PqDus");
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [downloadingFormat, setDownloadingFormat] = useState<string | null>(null);
  const [selectedQuality, setSelectedQuality] = useState<"max" | "sd" | "hq" | "mq">("max");
  const [previewError, setPreviewError] = useState(false);
  const [faqOpen, setFaqOpen] = useState<{ [key: number]: boolean }>({ 0: true });

  const videoId = useMemo(() => extractYouTubeId(inputUrl), [inputUrl]);

  // Reset preview error whenever videoId changes
  useEffect(() => {
    setPreviewError(false);
  }, [videoId]);

  const resolutions = useMemo(() => {
    if (!videoId) return null;
    return [
      {
        id: "max",
        title: "Ultra HD (1080p / 720p)",
        badge: "Recommended",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        resolution: "1280 × 720 px",
        ratio: "16:9",
        description: "Best for high-resolution graphics, presentations, and large screens.",
        formats: [
          {
            label: "Download JPG",
            ext: "jpg",
            url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
            filename: `youtube-thumbnail-hd-${videoId}.jpg`,
          },
          {
            label: "Download WEBP",
            ext: "webp",
            url: `https://img.youtube.com/vi_webp/${videoId}/maxresdefault.webp`,
            filename: `youtube-thumbnail-hd-${videoId}.webp`,
          },
        ],
      },
      {
        id: "sd",
        title: "Standard Definition (SD)",
        badge: "Standard",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
        resolution: "640 × 480 px",
        ratio: "4:3",
        description: "Standard YouTube preview format with balanced file size.",
        formats: [
          {
            label: "Download JPG",
            ext: "jpg",
            url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
            filename: `youtube-thumbnail-sd-${videoId}.jpg`,
          },
        ],
      },
      {
        id: "hq",
        title: "High Quality (HQ)",
        badge: "Popular",
        badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
        resolution: "480 × 360 px",
        ratio: "4:3",
        description: "Always available on all YouTube videos, even older legacy uploads.",
        formats: [
          {
            label: "Download JPG",
            ext: "jpg",
            url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            filename: `youtube-thumbnail-hq-${videoId}.jpg`,
          },
        ],
      },
      {
        id: "mq",
        title: "Medium Quality (MQ)",
        badge: "Compact",
        badgeColor: "bg-zinc-100 text-zinc-700 border-zinc-200",
        resolution: "320 × 180 px",
        ratio: "16:9",
        description: "Lightweight small file size, ideal for website embeds or mobile previews.",
        formats: [
          {
            label: "Download JPG",
            ext: "jpg",
            url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
            filename: `youtube-thumbnail-mq-${videoId}.jpg`,
          },
        ],
      },
    ];
  }, [videoId]);

  // Current preview image URL based on selected quality
  const currentPreviewUrl = useMemo(() => {
    if (!videoId) return "";
    if (previewError || selectedQuality === "hq") {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    if (selectedQuality === "sd") {
      return `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
    }
    if (selectedQuality === "mq") {
      return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    }
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }, [videoId, selectedQuality, previewError]);

  const handleDownload = async (imageUrl: string, filename: string) => {
    setDownloadingFormat(filename);
    try {
      const response = await fetch(imageUrl, { mode: "cors" });
      if (!response.ok) throw new Error("Fetch failed");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      // Direct download fallback
      const link = document.createElement("a");
      link.href = imageUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setTimeout(() => setDownloadingFormat(null), 800);
    }
  };

  const handleCopyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2500);
    } catch (err) {
      console.error("Failed to copy URL", err);
    }
  };

  const handlePasteClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) setInputUrl(text);
    } catch {
      alert("Clipboard access was blocked. Please paste manually into the input box.");
    }
  };

  const handleClear = () => {
    setInputUrl("");
  };

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const faqs = [
    {
      q: "Can I download thumbnails from YouTube Shorts?",
      a: "Yes! Simply copy the URL of the YouTube Short (e.g., https://youtube.com/shorts/VIDEO_ID) and paste it into the search box. The tool automatically detects the video ID and generates full-resolution downloads.",
    },
    {
      q: "What is the highest thumbnail resolution available?",
      a: "The maximum resolution for YouTube thumbnails is 1280 × 720 pixels (MaxRes / 1080p HD). For older videos uploaded before 2011, YouTube may only offer High Quality (480 × 360 px) or Standard Definition.",
    },
    {
      q: "Is it legal to download YouTube thumbnails?",
      a: "Downloading thumbnails for personal use, fair use, educational analysis, design inspiration, or backup of your own content is generally permitted. However, avoid re-uploading copyrighted thumbnails for commercial use without permission from the creator.",
    },
    {
      q: "Does this thumbnail downloader have a limit or cost?",
      a: "No. This tool is 100% free and unlimited. You can download as many thumbnails as you need without watermarks or account sign-ups.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50 text-zinc-900 pb-16">
      {/* HERO SECTION */}
      <section className="pt-10 pb-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-600 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          Fast, Free &amp; Unlimited YouTube Thumbnail Downloader
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
          Download <span className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">YouTube Thumbnails</span> in Full HD
        </h1>

        <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Grab high-resolution 1080p, 720p, and WebP thumbnails from any YouTube video or Shorts in seconds. No registration required.
        </p>
      </section>

      {/* MAIN DOWNLOADER STUDIO CARD */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto my-6">
        <div className="bg-white rounded-3xl border border-zinc-200/80 shadow-xl shadow-zinc-200/50 p-6 sm:p-8 lg:p-10">
          {/* URL Input Bar */}
          <div>
            <label htmlFor="yt-url-input" className="block text-sm font-bold text-zinc-800 mb-2">
              Paste YouTube Video URL or Video ID:
            </label>
            <div className="relative flex flex-col sm:flex-row gap-2.5 items-stretch">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <input
                  id="yt-url-input"
                  type="text"
                  value={inputUrl}
                  placeholder="https://www.youtube.com/watch?v=..."
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full pl-11 pr-12 py-3.5 text-sm sm:text-base rounded-2xl border border-zinc-300 bg-zinc-50/50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white transition-all shadow-sm"
                />
                {inputUrl && (
                  <button
                    type="button"
                    onClick={handleClear}
                    title="Clear input"
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={handlePasteClipboard}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-sm rounded-2xl transition-all shadow-sm flex-shrink-0"
              >
                <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Paste Link</span>
              </button>
            </div>

            {/* Quick Helper / Sample Selector */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">
                {videoId ? (
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Detected Video ID: <code className="bg-zinc-100 px-1.5 py-0.5 rounded font-mono text-zinc-800">{videoId}</code>
                  </span>
                ) : (
                  <span className="text-zinc-400">Supports standard videos, Shorts, and youtu.be links</span>
                )}
              </span>

              <button
                type="button"
                onClick={() => setInputUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}
                className="text-red-600 hover:text-red-700 font-semibold underline underline-offset-2"
              >
                Try sample video
              </button>
            </div>
          </div>

          {/* PREVIEW & DOWNLOAD RESOLUTION SECTION */}
          {videoId ? (
            <div className="mt-8 pt-8 border-t border-zinc-200">
              {/* Image Preview Box */}
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Live Preview</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-100 text-red-700">
                      {selectedQuality.toUpperCase()} Quality
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyLink(currentPreviewUrl)}
                    className="text-xs font-semibold text-zinc-600 hover:text-red-600 flex items-center gap-1 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    {copiedUrl === currentPreviewUrl ? "Copied!" : "Copy Image URL"}
                  </button>
                </div>

                {/* Aspect ratio frame */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200 shadow-lg group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentPreviewUrl}
                    alt="YouTube Video Thumbnail Preview"
                    onError={() => setPreviewError(true)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    {previewError ? "480 × 360 (HQ Fallback)" : selectedQuality === "max" ? "1280 × 720 (HD)" : selectedQuality.toUpperCase()}
                  </div>
                </div>

                {/* Quick 1-Click Primary Download CTA */}
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      handleDownload(
                        `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                        `youtube-thumbnail-hd-${videoId}.jpg`
                      )
                    }
                    disabled={downloadingFormat === `youtube-thumbnail-hd-${videoId}.jpg`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 shadow-lg shadow-red-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>
                      {downloadingFormat === `youtube-thumbnail-hd-${videoId}.jpg`
                        ? "Downloading..."
                        : "Download Highest Resolution (HD JPG)"}
                    </span>
                  </button>

                  <Link
                    href={{
                      pathname: "/preview",
                      query: {
                        images: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                        title: "Downloaded YouTube Video",
                        channelName: "YouTube Creator",
                      },
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-bold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition-all"
                  >
                    <span>Test In Feed</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* ALL RESOLUTIONS GRID */}
              <div className="mt-12">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">Available Resolutions &amp; Formats</h3>
                    <p className="text-zinc-500 text-sm">Choose the exact resolution or format required for your project.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resolutions?.map((res) => (
                    <div
                      key={res.id}
                      onClick={() => setSelectedQuality(res.id as "max" | "sd" | "hq" | "mq")}
                      className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        selectedQuality === res.id
                          ? "border-red-500 bg-red-50/20 shadow-md"
                          : "border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="font-bold text-zinc-900 text-base">{res.title}</h4>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${res.badgeColor}`}>
                            {res.badge}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-2">
                          <span>{res.resolution}</span>
                          <span>•</span>
                          <span>Ratio {res.ratio}</span>
                        </div>
                        <p className="text-xs text-zinc-600 leading-relaxed mb-4">{res.description}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-100">
                        {res.formats.map((fmt) => (
                          <button
                            key={fmt.ext}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownload(fmt.url, fmt.filename);
                            }}
                            disabled={downloadingFormat === fmt.filename}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm disabled:opacity-50"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <span>{downloadingFormat === fmt.filename ? "Saving..." : fmt.label}</span>
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopyLink(res.formats[0].url);
                          }}
                          className="px-2.5 py-2 text-zinc-500 hover:text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-lg text-xs font-medium transition-colors"
                          title="Copy direct image link"
                        >
                          {copiedUrl === res.formats[0].url ? "✓ Copied" : "Copy Link"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-8 p-8 text-center border-2 border-dashed border-zinc-200 rounded-2xl bg-zinc-50/50">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-zinc-800 text-base">Invalid or Missing YouTube URL</h3>
              <p className="text-zinc-500 text-xs sm:text-sm mt-1 max-w-md mx-auto">
                Please paste a valid YouTube video link, such as: <br />
                <code className="text-red-600 bg-white px-2 py-0.5 rounded border border-zinc-200 font-mono text-xs">
                  https://www.youtube.com/watch?v=VIDEO_ID
                </code>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CROSS-PROMOTION BANNER: THUMBNAIL TESTER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto my-12">
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-600/30">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Designing your own YouTube Thumbnail?</h3>
              <p className="text-zinc-400 text-sm mt-1 max-w-xl">
                Simulate how your thumbnail looks in a real YouTube feed alongside trending videos on desktop and mobile before you publish.
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-red-600/25"
          >
            <span>Open Thumbnail Tester</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* HOW TO DOWNLOAD - 3 STEP GUIDE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto my-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            How to Download Any YouTube Thumbnail
          </h2>
          <p className="text-zinc-600 mt-2 text-sm sm:text-base">
            Extract high-definition thumbnails in 3 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 font-extrabold text-lg flex items-center justify-center mb-4">
              1
            </div>
            <h3 className="font-bold text-zinc-900 text-lg mb-2">Copy Video Link</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Open YouTube, navigate to the desired video or Shorts, click the <strong>Share</strong> button, and copy the URL.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 font-extrabold text-lg flex items-center justify-center mb-4">
              2
            </div>
            <h3 className="font-bold text-zinc-900 text-lg mb-2">Paste &amp; Preview</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Paste the link into the box above. Our engine instantly identifies the video ID and generates live previews in all available resolutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 font-extrabold text-lg flex items-center justify-center mb-4">
              3
            </div>
            <h3 className="font-bold text-zinc-900 text-lg mb-2">Download in 1 Click</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Choose your preferred resolution (Ultra HD, SD, HQ, or MQ) and click <strong>Download</strong> to save the JPG or WEBP image to your device.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto my-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 mt-2 text-sm sm:text-base">
            Common questions about downloading YouTube thumbnails.
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
