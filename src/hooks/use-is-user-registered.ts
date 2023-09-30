import { client } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export function useIsUserRegistered() {
  return useMutation({
    mutationFn: (email: string) =>
      client
        .post("users/check_user_exists/", { json: { email } })
        .json<{ user_exists: boolean }>(),
  });
}
