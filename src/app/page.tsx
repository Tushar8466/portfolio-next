"use client";
import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import BubbleMenu from "@/components/BubbleMenu";

export default function page() {

  return (
    <div style={{ overflowY: "scroll", height: "100vh" }}>
      
      <HeroSection />
    </div>
  );
}
