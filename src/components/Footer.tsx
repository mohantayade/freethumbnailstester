import React from "react";
import Link from "next/link";
import logo from "../assets/icon.png";
import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-300 mt-16 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center overflow-hidden shadow-lg shadow-red-600/30">
                <Image alt="logo" src={logo} width={28} height={28} />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Free Thumbnails Tester
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              The free, browser-based YouTube CTR optimization suite. Test your thumbnails and titles in real simulated feeds on mobile and desktop before going live.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              100% Free &amp; Private • Runs directly in your browser
            </div>
          </div>

          {/* Quick Tools */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Creator Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Thumbnail Tester</span>
                  <span className="text-[10px] font-bold uppercase bg-red-600/20 text-red-400 px-1.5 py-0.5 rounded">
                    Popular
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/thumbnail-downloader"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Thumbnail Downloader
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Creator Blog &amp; Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Company / Legal */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Resources &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/term-and-conditions"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Free Thumbnail Tester. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Not affiliated with or endorsed by YouTube or Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
