import BoxReveal from "@/components/ui/box-reveal";
import SparklesText from "@/components/ui/sparkles-text";
import { Card } from "@/components/ui/card";
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
    <section className="w-full" id="contact">
      <div className="max-w-7xl mx-auto sm:px-10 px-5 py-20">
        <div>
          <BoxReveal>
            <SparklesText
              sparklesCount={5}
              text="Contact"
              className="sm:text-5xl text-3xl font-poppins"
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
          <div className="relative p-5 w-1/2 lg:block hidden">
            <IconCloud iconSlugs={slugs} />
          </div>
          <div className="lg:w-1/2 w-full">
            <ContactForm />
          </div>
        </Card>
      </div>
    </section>
  );
}
