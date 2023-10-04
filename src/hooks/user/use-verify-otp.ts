import { client } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export function useVerifyOtp() {
  return useMutation({
    mutationFn: ({ email, otp }: { email: string; otp: string }) =>
      client
        .post("users/verify_otp_for_create/", { json: { email, otp } })
        .json<{ details: string }>(),
  });
}
