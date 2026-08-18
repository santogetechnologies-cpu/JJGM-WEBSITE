"use client";

import React from "react";
import UnifiedHomepageExperience from "@/components/HeroAlmondAnimation";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-black" style={{ margin: '0', padding: '0', lineHeight: '0', paddingTop: '0' }}>
      {/* 3D Almond Frame Animation Pinned Across Entire Homepage */}
      <div className="mt-0" style={{ margin: '0', padding: '0', lineHeight: '0' }}>
        <UnifiedHomepageExperience />
      </div>
    </main>
  );
}
