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
