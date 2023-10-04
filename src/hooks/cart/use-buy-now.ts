import { authenticatedClient } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { HTTPError } from "ky";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { AddToCartInput } from "./use-add-to-cart";

export const useBuyNow = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (input: AddToCartInput) =>
      authenticatedClient
        .post("cart/buy_now/", { json: input })
        .json<{ details: string }>(),
    onSuccess: () => router.push("/cart"),
    onError: (error) =>
      error instanceof HTTPError && toast.error(error.message),
  });
};
