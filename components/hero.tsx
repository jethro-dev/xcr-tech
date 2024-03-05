import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary to-black dark:bg-gray-800">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center md:px-6">
        <div className="">
          <Badge
            variant={"outline"}
            className="bg-white cursor-default pointer-events-none even select-none"
          >
            🥇 Placeholder
          </Badge>
          <h1 className="mt-10 text-3xl font-bold tracking-tighter sm:text-5xl uppercase font-akony text-white">
            XR in education and training
          </h1>
          <p className="mt-2 mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We deliver, we execute, and we are confident to make the best out of
            the best.
          </p>
        </div>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Explore Solutions
        </Link>
      </div>

      <div className="container">
        <div className="mt-20 max-w-3xl bg-black/10 mx-auto py-20  border border-primary/40 h-[600px] shadow-inner grid place-items-center rounded-lg">
          <span className="text-white">Image</span>
        </div>
      </div>
    </section>
  );
};
