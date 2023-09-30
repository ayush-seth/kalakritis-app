import { client } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      client
        .post("users/token/", { json: { email, password } })
        .json<{ access_token: string; refresh_token: string }>(),
  });
}
