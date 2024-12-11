"use client";

import SparklesText from "@/components/ui/sparkles-text";
import { Spotlight } from "@/components/motion-ui/spotlight";
import { Tilt } from "@/components/motion-ui/tilt";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { MagicCard } from "@/components/ui/magic-card";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "@/components/motion-ui/dialog";

import bhaktiOne from "@/assets/bhakti-1.png";
import bhaktiTwo from "@/assets/bhakti-2.png";
import bhaktiThree from "@/assets/bhakti-3.png";
import bhaktiFour from "@/assets/bhakti-4.png";

import webneticOne from "@/assets/web-1.png";
import webneticTwo from "@/assets/web-2.png";
import webneticThree from "@/assets/web-3.png";
import webneticFour from "@/assets/web-4.png";

import mfsusaOne from "@/assets/mfs-1.png";
import mfsusaTwo from "@/assets/mfs-2.png";
import mfsusaThree from "@/assets/mfs-3.png";
import mfsusaFour from "@/assets/mfs-4.png";

import quaxOne from "@/assets/quax-1.png";
import quaxTwo from "@/assets/quax-2.png";
import quaxThree from "@/assets/quax-3.png";
import quaxFour from "@/assets/quax-4.png";

import kinderOne from "@/assets/kinder-1.png";
import kinderTwo from "@/assets/kinder-2.png";
import kinderThree from "@/assets/kinder-3.png";
import kinderFour from "@/assets/kinder-4.png";

import dashOne from "@/assets/admini-1.png";
import dashTwo from "@/assets/admini-2.png";

import movieOne from "@/assets/ms-1.png";
import movieTwo from "@/assets/ms-1.png";
import movieThree from "@/assets/ms-1.png";
import movieFour from "@/assets/ms-1.png";

import spaceOne from "@/assets/space-1.png";
import spaceTwo from "@/assets/space-2.png";
import spaceThree from "@/assets/space-3.png";
import spaceFour from "@/assets/space-4.png";

