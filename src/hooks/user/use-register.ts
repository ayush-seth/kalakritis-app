import { client } from "@/utils";
import { useMutation } from "@tanstack/react-query";

type RegisterInput = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  //   confirm_password: string;
  phone_number: string;
};

export function useRegister() {
  return useMutation({
    mutationFn: (input: RegisterInput) =>
      client
        .post("users/", { json: input })
        .json<{ access_token: string; refresh_token: string }>(),
  });
}
