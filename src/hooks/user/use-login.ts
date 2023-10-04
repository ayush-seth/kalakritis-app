import { useModalStore } from "@/store";
import { client } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";

type LoginInput = { email: string; password: string };
type LoginResponse = { access: string; refresh: string };

export function useLogin() {
  const setShowLoginModal = useModalStore((s) => s.setShowLoginModal);
  return useMutation({
    mutationFn: ({ email, password }: LoginInput) =>
      client
        .post("users/token/", { json: { email, password } })
        .json<LoginResponse>(),
    onSuccess: ({ access }) => {
      setCookie("token", access);
      setShowLoginModal(false);
    },
  });
}
