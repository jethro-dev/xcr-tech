"use client";
import { useInView, InView } from "react-intersection-observer";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import TwoSideItem from "./two-side-item";

type Props = {};

const data = [
  {
    _id: "1",
    title: "The fastest way to get task our of your head.",
    description:
      "Type just about anything into the task field and Todoist's one-of-its-kind natural language recongnition will instantly fill your to-do list.",
    image: "/images/ai.jpg",
  },
  {
    _id: "2",
    title: "The fastest way to get task our of your head.",
    description:
      "Type just about anything into the task field and Todoist's one-of-its-kind natural language recongnition will instantly fill your to-do list.",
    image: "/images/ar.jpg",
  },
  {
    _id: "3",
    title: "The fastest way to get task our of your head.",
    description:
      "Type just about anything into the task field and Todoist's one-of-its-kind natural language recongnition will instantly fill your to-do list.",
    image: "/images/vr.jpeg",
  },
];

export const TwoSideSection = (props: Props) => {
  const [index, setIndex] = useState(0);

  return (
    <section className="dark bg-black py-12 md:py-24 lg:py-32 relative">
      <div className="container max-w-6xl flex gap-32 relative items-start">
        <div className="basis-1/2 pt-40 pb-40 flex flex-col gap-80">
          {data.map((item, i) => (
            <TwoSideItem key={item._id} {...item} />
          ))}
        </div>
        <div className="basis-1/2 border rounded-lg sticky top-[25vh] aspect-square overflow-hidden">
          {data.map((item, i) => (
            <Image
              key={item._id}
              src={item.image}
              alt="Image"
              fill
              className={`object-center object-cover transition-opacity ${
                index === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
