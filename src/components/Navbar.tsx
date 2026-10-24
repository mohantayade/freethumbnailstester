"use client";

import { useState } from "react";
import logo from "../assets/icon.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/thumbnail-downloader", label: "Thumbnail Downloader" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-2 z-50 px-3 sm:px-6 max-w-6xl mx-auto">
      <nav className="h-16 rounded-2xl bg-[#FF1616] text-white flex items-center justify-between px-5 shadow-lg shadow-red-600/20 backdrop-blur-md">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-black text-base sm:text-lg tracking-tight hover:opacity-95 transition-opacity"
        >
          <div className="w-9 h-9 rounded-xl bg-white/10 p-1 flex items-center justify-center backdrop-blur-sm border border-white/20">
            <Image alt="Free Thumbnails Tester logo" src={logo} width={28} height={28} />
          </div>
          <span>Free Thumbnails Tester</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 font-semibold text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  isActive
                    ? "bg-white text-red-600 font-bold shadow-sm"
                    : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors text-white"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#FF1616] border border-white/20 rounded-2xl p-4 shadow-xl text-white">
          <ul className="flex flex-col gap-1 font-semibold text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl transition-colors ${
                      isActive
                        ? "bg-white text-red-600 font-bold"
                        : "hover:bg-white/15 text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 mt-2 border-t border-white/20 flex flex-col gap-1 text-xs text-white/80">
              <Link
                href="/privacy-policy"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 hover:bg-white/10 rounded-lg"
              >
                Privacy Policy
              </Link>
              <Link
                href="/term-and-conditions"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 hover:bg-white/10 rounded-lg"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
