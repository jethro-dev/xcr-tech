import React from "react";
import { getBlogBySlug, getBlogs } from "@/sanity/lib/utils";
import { CtaBanner } from "@/components/cta-banner";
import { PortableText } from "@portabletext/react";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Avatar } from "@/components/avatar";
import { generateAuthorText } from "@/lib/utils";

type Props = {
  params: { slug: string };
};

const BlogPage = async ({ params }: Props) => {
  const slug = params.slug;
  const blog = await getBlogBySlug(slug);

  return (
    <main>
      <section className="pt-12 md:pt-12 lg:pt-12 pb-12 md:pb-24 lg:pb-32">
        <div className="container max-w-6xl">
          <div className="max-w-3xl">
            <Button
              variant={"link"}
              className="p-0 text-black font-normal text-sm hover:no-underline hover:text-foreground/80 transition"
            >
              <Link href={"/blogs"} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to blogs
              </Link>
            </Button>

            <div className="mt-4 flex items-center gap-4">
              {blog.categories.map((category) => (
                <Badge key={category._id} variant={"outline"}>
                  {category.title}
                </Badge>
              ))}
              <p className="font-light text-sm">
                {format(blog.publishedAt, "eeee, dd MMM yyyy")}
              </p>
            </div>

            <h1 className="mt-4 font-bold text-4xl max-w-3xl">{blog.title}</h1>
            <p className="mt-4 text-muted-foreground text-base font-light max-w-3xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              ullam consectetur, aliquid quaerat modi sed officia debitis
              repellendus corporis perspiciatis.
            </p>
          </div>

          <div className="mt-20 flex gap-4 divide-x">
            <div className="prose max-w-3xl pr-4">
              <PortableText value={blog.body} />
            </div>
            <div className="pl-8 w-full">
              <h3 className="text-sm font-normal text-muted-foreground">
                Posted by
              </h3>
              {blog.author.map((member) => (
                <div key={member._id} className="flex items-center gap-4 mt-4">
                  <div className="relative rounded-full w-10 h-10 overflow-hidden">
                    <Image
                      src={urlForImage(member.image.asset)}
                      alt={member.image.alt}
                      fill
                      className="object-cover object-top rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{member.name}</h3>
                    <p className="font-normal text-xs text-muted-foreground">
                      {member.jobTitle}
                    </p>
                  </div>
                </div>
              ))}

              <h3 className="mt-20 text-sm font-normal text-muted-foreground">
                Related readings
              </h3>
              {blog.related.map((blog) => (
                <div key={blog._id} className="mt-4">
                  <Link href={`/blogs/${blog.slug}`}>
                    <h4 className="font-medium hover:underline cursor-pointer">
                      {blog.title}
                    </h4>
                  </Link>
                  <div>
                    {/* <div className="relative rounded-full w-10 h-10 overflow-hidden">
                      <Image
                        src={urlForImage(blog.author)}
                        alt={member.image.alt}
                        fill
                        className="object-cover object-top rounded-full"
                      />
                    </div> */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex items-center -space-x-4">
                        {blog.author.map((member) => (
                          <Avatar
                            src={urlForImage(member.image.asset)}
                            alt={member.name}
                            name={member.name}
                            size={30}
                          />
                        ))}
                      </div>
                      <p className="text-sm font-normal">
                        {generateAuthorText(blog.author)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
};

export default BlogPage;
