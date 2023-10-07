import { client } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { HTTPError } from "ky";
import toast from "react-hot-toast";

type ChangePasswordInput = {
  email: string;
  otp: string;
  new_password: string;
  confirm_new_password: string;
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: (input: ChangePasswordInput) => changePassword(input),
    onSuccess: ({ details }) => toast.success(details),
    onError: (error) => toast.error((error as HTTPError).message),
  });
};

const changePassword = (input: ChangePasswordInput) => {
  return client
    .post("users/set_new_password/", { json: input })
    .json<{ details: string }>();
};
