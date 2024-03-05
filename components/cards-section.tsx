import React from "react";

type Props = {};

const cards = [
  { img: "", title: "Features" },
  { img: "", title: "Template gallery" },
  { img: "", title: "Productivity quiz" },
  { img: "", title: "Extension gallery" },
];

export const CardsSection = (props: Props) => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container max-w-5xl">
        <h2 className="text-4xl font-bold text-center">
          Explore all XCR has to offer
        </h2>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-4 max-w-6xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg border shadow-sm"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
