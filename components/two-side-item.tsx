"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

type Props = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

const TwoSideItem = ({ title, description, image }: Props) => {
  const ref = useRef(null);

  // useScroll hook to get scroll values
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      className={``}
      style={{ opacity: scrollYProgress, scale: scale }}
    >
      <div className="">
        <p className="text-primary font-semibold text-base">Clear your mind</p>
        <h3 className="mt-4 text-foreground font-bold text-4xl">{title}</h3>
        <p className="mt-4 text-muted-foreground font-normal text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default TwoSideItem;
