"use client";
import PixelSnow from "@/components/PixelSnow";
import CardNav from "@/components/CardNav";
import Shuffle from "@/components/Shuffle";

function page() {
  const items = [
    {
      label: "About",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        {
          label: "Company",
          href: "/about/company",
          ariaLabel: "About Company",
        },
        {
          label: "Careers",
          href: "/about/careers",
          ariaLabel: "About Careers",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        {
          label: "Featured",
          href: "/projects/featured",
          ariaLabel: "Featured Projects",
        },
        {
          label: "Case Studies",
          href: "/projects/case-studies",
          ariaLabel: "Project Case Studies",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Email", href: "/contact/email", ariaLabel: "Email us" },
      ],
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <PixelSnow
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={200}
          speed={1.25}
          density={0.3}
          direction={125}
          brightness={1}
          depthFade={8}
          farPlane={20}
          gamma={0.4545}
          variant="square"
        />
      </div>
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20 }}
      >
        <CardNav
          logo=""
          logoAlt="Tushar Singla"
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      </div>

      <div
        style={{ position: "absolute", inset: 0, zIndex: 10 }}
        className="flex flex-col items-center justify-center gap-6"
      >
        <Shuffle
          text="Hi, My name is Tushar Singla"
          tag="h1"
          className="text-center"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "3rem",
            color: "#a855f7",
          }}
          shuffleDirection="down"
          duration={0.8}
          shuffleTimes={8}
        />
        <Shuffle
          text="Full Stack Developer"
          tag="p"
          className="text-center"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "1.5rem",
            color: "#ffffff",
            marginTop: '25px'
          }}
          shuffleDirection="up"
          duration={0.6}
          shuffleTimes={6}
        />
        <button
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "1rem",
            border: "2px solid #a855f7",
            color: "#a855f7",
            padding: "20px 30px",
            background: "transparent",
            cursor: "pointer",
            marginTop: "30px"
          }}
        >
          View My Work
        </button>
      </div>
    </div>
  );
}

export default page;
