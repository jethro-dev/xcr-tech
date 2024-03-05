import React from "react";
import { getBlogs } from "@/sanity/lib/utils";

type Props = {};

const BlogsPage = async (props: Props) => {
  return (
    <main>
      <section className="bg-primary pt-12 md:pt-24 lg:pt-32">
        <div className="container">
          <h1 className="text-5xl text-center">About Us</h1>
          <p className="mt-2 text-muted-foreground text-base w-2/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            ullam consectetur, aliquid quaerat modi sed officia debitis
            repellendus corporis perspiciatis?
          </p>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">hello</section>
    </main>
  );
};

export default BlogsPage;
