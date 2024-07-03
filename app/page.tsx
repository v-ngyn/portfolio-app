"use client"

import React, { useEffect } from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'

const words = ["determination", "passion", "curiousity", "creativity", "perseverance"];

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <body>
      {/* Background Gradient */}
      <div className="fixed">
        <BackgroundGradientAnimation />
      </div>

      {/* Hero Heading */}
      <header className="pb-36">
        <div className="subpixel-antialiased relative items-center drop-shadow font-bold text-center text-white">
          <p className="pt-24 text-3xl md:text-4xl lg:text-7xl">
            Hello, I am Vuanh.
          </p>
          <p className="pt-2 text-2xl md:text-3xl lg:text-4xl">
            Software Developer
          </p>
        </div>
        <div
          className="subpixel-antialiased relative m-32 items-center drop-shadow font-bold p-10 text-white text-center text-3xl md:text-4xl lg:text-8xl mix-blend-overlay">
          Innovation starts with <br />
          <FlipWords words={words} />
        </div>
      </header>

      <main>
        {/* Biographical Summary */}
        <div data-aos="fade-up">
          <div className="p-14 m-5 relative bg-black bg-opacity-20 ml-auto mr-auto rounded-2xl backdrop-blur-3xl border border-white/[0.2] border-black/[0.1] w-3/4 h-auto rounded-xl h-[30rem] flex flex-row justify-between">
            <div>
              <p className="text-5xl font-bold">About</p>
              <br /> <br />
              <div className="text-lg tracking-wider">
                <p data-aos="fade-up" data-aos-delay="100">
                  Hello! My name is Vuanh Nguyen and I am an aspiring Software Developer.
                  I am equipped with a Bachelor of Science in Computer Science — complemented
                  by hands-on experience in software application design and development.
                </p> <br />
                <p data-aos="fade-up" data-aos-delay="100">
                  I strive to be a natural problem solver, an eloquent communicator, and a technical expert.
                  I love continuously learning new concepts, building new projects, and working with individuals who share the same aspirations as I do.
                </p> <br />
                <p data-aos="fade-up" data-aos-delay="100">
                  I am highly adaptable, thrive in dynamic environments, and efficient in client-centric solutions.
                  Currently, I am interested in working towards building technical skills surrounding full stack development --
                  seeking to be knowledgeable in topics surrounding cloud databases, modern frontend frameworks, web design, and typography.
                </p> <br />
                <p data-aos="fade-up" data-aos-delay="100">
                  Outside of tech, some of my hobbies include video games, skateboarding, and badminton.
                  <br />
                  If you would like to collaborate on a cool project, or just want to connect in general, please do not hesitate to connect with me!
                </p>
              </div>
            </div>
            <Image
              src={"/profileimg.jpg"}
              alt="Shibuya, Japan"
              width={400}
              height={600}
              className="rounded-3xl"
              data-aos="zoom-out" 
              data-aos-delay="100" />
          </div>
        </div>


        {/* Scrolling Logos */}
        <div data-aos="fade-up">
          <div className="relative bg-black bg-opacity-20 ml-auto mr-auto rounded-2xl backdrop-blur-3xl border border-white/[0.2] border-black/[0.1] w-3/4 h-auto rounded-xl h-[30rem] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-5xl font-bold drop-shadow p-12">
              Tech Stack
            </p>
            <p className="text-lg tracking-wider">
              Preferred Programming Languages
            </p>
            <div
              className="flex flex-row justify-center"
              data-aos="fade-left"
              data-aos-delay="200">
              <Image
                src="/java.svg"
                alt="Java"
                width={150}
                height={150} />
              <Image
                src="/python.svg"
                alt="Python"
                width={150}
                height={150} />
              <Image
                src="/csharp.svg"
                alt="C#"
                width={150}
                height={150} />
              <Image
                src="/javascript.svg"
                alt="JavaScript"
                width={150}
                height={150} />
              <Image
                src="/sql.svg"
                alt="SQL"
                width={120}
                height={120} />
            </div>
            <p className="text-lg tracking-wider pt-2">
              Development Environments
            </p>
            <div
              className="flex flex-row justify-center"
              data-aos="fade-right"
              data-aos-delay="200">
              <Image
                src="/vscode.svg"
                alt="Visual Studio Code"
                width={150}
                height={150} />
              <Image
                src="/visual-studio.svg"
                alt="Visual Studio"
                width={127}
                height={127} />
              <Image
                src="/unity.svg"
                alt="Unity"
                width={130}
                height={130}
                className="pt-5 mx-2" />
              <Image
                src="/mysql.svg"
                alt="MySQL"
                width={180}
                height={180} />
            </div>
            <p className="text-lg tracking-wider pt-2">
              Frontend
            </p>
            <div
              className="flex flex-row justify-center"
              data-aos="fade-left"
              data-aos-delay="200">
              <Image
                src="/next.svg"
                alt="Next.js"
                width={150}
                height={150} />
              <Image
                src="/tailwind.svg"
                alt="Tailwind"
                width={150}
                height={150} />
              <Image
                src="/boostrap.svg"
                alt="Bootstrap"
                width={150}
                height={150} />
            </div>
            <p className="text-lg tracking-wider pt-2">
              Backend
            </p>
            <div
              className="flex flex-row justify-center"
              data-aos="fade-right"
              data-aos-delay="200">
              <Image
                src="/django.svg"
                alt="Django"
                width={150}
                height={150} />
              <Image
                src="/nodejs.svg"
                alt="NodeJS"
                width={150}
                height={150} />
              <Image
                src="/firebase.svg"
                alt="Firebase"
                width={140}
                height={140} />
            </div>
          </div>
        </div>


        {/* 3D Cards */}
        <div data-aos="fade-up">
          <div className="m-5 bg-black bg-opacity-20 relative ml-auto mr-auto rounded-2xl backdrop-blur-3xl border border-white/[0.2] border-black/[0.1] w-3/4 rounded-xl flex flex-col justify-center">
            <p className="text-5xl text-center font-bold drop-shadow p-12">
              Notable Projects
            </p>
            <div 
              className="flex flex-row justify-evenly"
              data-aos="fade-down"
              data-aos-delay="400">
              <CardContainer className="inter-var">
                <CardBody className="group/card hover:shadow-2xl bg-black bg-opacity-50 border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 text-white">
                    Inventory Manager
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="indent-6 text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300">
                    A web application that keeps track of inventory, and equips end users with user authentication, add/remove/edit items, and a dashboard.
                    The main objective of this project was to develop a scalable ERP system that follows REST principles with an easy-to-use UI design.
                    Also provides administrative privileges to manage user accounts and inventory in a larger scope.
                  </CardItem>
                  <CardItem
                    translateZ={100}
                    className="flex flex-row ml-auto mr-auto pt-5">
                    <Image
                      src="/python.svg"
                      alt="Python"
                      width={75}
                      height={75} />
                    <Image
                      src="/django.svg"
                      alt="Django"
                      width={75}
                      height={75} />
                    <Image
                      src="/boostrap.svg"
                      alt="Bootstrap"
                      width={75}
                      height={75} />
                  </CardItem>
                  <div className="flex justify-center mt-10">
                    <CardItem
                      translateZ={30}
                      as="button"
                      className="px-4 py-2 rounded-lg bg-black bg-white text-black text-black text-xs font-bold">
                      <a href="https://github.com/v-ngyn/inventory_management">Check me out!</a>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="group/card hover:shadow-2xl bg-black bg-opacity-50 border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 text-white">
                    BULLETRUN
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="indent-6 text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300">
                    Top-down round-based shooter game features dynamic lighting, hitboxes, in-game mechanics, and player
                    progression handling. This project challenged my creativity and my developer skill to develop a game
                    that upholds my personal standards for fast-paced smooth gameplay, and a difficult, yet achievable, endgame goal.
                    These standards were all met while having a 2-week deadline in mind.
                  </CardItem>
                  <CardItem
                    translateZ={100}
                    className="flex flex-row ml-auto mr-auto pt-5">
                    <Image
                      src="/unity.svg"
                      alt="Unity"
                      width={75}
                      height={75} />
                    <Image
                      src="/csharp.svg"
                      alt="C#"
                      width={75}
                      height={75} />
                  </CardItem>
                  <div className="flex justify-center mt-10">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-lg bg-black bg-white text-black text-black text-xs font-bold">
                      <a href="https://github.com/v-ngyn/bulletrun">Check me out!</a>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>

      </main>
      <footer className="relative tracking-widest text-center p-4">
        © 2024 Vuanh Nguyen
      </footer>
    </body>
  );
}