import Particles from "@/components/ui/particles";
import { SquareArrowOutUpRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import BoxReveal from "@/components/ui/box-reveal";
import { SVGProps } from "react";
import { Cursor } from "@/components/ui/cursor";

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={31}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill={"currentColor"}
          fillRule="evenodd"
          stroke={"#fff"}
          strokeLinecap="square"
          strokeWidth={2}
          d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={"currentColor"} d="M0 0h26v31H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Bhakti",
      href: "https://bhakti.com.sg/en",
      images: [bhaktiOne, bhaktiTwo, bhaktiThree, bhaktiFour],
      des: "Bhakti is a devotee portal website built with Next.js, Tailwind CSS, and ShadcnUI. It features a responsive design, a custom theme, and a fully functional devotee portal. The website also includes a social, e-pooja and e-commerce page.",
    },
    {
      id: 2,
      name: "Webnetic",
      href: "https://webnetic.sk/ja-JP",
      images: [webneticOne, webneticTwo, webneticThree, webneticFour],
      des: "Webnetic is a website that I translated from Japanese to English using next-i18next. It is a company website that provides web development services. The website is built with Next.js and Tailwind CSS. I used next-i18next to generate a description for the website.",
    },
    {
      id: 3,
      name: "MFSUSA",
      href: "https://www.mfsusa.org/",
      images: [mfsusaOne, mfsusaTwo, mfsusaThree, mfsusaFour],
      des: "MFSUSA is a non-profit organization website built with modern web technologies. It features a responsive design, user-friendly navigation, and provides comprehensive information about their services and initiatives.",
    },
    {
      id: 4,
      name: "Kinder World",
      href: "https://kinder-world-react.vercel.app/",
      images: [kinderOne, kinderTwo, kinderThree, kinderFour],
      des: "Kinder World is an optimized themeforest template. It container 3 homepage and 10+ inner pages. Kinder World react is built with latest version of next js and tailwind css. It also have some cool looking animation with which is made possible by framer motion.",
    },
    {
      id: 5,
      name: "Moviestar",
      href: "https://movistar-react.vercel.app/",
      images: [movieOne, movieTwo, movieThree, movieFour],
      des: "Moviestar React is an optimized themeforest template. It container 3 homepage and 90+ inner pages. Moviestar React is built with latest version of next js and tailwind css. It also have some cool looking animation with which is made possible by framer motion.",
    },
    {
      id: 6,
      name: "React Dashboard",
      href: "https://adminify-react.vercel.app/",
      images: [dashOne, dashTwo],
      des: "Adminify React is an optimized themeforest template. It container 3 homepage and 90+ inner pages. Adminify React is built with latest version of next js and tailwind css. It also have some cool looking animation with which is made possible by framer motion.",
    },
    {
      id: 7,
      name: "Quax React",
      href: "https://quax-psi.vercel.app/",
      images: [quaxOne, quaxTwo, quaxThree, quaxFour],
      des: "Quax Raect is an optimized themeforest template. It container 3 homepage and 10+ inner pages. Quax react is built with latest version of next js and tailwind css. It also have some cool looking animation with which is made possible by framer motion.",
    },
    {
      id: 8,
      name: "Space (Demo)",
      href: "https://nasa-space-website-react.netlify.app/",
      images: [spaceOne, spaceTwo, spaceThree, spaceFour],
      des: "A multipage space tourism website. Contact me to get a ticket to Mars.",
    },
    // {
    //   id: 9,
    //   name: "Go Remote (Demo)",
    //   href: "https://toufiq005.github.io/go-remote-fem/",
    //   images: [snap],
    //   des: "Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.",
    // },
  ];

  const { theme } = useTheme();

  const [showMore, setShowMore] = useState(false);

  const projectData = showMore ? projects : projects.slice(0, 4);

  // getting color
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <section className="w-full relative  overflow-hidden" id="project">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className="max-w-7xl mx-auto sm:px-10 px-5 py-20 flex flex-col items-center justify-center">
        <div className="flex items-center justify-between">
          <div className="lg:w-2/3 w-full">
            <BoxReveal>
              <SparklesText
                sparklesCount={5}
                text="Projects"
                className="sm:ext-5xl text-3xl font-poppins"
              />
            </BoxReveal>
            <BoxReveal>
              <p className="font-nunito mt-5">
                Explore some of the awesome projects I have created over the
                years, using a variety of different technologies and tools. From
                simple web pages to complex web applications.
              </p>
            </BoxReveal>
          </div>
          
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-7 gap-y-16 mt-20">
          {projectData.map((project, i) => (
            <Dialog
              transition={{
                type: "spring",
                bounce: 0.05,
                duration: 0.25,
              }}
              key={i}
            >
              <DialogTrigger className="relative">
                <Cursor
                  attachToParent
                  variants={{
                    initial: { scale: 0.3, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    exit: { scale: 0.3, opacity: 0 },
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.15,
                  }}
                  className='left-12 top-4'
                >
                  <div>
                    <MouseIcon className="h-6 w-6 text-primary" />
                    <div className="ml-4 mt-1 rounded-[4px] bg-primary px-2 py-0.5 text-neutral-50">
                      Click to Explore
                    </div>
                  </div>
                </Cursor>
                <Tilt
                  rotationFactor={6}
                  isRevese
                  style={{
                    transformOrigin: "center center",
                  }}
                  springOptions={{
                    stiffness: 26.7,
                    damping: 4.1,
                    mass: 0.2,
                  }}
                  className="group relative rounded-lg"
                >
                  <Spotlight
                    className="z-10 from-white/50 via-white/20 to-white/10 blur-2xl"
                    size={248}
                    springOptions={{
                      stiffness: 26.7,
                      damping: 4.1,
                      mass: 0.2,
                    }}
                  />
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    className="border rounded-xl border-black dark:border-white"
                  />
                </Tilt>
                <div className="flex items-center justify-between gap-5">
                  <BoxReveal>
                    <DialogTitle className="mt-3 font-poppins text-3xl font-semibold text-nowrap">
                      {project.name}
                      <span className="text-5xl text-primary">.</span>
                    </DialogTitle>
                  </BoxReveal>
                  {/* <Separator className="max-w-xs" /> */}
                  <div>
                    <SquareArrowOutUpRight />
                  </div>
                </div>
                <BoxReveal>
                  <DialogDescription className="font-nunito mt-3 line-clamp-2">
                    {project.des}
                  </DialogDescription>
                </BoxReveal>
                <RainbowButton className="mt-10 font-poppins font-semibold hover:bg-primary hover:cursor-none">
                  Open
                </RainbowButton>
              </DialogTrigger>
              <DialogContainer>
                <DialogContent
                  style={{
                    borderRadius: "24px",
                  }}
                  className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-1/2 "
                >
                  <ScrollArea className="h-[70vh] overflow-hidden">
                    <Carousel
                      plugins={[
                        Autoplay({
                          delay: 2000,
                        }),
                      ]}
                    >
                      <CarouselContent>
                        {project.images.map((image, i) => (
                          <CarouselItem key={i}>
                            <Image src={image} alt={project.name} />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-500/50 text-zinc-50 hover:bg-slate-500" />
                      <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-500/50 text-zinc-50 hover:bg-slate-500" />
                    </Carousel>
                    <MagicCard
                      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                      className="p-6 rounded-t-none"
                    >
                      <DialogTitle className="mt-b font-poppins sm:text-3xl text-2xl font-semibold text-nowrap">
                        {project.name}
                        <span className="text-5xl text-primary">.</span>
                      </DialogTitle>
                      <DialogDescription className="text-zinc-700 dark:text-zinc-400 font-nunito mt-7">
                        {project.des}
                      </DialogDescription>
                      <RainbowButton className="mt-10 font-poppins font-semibold hover:bg-primary">
                        <Link
                          href={project.href}
                          target="_blank"
                          className="flex gap-2 items-center"
                        >
                          Live Preview <SquareArrowOutUpRight size={18} />
                        </Link>
                      </RainbowButton>
                    </MagicCard>
                    <DialogClose className="text-zinc-50 p-3 rounded-full bg-slate-500/50" />
                  </ScrollArea>
                </DialogContent>
              </DialogContainer>
            </Dialog>
          ))}
        </div>
        <div className="mx-auto">
          <Button
            onClick={() => setShowMore(!showMore)}
            variant="link"
            className="font-poppins font-semibold hover:bg-transparent rounded-full mt-10 mx-auto text-lg text-primary"
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
        </div>
      </div>
    </section>
  );
}
