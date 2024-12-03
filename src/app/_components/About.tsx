"use client";

import SparklesText from "@/components/ui/sparkles-text";
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list";
import { Skeleton } from "@/components/ui/skeleton";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BoxReveal from "@/components/ui/box-reveal";

export default function About() {
  //TODO : add real data
  const reviews = [
    {
      name: "Avi Khandakar",
      review:
        "I really enjoyed working with Toufiq. He is a very talented and dedicated developer.",
    },
    {
      name: "Avi Khandakar",
      review:
        "I really enjoyed working with Toufiq. He is a very talented and dedicated developer.",
    },
    {
      name: "Avi Khandakar",
      review:
        "I really enjoyed working with Toufiq. He is a very talented and dedicated developer.",
    },
    {
      name: "Avi Khandakar",
      review:
        "I really enjoyed working with Toufiq. He is a very talented and dedicated developer.",
    },
    {
      name: "Avi Khandakar",
      review:
        "I really enjoyed working with Toufiq. He is a very talented and dedicated developer.",
    },
  ];

  // getting color
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <section className="w-full relative">
      <Particles
        className="absolute inset-0"
        quantity={30}
        ease={80}
        color={color}
        refresh
      />
      <div className="max-w-7xl mx-auto px-10 py-20 flex items-center">
        <div className="w-2/3">
          <BoxReveal>
            <SparklesText
              sparklesCount={5}
              text="About"
              className="text-5xl font-poppins"
            />
          </BoxReveal>
          <div className="font-nunito text-muted-foreground text-lg">
            <BoxReveal>
              <p className="font-nunito mt-10">
                I’m Toufiq Mowla, a front-end developer with 2 years of hands-on
                experience specializing in <b>Next.js</b>,<b> Tailwind CSS </b>,
                and
                <b> ShadCN UI</b>. I’m passionate about building fast,
                responsive, and visually appealing web applications that provide
                great user experiences. With a focus on clean code and
                performance, I aim to create applications that are both
                efficient and easy to maintain.
              </p>
            </BoxReveal>

            <br />
            <BoxReveal>
              <p>
                I'm committed to continuous learning and always excited to
                embrace new challenges to further develop my skills. Whether
                working on individual projects or collaborating within a team,
                I’m always eager to push my boundaries and deliver high-quality
                results.
              </p>
            </BoxReveal>
            <br />
            <BoxReveal>
              <p>
                Feel free to reach out if you're looking for a dedicated
                developer or if you’d like to collaborate on exciting web
                projects!
              </p>
            </BoxReveal>
          </div>
        </div>
        <div className="w-1/3 relative flex h-[500px] flex-col p-6 overflow-hidden rounded-lg bg-background">
          <AnimatedList>
            {reviews.map((review, index) => (
              <AnimatedListItem key={index}>
                <div className="border h-20 rounded-xl p-3 flex items-center justify-start gap-3">
                  <div>
                    <Skeleton className="w-12 h-12 rounded-full bg-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-poppins">
                      {review.name}
                    </h3>
                    <p className="text-xs line-clamp-2 font-nunito text-muted-foreground">
                      {review.review}
                    </p>
                  </div>
                </div>
              </AnimatedListItem>
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}
