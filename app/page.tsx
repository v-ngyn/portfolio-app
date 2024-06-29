import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Link from "next/link";

export default function Home() {
  const words = ["  determined.", "  passionate.", "  curious.", "  creative.", "  perseverant."];
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
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
        <p className="relative items-center drop-shadow font-bold pt-5 text-3xl text-center md:text-4xl lg:text-7xl mix-blend-overlay text-white">
          Hello, I am Vuanh.
        </p>
        <p className="relative items-center drop-shadow font-bold pt-2 text-2xl text-center md:text-3xl lg:text-4xl mix-blend-overlay text-white">
          Software Developer
        </p>
        <div className="relative items-center drop-shadow font-bold p-10 text-white text-center text-3xl md:text-4xl lg:text-8xl">
          I am <br />
          <FlipWords words={words} />
        </div>
      </header>

      <main>
        {/* Scrolling Logos */}
        <div className="relative ml-auto mr-auto backdrop-blur-3xl rounded-2xl border border-white/[0.2] border-black/[0.1] w-3/4 h-auto rounded-xl h-[30rem] rounded-md flex flex-col items-center justify-center overflow-hidden">
          <InfiniteMovingCards items={testimonials} />
        </div>

        {/* 3D Cards */}
        <div className="flex justify-evenly items-center p-4">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 group/card  dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                Title
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Body text that I can type some cool stuff in.
              </CardItem>
              <div className="flex justify-between items-center mt-20">

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Check me out!
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>


          <CardContainer className="inter-var">
            <CardBody className="group/card  dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                Title
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Body text that I can type some cool stuff in.
              </CardItem>
              <div className="flex justify-between items-center mt-20">

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Check me out!
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 group/card  dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                Title
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Body text that I can type some cool stuff in.
              </CardItem>
              <div className="flex justify-between items-center mt-20">

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Check me out!
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </main>
      <footer>

      </footer>
    </body>
  );
}