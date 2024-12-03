import BoxReveal from "@/components/ui/box-reveal";
import SparklesText from "@/components/ui/sparkles-text";
import Globe from "@/components/ui/globe";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import IconCloud from "@/components/ui/icon-cloud";
import ContactForm from "./ContactForm";

export default function Contact() {
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

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-10 py-20">
        <div>
          <BoxReveal>
            <SparklesText
              sparklesCount={5}
              text="Contact"
              className="text-5xl font-poppins"
            />
          </BoxReveal>
          <BoxReveal>
            <p className="font-nunito mt-3">
              Drop a message and I will send you a cookie 🍪
            </p>
          </BoxReveal>
        </div>
        <Card className="p-5 flex items-center justify-center gap-10 mt-10">
          {/* <Image
            src="/cat.gif"
            width={600}
            height={600}
            alt="cat"
            className="aspect-square w-full rounded-xl"
          /> */}
          <div className="relative p-5 w-1/2">
            <IconCloud iconSlugs={slugs} />
          </div>
          <div className="w-1/2">
            <ContactForm />
          </div>
        </Card>
      </div>
    </section>
  );
}
