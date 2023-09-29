import { clsx, type ClassValue } from "clsx";
import ky from "ky";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const client = ky.extend({
  prefixUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
});
