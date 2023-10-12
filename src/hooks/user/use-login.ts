import { LoginModal } from "@/components/login-modal";
import { client } from "@/utils";
import NiceModal from "@ebay/nice-modal-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setCookie } from "cookies-next";
import toast from "react-hot-toast";

type LoginInput = { email: string; password: string };
type LoginResponse = {
  access: string;
  refresh: string;
  fullname: string;
  user_id: number;
};

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ email, password }: LoginInput) =>
      client
        .post("users/token/", { json: { email, password } })
        .json<LoginResponse>(),
    onSuccess: ({ access, user_id, fullname }) => {
      setCookie("userId", user_id);
      setCookie("token", access);
      NiceModal.remove(LoginModal);
      toast.success(`Welcome ${fullname}!`);
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      queryClient.invalidateQueries({ queryKey: ["cart-details"] });
    },
  });
}
