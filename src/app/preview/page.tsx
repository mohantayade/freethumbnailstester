"use client";

import Youtube from "@/components/Youtube";
import { Suspense } from "react";

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-zinc-950 p-6 flex flex-col items-center justify-center text-white">
      <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-zinc-400 font-semibold text-sm tracking-wide">
        Generating live YouTube feed preview...
      </p>
    </div>
  );
}

export default function Preview() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <Youtube />
    </Suspense>
  );
}
