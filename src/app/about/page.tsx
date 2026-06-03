import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function AboutPage() {
  const data = [
    {
      title: "2026",
      content: (
        <div>
          <p className="mb-4 text-sm font-medium text-neutral-200 md:text-base">
            Mastering the Modern Tech Stack
          </p>
          <p className="mb-6 text-xs text-neutral-400 md:text-sm">
            Deep diving into full-stack architecture and leveraging AI tools to
            accelerate development and solve complex problems.
          </p>
          <ul className="mb-8 space-y-2">
            {[
              "Advanced React & Next.js (App Router, Server Actions)",
              "Scalable Backend with MongoDB & Node.js",
              "AI Integration with Hugging Face & n8n automation",
              "Polished UI/UX with Framer Motion & Tailwind CSS",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm"
              >
                <span className="text-emerald-500">✦</span> {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/2026(1).png"
              alt="React development"
              className="h-20 w-full rounded-lg object-cover md:h-44 hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src="/2026(2).png"
              alt="MongoDB database"
              className="h-20 w-full rounded-lg object-cover md:h-44 hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src="/2026(3).png"
              alt="AI and machine learning"
              className="h-20 w-full rounded-lg object-cover md:h-44 hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src="/2026(4).png"
              alt="Full stack development"
              className="h-20 w-full rounded-lg object-cover md:h-44 hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mid 2025",
      content: (
        <div>
          <p className="mb-4 text-sm font-medium text-neutral-200 md:text-base">
            Growth & Community at Newton School
          </p>
          <p className="mb-6 text-xs text-neutral-400 md:text-sm">
            Transitioned into a structured computer science environment,
            focusing on engineering principles and collaborative development.
          </p>
          <ul className="mb-8 space-y-2">
            {[
              "Joined Newton School of Technology",
              "Active Open Source Contributor on GitHub",
              "Collaborative Team Lead on major projects",
              "Mastery of modern CSS & JS frameworks",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm"
              >
                <span className="text-emerald-500">✦</span> {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/2025(1).jpg"
              alt="University life"
              className="h-20 w-full rounded-lg object-cover md:h-44 hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src="/2025(2).png"
              alt="GitHub contributions"
              className="h-20 w-full rounded-lg object-cover md:h-44 hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src="/2025(3).png"
              alt="Team dev"
              className="h-20 w-full rounded-lg object-cover md:h-44 hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500"
              alt="Tech learning"
              className="h-20 w-full rounded-lg object-cover md:h-44 hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div>
          <p className="mb-4 text-sm font-medium text-neutral-200 md:text-base">
            The Spark of Curiosity
          </p>
          <p className="mb-6 text-xs text-neutral-400 md:text-sm">
            Started as a self-taught developer with a passion for building
            visual experiences.
          </p>
          <ul className="mb-8 space-y-2">
            {[
              "Self-taught HTML, CSS & JavaScript",
              "Built a functional Flipkart UI Clone",
              "Discovered passion for Creative Development",
              "Launched first project live",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm"
              >
                <span className="text-emerald-500">✦</span> {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/2024(1).png"
              alt="Early coding"
              className="h-20 w-full rounded-lg object-cover md:h-44 hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src="/coding.webp"
              alt="Logic building"
              className="h-20 w-full rounded-lg object-cover md:h-44 hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src="/2024(3).png"
              alt="Clone project"
              className="h-20 w-full rounded-lg object-cover md:h-44 hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=500"
              alt="Journey start"
              className="h-20 w-full rounded-lg object-cover md:h-44 hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          About <span className="text-neutral-500">Me.</span>
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          I&apos;m a Full-Stack Developer and engineering student at Newton
          School of Technology. I specialize in building polished user
          interfaces and scalable backend systems, driven by a passion for clean
          code and creative problem-solving.
        </p>
      </div>
      <div className="w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
}
