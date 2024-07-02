import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Link from "next/link";
import Image from "next/image";
import { px } from "framer-motion";

export default function Home() {
  const words = ["determination", "passion", "curiousity", "creativity", "perseverance"];

  const langLogos = [
    {
      src: "/java.svg",
      name: "Java",
    },
    {
      src: "/python.svg",
      name: "Python",
    },
    {
      src: "/csharp.svg",
      name: "C#",
    },
    {
      src: "/javascript.svg",
      name: "JavaScript",
    },
    {
      src: "/TypeScript.svg",
      name: "TypeScript",
    },
  ];

  return (
    <body>
      {/* Background Gradient */}
      <div className="fixed">
        <BackgroundGradientAnimation />
      </div>

      {/* Hero Heading */}
      <header>
        <div className="relative items-center drop-shadow font-bold text-center text-white">
          <p className="pt-14 text-3xl md:text-4xl lg:text-7xl">
            Hello, I am Vuanh.
          </p>
          <p className="pt-2 text-2xl md:text-3xl lg:text-4xl">
            Software Developer
          </p>
        </div>
        <div className="relative m-32 items-center drop-shadow font-bold p-10 text-white text-center text-3xl md:text-4xl lg:text-8xl mix-blend-overlay">
          Innovation starts with <br />
          <FlipWords words={words} />
        </div>
      </header>

      <main>
        {/* Biographic Summary */}
        <div className="p-14 m-5 relative bg-black bg-opacity-30 ml-auto mr-auto rounded-2xl backdrop-blur-3xl border border-white/[0.2] border-black/[0.1] w-3/4 h-auto rounded-xl h-[30rem] flex flex-row justify-between">
          <p>
            <b>About</b> <br />
            <br />
            Hello! My name is Vuanh Nguyen and I am an aspiring Software Developer.
          </p>
          <Image 
            src={"/profileimg.jpg"}
            alt="Shibuya, Japan"
            width={400}
            height={600} />
        </div>

        {/* Scrolling Logos */}
        <div className="relative ml-auto mr-auto rounded-2xl backdrop-blur-3xl border border-white/[0.2] border-black/[0.1] w-3/4 h-auto rounded-xl h-[30rem] flex flex-col items-center justify-center overflow-hidden">
          <p className="text-2xl font-bold drop-shadow p-4">
            Preferred Programming Languages
          </p>
          <InfiniteMovingCards items={langLogos} />
        </div>

        {/* 3D Cards */}
        <div className="m-5 relative ml-auto mr-auto rounded-2xl backdrop-blur-3xl border border-white/[0.2] border-black/[0.1] w-3/4 rounded-xl flex flex-col justify-center">
          <p className="text-center text-2xl font-bold drop-shadow p-4">
            Notable Projects
          </p>
          <div className="flex flex-row justify-evenly">
            <CardContainer className="inter-var">
              <CardBody className="group/card backdrop-blur-3xl hover:shadow-2xl bg-black bg-opacity-50 border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 text-white">
                  Title
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300">
                  Body text that I can type some cool stuff in.
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black bg-white text-black text-black text-xs font-bold">
                    Check me out!
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
              <CardBody className="group/card backdrop-blur-3xl hover:shadow-2xl bg-black bg-opacity-50 border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 text-white">
                  Title
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300">
                  Body text that I can type some cool stuff in.
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black bg-white text-black text-black text-xs font-bold">
                    Check me out!
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
              <CardBody className="backdrop-blur-3xl group/card hover:shadow-2xl bg-black bg-opacity-50 border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 text-white">
                  Title
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300">
                  Body text that I can type some cool stuff in.
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black bg-white text-black text-black text-xs font-bold">
                    Check me out!
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </body>
  );
}