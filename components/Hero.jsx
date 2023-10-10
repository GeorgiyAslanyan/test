import React from "react";
import "./Embla.css";
import EmblaCarousel from "./EmblaCarousel";

const Hero = ({heroData}) => {
  const OPTIONS = { containScroll: "trimSnaps", loop: true };
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="min-h-screen w-full flex justify-center items-center relative">
      <div className="max-w-[900px] fhd:max-w-[1300px] text-center flex flex-col gap-6 z-30 ">
        <h1 className="text-4xl md:text-7xl fhd:text-[8.5rem] font-medium">
          {heroData.data[0] ?? null} <br /> {heroData.data[1] ?? null}
        </h1>
        <p className="text-[14px] md:text-[20px] fhd:text-[30px] text-gray-200">
        {heroData.data[2] ?? null}{" "}
          <br className="hidden md:block"/> {heroData.data[3] ?? null}
        </p>
      </div>
      <div className="absolute w-full h-screen top-0 left-0 z-10">
        <section className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
      </div>
    </div>
  );
};

export default Hero;
