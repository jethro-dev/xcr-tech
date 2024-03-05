"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

type Props = {};

const logos = [
  {
    title: "LIVR Studios",
    image: "livr-logo.webp",
  },
  {
    title: "AVIGNON",
    image: "AVIGNON.png",
  },
  {
    title: "AWS",
    image: "AWS.png",
  },
  {
    title: "Besa",
    image: "besa.png",
  },
  {
    title: "BVLGARI",
    image: "BVLGARI.png",
  },
  {
    title: "Catapult Digital",
    image: "CATAPULT_Digital.png",
  },
  {
    title: "Department For International Trade",
    image: "Department_for_International_Trade4.png",
  },

  {
    title: "Intel",
    image: "Intel.png",
  },
  {
    title: "London & Partners",
    image: "London_Partners.png",
  },
  {
    title: "Metropolitan Police",
    image: "Metropolitan_Police.png",
  },
  {
    title: "NatWest",
    image: "NatWest.png",
  },
  {
    title: "Nvidia",
    image: "NVIDIA.png",
  },
  {
    title: "Oculus",
    image: "oculus.png",
  },
  {
    title: "Shangri-la Hotels & Resorts",
    image: "Shangrila.png",
  },

  {
    title: "UKRI UK",
    image: "Innovate_UK.png",
  },
  {
    title: "University of Essex",
    image: "University_of_Essex.png",
  },
  {
    title: "Department For Education",
    image: "Department_for_education.png",
  },
];

export const LogoCarousel = (props: Props) => {
  return (
    <Carousel
      opts={{
        loop: true,
        duration: 20,
        watchDrag: false,
      }}
      plugins={[
        AutoScroll({
          startDelay: 0,
          speed: 0.5,
        }),
      ]}
    >
      <CarouselContent className="h-[60px] -ml-10 pointer-events-none select-none">
        {logos.map((logo, i) => (
          <CarouselItem key={i} className="basis-[15%] pl-10">
            <div className="h-full relative">
              <Image
                src={`/images/logo/${logo.image}`}
                alt={logo.title}
                fill
                priority
                className="object-contain object-center"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
