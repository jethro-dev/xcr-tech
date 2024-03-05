import Image from "next/image";
import React from "react";

type Props = {};

const cards = [
  { img: "/images/augmented-reality.png", title: "Argumented Reality" },
  { img: "/images/virtual-tour.png", title: "Virtual Reality" },
  {
    img: "/images/artificial-intelligence.png",
    title: "Artificial Intelligence",
  },
];

export const CardsSection = (props: Props) => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container max-w-5xl">
        <h2 className="text-4xl font-bold text-center">
          Explore all XCR has to offer
        </h2>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-4 max-w-6xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg border shadow-sm flex flex-col items-center justify-center gap-6 bg-white hover:bg-black/[.05] cursor-pointer transition"
            >
              <Image src={card.img} alt={card.title} width={50} height={50} />
              <p>{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
