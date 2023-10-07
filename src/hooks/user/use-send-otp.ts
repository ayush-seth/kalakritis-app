import { client } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useSendOtp() {
  return useMutation({
    mutationFn: ({ email }: { email: string }) => {
      return client
        .post("users/send_otp/", { json: { email } })
        .json<{ details: string }>();
    },
    onSuccess: () => toast.success("OTP sent successfully to your email"),
  });
}
