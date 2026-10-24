import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Free YouTube Thumbnail Tester",
  description:
    "Read the terms and conditions governing the use of the Free Thumbnails Tester website and services.",
  alternates: {
    canonical: "https://freethumbnailstester.vercel.app/term-and-conditions",
  },
};

export default function TermsAndConditions() {
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
          <li className="text-zinc-800 font-semibold">Terms and Conditions</li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-3xl border border-zinc-200/80 shadow-sm p-6 sm:p-12">
          {/* HEADER */}
          <div className="border-b border-zinc-200 pb-8 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
              Legal Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mt-3">
              Terms and Conditions
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 mt-2">
              Last updated: May 11, 2024
            </p>
          </div>

          {/* KEY POINTS HIGHLIGHT BOX */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 mb-10">
            <h2 className="text-base font-bold text-zinc-900 flex items-center gap-2 mb-3">
              <span>⚖️</span> Key Summary of Terms
            </h2>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed list-disc list-inside">
              <li>
                <strong>Independent Utility:</strong> Free Thumbnails Tester is an independent web utility and is not affiliated with, endorsed by, or partnered with YouTube or Google LLC.
              </li>
              <li>
                <strong>Fair Use &amp; Intellectual Property:</strong> Thumbnails downloaded from YouTube belong to their respective creators and copyright owners. You agree to use downloaded assets strictly in compliance with applicable copyright and fair use laws.
              </li>
              <li>
                <strong>Free &amp; Provided As-Is:</strong> All tools are provided free of charge on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind.
              </li>
            </ul>
          </div>

          {/* LEGAL SECTIONS */}
          <div className="space-y-8 text-zinc-700 leading-relaxed text-sm sm:text-base">
            <section className="space-y-3">
              <p>
                Please read these terms and conditions carefully before using Our Service. These Terms and Conditions govern the use of this Service and the agreement that operates between You and the Company.
              </p>
              <p>
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms. By accessing or using the Service You agree to be bound by these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                1. Interpretation and Definitions
              </h2>
              <ul className="space-y-2.5 list-disc list-inside pl-2">
                <li>
                  <strong>Company</strong> (referred to as &ldquo;the Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo;) refers to Free Thumbnails Tester.
                </li>
                <li>
                  <strong>Country</strong> refers to: Maharashtra, India.
                </li>
                <li>
                  <strong>Device</strong> means any computer, cellphone, tablet, or device that can access the Service.
                </li>
                <li>
                  <strong>Service</strong> refers to the Website.
                </li>
                <li>
                  <strong>Website</strong> refers to Free Thumbnails Tester, accessible from{" "}
                  <Link
                    href="/"
                    className="text-red-600 hover:underline font-semibold"
                  >
                    https://freethumbnailstester.vercel.app
                  </Link>
                  .
                </li>
                <li>
                  <strong>You</strong> means the individual accessing or using the Service, or legal entity on behalf of which such individual is accessing the Service.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                2. Use of Service &amp; User Conduct
              </h2>
              <p>
                You agree to use the Service only for lawful purposes. You agree not to:
              </p>
              <ul className="space-y-2 list-disc list-inside pl-2">
                <li>Attempt to decompile, reverse engineer, or disrupt the operation of the website.</li>
                <li>Use automated bots or scrapers in an abusive manner that strains our infrastructure.</li>
                <li>Use the service to download copyrighted material for unauthorized commercial redistribution.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                3. Third-Party Links &amp; Content
              </h2>
              <p>
                Our Service displays YouTube content and may contain links to third-party web sites or services that are not owned or controlled by Free Thumbnails Tester.
              </p>
              <p>
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused by use of any such content.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                4. &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; Disclaimer
              </h2>
              <p>
                The Service is provided to You &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory, or otherwise.
              </p>
              <p>
                Without limitation, the Company makes no representation that the Service will meet Your specific requirements, achieve intended click-through results, operate without interruption, or be completely error-free.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                5. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall the Company or its creators be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data, or business interruption) arising out of or in connection with the use of the Service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                6. Governing Law &amp; Severability
              </h2>
              <p>
                The laws of Maharashtra, India, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.
              </p>
              <p>
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                7. Changes to These Terms
              </h2>
              <p>
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. By continuing to access or use Our Service after revisions become effective, You agree to be bound by the revised terms.
              </p>
            </section>

            <section className="space-y-3 pt-2">
              <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms and Conditions, You can contact us:
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
