"use server";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Blog, DetailedBlog, Service, TeamMember } from "@/typings";

export const getBlogs = async (): Promise<Blog[]> => {
  const query = groq`*[_type == 'post'] | order(publishedAt desc) {
    _id,
    publishedAt,
    body,title,"slug":slug.current
}`;
  try {
    const data = await client.fetch<Blog[]>(query);
    return data;
  } catch (e) {
    throw new Error("Error fetching blogs");
  }
};
export const getBlogBySlug = async (slug: string): Promise<DetailedBlog> => {
  const query = groq`*[_type == 'post' && slug.current == '${slug}']{
    _id,
    publishedAt,
    categories[]-> {_id,title},
    "related": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..1]{
      _id,
   publishedAt,
   body,title,"slug":slug.current,author[]->{_id,name,jobTitle,image{asset,alt}}
  },
    "slug":slug.current,
    body,
    title,
    _updatedAt,
    _createdAt,
    author[]->{_id,name,jobTitle,image{asset,alt}}
  }[0]`;

  try {
    const data = await client.fetch<DetailedBlog>(query);
    return data;
  } catch (e) {
    throw new Error("Error fetching detailed blog");
  }
};

export const getServices = async (): Promise<Service[]> => {
  const query = groq`*[_type == 'service'] {
    _id,title,description,"slug":slug.current
  }`;

  try {
    const data = await client.fetch<Service[]>(query);
    return data;
  } catch (e) {
    throw new Error("Error fetching blogs");
  }
};

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  const query = groq`*[_type == 'teamMember'] | order(priority asc){
    _id,
    name,
    jobTitle,
    image{
      asset,
      alt
    }
  }`;

  try {
    const data = await client.fetch<TeamMember[]>(query);
    return data;
  } catch (e) {
    throw new Error("Error fetching blogs");
  }
};
