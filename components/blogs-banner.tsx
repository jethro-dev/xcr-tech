import { getBlogs } from "@/sanity/lib/utils";
import { Blog } from "@/typings";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";
import { format } from "date-fns";
import { Button } from "./ui/button";

type Props = {};

export const BlogsBanner = async (props: Props) => {
  const blogs = await getBlogs().then((res) => res.slice(0, 2));
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container max-w-5xl flex flex-col lg:flex-row gap-10">
        <div className="basis-1/3 flex flex-col items-start justify-center">
          <p className="text-primary font-semibold text-base">
            Learn more about XCR
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            Check out our latest blogs
          </h2>
          <p className="mt-4 text-base font-light text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos itaque
            aspernatur voluptatem facilis iste non obcaecati incidunt natus,
            veniam repellat.
          </p>
          <Button className="mt-4" variant={"secondary"} asChild>
            <Link href={"/blogs"}>See more blogs</Link>
          </Button>
        </div>

        {/* 2 blogs reccaommdn */}
        <div className="flex-col md:flex-row md:justify-end lg:justify-start basis-2/3 flex gap-4">
          {blogs.map((blog) => (
            <Card key={blog._id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, body, publishedAt, slug }: Blog) => {
  return (
    <Link
      href={`/blogs/${slug}`}
      className="max-w-sm border p-6 rounded-lg flex flex-col hover:bg-muted transition"
    >
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold line-clamp-2 md:line-clamp-3">
        {title}
      </h3>

      <p className="mt-4 text-xs lg:text-sm font-light line-clamp-10 mb-10">
        {/* @ts-ignore */}
        {body[0].children[0].text}
      </p>
      {/* <PortableText value={body[0]} /> */}
      <div className="mt-auto flex items-center justify-between">
        <Badge className="select-none pointer-events-none cursor-default">
          Education
        </Badge>
        <p className="text-muted-foreground text-sm font-light">
          {format(publishedAt, "dd MMM yyyy")}
        </p>
      </div>
    </Link>
  );
};
