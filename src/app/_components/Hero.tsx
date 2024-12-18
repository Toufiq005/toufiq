

import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from "next/image";
import me from "@/assets/toufiq-mowla.jpg";
import WordRotate from "@/components/ui/word-rotate";
import ShineBorder from "@/components/ui/shine-border";
import RetroGrid from "@/components/ui/retro-grid";
import Meteors from "@/components/ui/meteors";
import BoxReveal from "@/components/ui/box-reveal";


export default function Hero() {

  return (
    <section className="w-full mt-24 relative">
      <Meteors number={10} />
      <RetroGrid />
      <div className="max-w-7xl mx-auto w-full sm:px-10 px-5 py-20 flex lg:flex-row flex-col lg:gap-0 gap-10 lg:items-center items-start justify-between ">
        <div>
          <BoxReveal >
            <h1 className="font-poppins sm:text-4xl text-2xl font-bold mt-3 ">
              <span className="font-poppins sm:text-7xl text-4xl">
                Hey, I am<span className="text-primary"> Toufiq</span>
              </span>
            </h1>
          </BoxReveal>
          <BoxReveal >
          <div className="flex items-center gap-2 uppercase font-medium mt-5 sm:text-3xl text-base">
            <span>I am a</span>
            <WordRotate
              className="text-primary !font-medium"
              words={["Frontend Developer", "Student"]}
            />
          </div>
          </BoxReveal>
          <div className="mt-5">
            <RainbowButton className="px-5 uppercase">
              <Link href="#contact" className="font-poppins font-medium">
                Contact
              </Link>
            </RainbowButton>
          </div>
        </div>
        <ShineBorder
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          borderWidth={3}
          className="rounded-xl relative p-[3px]"
        >
          {/* <BorderBeam borderWidth={3} /> */}
          <Image
            src={me}
            alt="I am too lazy to load"
            width={400}
            className="rounded-[9px]"
          />
        </ShineBorder>
      </div>
    </section>
  );
}
