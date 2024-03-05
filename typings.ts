import { PortableTextBlock } from "sanity";

export type Blog = {
  _id: string;
  title: string;
  slug: string;
  body: PortableTextBlock[];
  publishedAt: Date;
  author: TeamMember[];
};

export type DetailedBlog = {
  _id: string;
  title: string;
  slug: string;
  body: PortableTextBlock[];
  publishedAt: Date;
  categories: Category[];
  author: TeamMember[];
  related: Blog[];
};

export type TeamMember = {
  _id: string;
  name: string;
  jobTitle: string;
  image: SanityImage;
};

export type Service = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  // image: string;
};

export type Category = {
  _id: string;
  title: string;
};

export type SanityImage = {
  asset: {
    _type: string;
    _ref: string;
  };
  alt: string;
};
