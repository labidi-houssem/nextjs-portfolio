import { FaDownload, FaLocationArrow } from "react-icons/fa6";
import dynamic from "next/dynamic";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";

const TextGenerateEffect = dynamic(
  () =>
    import("./ui/TextGenerateEffect").then((mod) => ({
      default: mod.TextGenerateEffect,
    })),
  { ssr: false }
);

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] w-full flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center">
            <p className="uppercase tracking-widest text-xs text-center md:text-left text-blue-100 max-w-80">
              Dynamic Web Magic with Next.js
            </p>
            <TextGenerateEffect
              words="Welcome to my Web Development Portofolio!"
              className="text-center md:text-left text-[40px] md:text-5xl lg:text-6xl"
            />
            <p className="text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m Houssem, a passionate Computer Science Engineering
              student from Tunisia. Currently studying at ESPRIT, I&apos;m
              driven by curiosity and a love for building innovative tech
              solutions. I enjoy transforming ideas into impactful web
              applications and always seek new challenges to grow.
            </p>
            <div className="flex flex-row gap-4">
              <a href="/houssem labidi - CV.pdf" download>
                <MagicButton
                  title="Download my CV"
                  icon={<FaDownload />}
                  position="right"
                />
              </a>
              <a href="#about">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center md:justify-end items-center">
            <img
              src="/houssem.jpg"
              alt="Houssem"
              className="w-full max-w-xs md:max-w-sm h-72 md:h-96 object-cover rounded-2xl shadow-lg border-4 border-white dark:border-black-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
