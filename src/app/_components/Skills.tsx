"use client";

import IconCloud from "@/components/ui/icon-cloud";
import SparklesText from "@/components/ui/sparkles-text";
import Meteors from "@/components/ui/meteors";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BoxReveal from "@/components/ui/box-reveal";

export default function Skills() {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "vercel",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
    "shadcnui",
    "tailwindcss",
    "framer",
  ];

  // getting color
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <section className="w-full px-10 py-20 relative ">
      <Particles
        className="absolute inset-0"
        quantity={30}
        ease={80}
        color={color}
        refresh
      />
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-center">
        <BoxReveal>
          <SparklesText
            text="Some of my Skills in a Sphere."
            className="font-poppins text-center mb-20"
          />
        </BoxReveal>
        </div>
        <div className="relative">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  );
}
