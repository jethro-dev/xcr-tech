import { TeamMember } from "@/typings";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
  const words = name.split(" ");
  if (words.length >= 2) {
    return words[0].charAt(0) + words[words.length - 1].charAt(0);
  } else if (words.length === 1) {
    return words[0].charAt(0);
  } else {
    return ""; // Empty string if no name is provided
  }
}

// For formatting authors string in blog pages
// e.g. XXX, YYY, and two others.
export function generateAuthorText(authors: TeamMember[]): string {
  // Extract the name field from each author
  const authorNames = authors.map((author) => author.name);

  if (authorNames.length <= 2) {
    return authorNames.join(" and ");
  } else {
    return `${authorNames.slice(0, 2).join(", ")}, and ${
      authorNames.length - 2
    } others`;
  }
}
