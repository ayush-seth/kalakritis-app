import { useModalStore } from "@/store";
import { client } from "@/utils";
import { useMutation } from "@tanstack/react-query";
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
  const setShowLoginModal = useModalStore((s) => s.setShowLoginModal);
  return useMutation({
    mutationFn: ({ email, password }: LoginInput) =>
      client
        .post("users/token/", { json: { email, password } })
        .json<LoginResponse>(),
    onSuccess: ({ access, user_id, fullname }) => {
      setCookie("userId", user_id);
      setCookie("token", access);
      setShowLoginModal(false);
      toast.success(`Welcome ${fullname}!`);
    },
  });
}
