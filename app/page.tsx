"use client";

import React from "react";
import UnifiedHomepageExperience from "@/components/HeroAlmondAnimation";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-black">
      {/* 3D Almond Frame Animation Pinned Across Entire Homepage */}
      <div className="-mt-20">
        <UnifiedHomepageExperience />
      </div>
    </main>
  );
}
