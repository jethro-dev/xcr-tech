import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getServices } from "@/sanity/lib/utils";
import { Service } from "@/typings";
import Link from "next/link";
import React from "react";

type Props = {};

export const ServicesCards = async (props: Props) => {
  const services = await getServices();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center md:px-6">
        <div className="">
          <Badge
            variant={"outline"}
            className="bg-white cursor-default pointer-events-none even select-none"
          >
            🥇 No.1 in Education
          </Badge>
          <h1 className="mt-10 text-3xl font-bold tracking-tighter sm:text-5xl uppercase font-akony text-foreground">
            XR in education and training
          </h1>
          <p className="mt-2 mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We deliver, we execute, and we are confident to make the best out of
            the best.
          </p>
        </div>
        <Button asChild>
          <Link href="#">Explore Solutions</Link>
        </Button>
      </div>

      <div className="container">
        <div className="mt-20 max-w-5xl mx-auto grid grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service._id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, slug }: Service) => {
  return (
    <div className="bg-neutral-50 border px-6 py-24 rounded-lg text-center flex flex-col items-center">
      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-black"></div>
      <h3 className="mt-12 font-bold text-xl">{title}</h3>
      <p className="mt-4 font-light text-sm">{description}</p>
      <Button asChild>
        <Link href={`/services/${slug}`} className="mt-12">
          Learn more
        </Link>
      </Button>
    </div>
  );
};
