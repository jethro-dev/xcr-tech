import { getBlogs, getTeamMembers } from "@/sanity/lib/utils";
import { Blog, TeamMember } from "@/typings";
import Link from "next/link";
import React from "react";
import { PortableText } from "@portabletext/react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type Props = {};

export const TeamGrid = async (props: Props) => {
  const members = await getTeamMembers();
  return (
    <div className="container max-w-5xl grid grid-cols-3 auto-rows-fr gap-x-6 gap-y-10">
      {members.map((member) => (
        <Card key={member._id} {...member} />
      ))}
    </div>
  );
};

const Card = ({ name, jobTitle, image }: TeamMember) => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full rounded-lg aspect-square overflow-hidden">
        <Image
          src={urlForImage(image)}
          alt={image.alt}
          fill
          className="object-cover object-top"
        />
      </div>
      <h3 className="mt-2 text-xl font-semibold line-clamp-2">{name}</h3>

      <p className="mt-2 text-sm line-clamp-3 text-muted-foreground">
        {jobTitle}
      </p>
    </div>
  );
};
