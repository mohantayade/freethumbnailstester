import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Free YouTube Thumbnail Tester",
  description:
    "Learn about our privacy practices, client-side thumbnail processing, and how we protect your information at Free Thumbnails Tester.",
  alternates: {
    canonical: "https://freethumbnailstester.vercel.app/privacy-policy",
  },
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50 text-zinc-900 pb-16">
      {/* BREADCRUMB */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ol className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 font-medium">
          <li>
            <Link href="/" className="hover:text-red-600 transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-zinc-800 font-semibold">Privacy Policy</li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-3xl border border-zinc-200/80 shadow-sm p-6 sm:p-12">
          {/* HEADER */}
          <div className="border-b border-zinc-200 pb-8 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
              Legal &amp; Trust
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mt-3">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 mt-2">
              Last updated: May 11, 2024
            </p>
          </div>

          {/* PRIVACY AT A GLANCE CALLOUT */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 mb-10">
            <h2 className="text-base font-bold text-zinc-900 flex items-center gap-2 mb-3">
              <span>🔒</span> Privacy at a Glance (Key Highlights)
            </h2>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                <strong>No Thumbnail Image Storage:</strong> Any thumbnail image you test is rendered locally in your web browser using HTML5 client-side APIs. Your images are <strong>never</strong> uploaded, transferred, or stored on our servers.
              </li>
              <li>
                <strong>No User Accounts Required:</strong> You do not need to provide your name, password, or credit card to test or download thumbnails.
              </li>
              <li>
                <strong>Standard Analytics &amp; Advertising:</strong> We use Google Analytics and Google AdSense to understand website traffic and keep the tools 100% free.
              </li>
            </ul>
          </div>

          {/* LEGAL SECTIONS */}
          <div className="space-y-8 text-zinc-700 leading-relaxed text-sm sm:text-base">
            <section className="space-y-3">
              <p>
                This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <p>
                We use Your data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                1. Interpretation and Definitions
              </h2>
              <h3 className="text-base font-bold text-zinc-800">Definitions</h3>
              <p>For the purposes of this Privacy Policy:</p>
              <ul className="space-y-2.5 list-disc list-inside pl-2">
                <li>
                  <strong>Company</strong> (referred to as either &ldquo;the Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo;) refers to Free Thumbnails Tester.
                </li>
                <li>
                  <strong>Cookies</strong> are small files placed on Your device by a website containing details of browsing preferences.
                </li>
                <li>
                  <strong>Device</strong> means any device that can access the Service such as a computer, smartphone, or digital tablet.
                </li>
                <li>
                  <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
                </li>
                <li>
                  <strong>Service</strong> refers to the Free Thumbnails Tester website.
                </li>
                <li>
                  <strong>Usage Data</strong> refers to data collected automatically, such as IP address, browser type, browser version, page visits, time spent, and other diagnostic data.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                2. Collecting and Using Your Data
              </h2>
              <h3 className="text-base font-bold text-zinc-800">Types of Data Collected</h3>
              <p>
                <strong>Usage Data:</strong> Usage Data is collected automatically when using the Service. It may include information such as Your Device&apos;s Internet Protocol address (IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, and diagnostic data.
              </p>
              <h3 className="text-base font-bold text-zinc-800">Tracking Technologies and Cookies</h3>
              <p>
                We use Cookies and similar tracking technologies to track activity on Our Service and store certain information. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, some features may function with minor limitations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                3. Third-Party Service Providers &amp; Advertising
              </h2>
              <p>
                We may employ third-party service providers to facilitate our Service, provide analysis, or serve advertisements:
              </p>
              <ul className="space-y-2 list-disc list-inside pl-2">
                <li>
                  <strong>Google Analytics:</strong> We use Google Analytics to monitor and analyze the use of our Service. Google&apos;s privacy practices can be reviewed in their Privacy Policy.
                </li>
                <li>
                  <strong>Google AdSense:</strong> Google, as a third-party vendor, uses cookies to serve ads on our site. Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                4. Children&apos;s Privacy
              </h2>
              <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                5. Links to Other Websites
              </h2>
              <p>
                Our Service may contain links to external sites (such as YouTube or font repositories) that are not operated by Us. We strongly advise You to review the Privacy Policy of every site You visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of third-party sites.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                6. Changes to this Privacy Policy
              </h2>
              <p>
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date at the top.
              </p>
            </section>

            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, You can contact us:
              </p>
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 inline-block font-mono text-sm text-zinc-800">
                Email:{" "}
                <a
                  href="mailto:mohanpixels@gmail.com"
                  className="text-red-600 hover:underline font-bold"
                >
                  mohanpixels@gmail.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
