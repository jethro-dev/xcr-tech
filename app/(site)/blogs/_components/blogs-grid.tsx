import { getBlogs } from "@/sanity/lib/utils";
import { Blog } from "@/typings";
import Link from "next/link";
import React from "react";
import { PortableText } from "@portabletext/react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

type Props = {};

export const BlogsGrid = async (props: Props) => {
  const blogs = await getBlogs();
  return (
    <div className="container max-w-6xl grid grid-cols-3 auto-rows-fr gap-4">
      {blogs.map((blog) => (
        <Card key={blog._id} {...blog} />
      ))}
    </div>
  );
};

const Card = ({ _id, body, publishedAt, slug, title }: Blog) => {
  return (
    <Link
      href={`/blogs/${slug}`}
      className="border p-6 rounded-lg flex flex-col hover:bg-muted transition"
    >
      <h3 className="text-2xl font-semibold line-clamp-2">{title}</h3>

      <p className="mt-2 text-sm line-clamp-3 mb-10">
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
