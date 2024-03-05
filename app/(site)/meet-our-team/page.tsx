import React from "react";
import { TeamGrid } from "./_components/team-grid";
import { CtaBanner } from "@/components/cta-banner";
import { BlogsBanner } from "@/components/blogs-banner";

type Props = {};

const MeetOurTeamPage = async (props: Props) => {
  return (
    <main className="bg-background">
      <section className="pt-12 md:pt-24 lg:pt-32">
        <div className="container">
          <h1 className="text-5xl font-bold">
            Meet our team of creators, designers, and world-class problem
            solvers
          </h1>
          <p className="mt-2 text-muted-foreground text-base w-2/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            ullam consectetur, aliquid quaerat modi sed officia debitis
            repellendus corporis perspiciatis?
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <TeamGrid />
      </section>
      <CtaBanner />
      <BlogsBanner />
    </main>
  );
};

export default MeetOurTeamPage;
