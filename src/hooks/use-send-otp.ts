import { client } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export function useSendOtp() {
  return useMutation({
    mutationFn: ({ email }: { email: string }) =>
      client
        .post("users/send_otp/", { json: { email } })
        .json<{ details: string }>(),
  });
}
