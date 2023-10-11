import { useChangePassword } from "@/hooks/user/use-change-password";
import { useSendOtp } from "@/hooks/user/use-send-otp";
import { useUserDetails } from "@/hooks/user/use-user-details";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Loader } from "../ui/loader";

type FormInput = {
  new_password: string;
  confirm_new_password: string;
  otp: string;
};

export const PasswordSettings = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { isDirty, errors },
  } = useForm<FormInput>();

  const user = useUserDetails();
  const sendOtp = useSendOtp();
  const changePassword = useChangePassword();

  if (user.isLoading) return <Loader />;
  if (user.isError) return "Something went wrong";

  const email = user.data.email;

  return (
    <form
      className="max-w-md space-y-6"
      onSubmit={handleSubmit(({ new_password, confirm_new_password, otp }) => {
        if (otp) {
          changePassword.mutate(
            {
              email,
              otp,
              new_password,
              confirm_new_password,
            },
            {
              onSuccess: () => {
                sendOtp.reset();
                reset();
              },
            },
          );
        } else {
          sendOtp.mutate({ email });
        }
      })}
    >
      <Input
        type="password"
        label="New Password"
        className="bg-white"
        error={errors.new_password?.message}
        {...register("new_password", {
          required: "Please enter the new password",
        })}
      />
      <Input
        type="password"
        label="Confirm New Password"
        className="bg-white"
        error={errors.confirm_new_password?.message}
        {...register("confirm_new_password", {
          required: "Please confirm the new password",
          validate: (v) =>
            v === getValues("new_password")
              ? undefined
              : "Passwords must match",
        })}
      />
      {sendOtp.isSuccess && (
        <Input
          label="OTP"
          className="bg-white"
          error={errors.otp?.message}
          {...register("otp", {
            required: "Please enter the OTP",
          })}
        />
      )}

      <div className="md:col-start-2">
        <Button
          className="w-full md:ml-auto md:block md:w-auto"
          variant="primary"
          loading={sendOtp.isLoading || changePassword.isLoading}
          disabled={!isDirty}
        >
          {sendOtp.isSuccess ? "confirm" : "request otp"}
        </Button>
      </div>
    </form>
  );
};
