"use client";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import BubbleMenu from "@/components/BubbleMenu";
import SplashCursor from "@/components/Splashcursor";
import { Cormorant_Garamond } from "next/font/google";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const items = [
  {
    label: "Home",
    href: "/",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "About",
    href: "/about",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "Projects",
    href: "/projects",
    ariaLabel: "Projects",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "Contact",
    href: "/contact",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pressStart.variable} ${vt323.variable}`}
        style={{
          margin: 0,
          padding: 0,
          background: "#000",
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        <BubbleMenu
          logo={
            <span style={{ fontWeight: 700, color: "black" }}>
              Tushar Singla
            </span>
          }
          items={items}
          menuAriaLabel="Toggle navigation"
          menuBg="#ffffff"
          menuContentColor="#111111"
          useFixedPosition={true}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />

        {/* Page content */}
        <div>
          {children}
          <SplashCursor />
        </div>
      </body>
    </html>
  );
}
