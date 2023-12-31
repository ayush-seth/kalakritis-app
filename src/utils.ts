import { clsx, type ClassValue } from "clsx";
import { getCookie } from "cookies-next";
import ky, { HTTPError } from "ky";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const beforeErrorHook = async (error: HTTPError) => {
  const response = await error.response.json();
  error.message =
    response.detail ?? response.details ?? "Something went wrong!";
  return error;
};

export const client = ky.extend({
  prefixUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`,
  hooks: { beforeError: [beforeErrorHook] },
});

export const authenticatedClient = ky.extend({
  prefixUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`,
  hooks: {
    beforeRequest: [
      (request) => {
        const token = getCookie("token");
        request.headers.set("Authorization", `Bearer ${token}`);
      },
    ],
    beforeError: [beforeErrorHook],
  },
});
