import { BlogsBanner } from "@/components/blogs-banner";
import { CtaBanner } from "@/components/cta-banner";
import React from "react";
import { ServicesCards } from "./_components/services-cards";

type Props = {};

const ServicesPage = (props: Props) => {
  return (
    <main>
      <ServicesCards />
      <BlogsBanner />
      <CtaBanner />
    </main>
  );
};

export default ServicesPage;
