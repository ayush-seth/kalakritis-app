import { useIsUserRegistered } from "@/hooks/use-is-user-registered";
import { useLogin } from "@/hooks/use-login";
import { useRegister } from "@/hooks/use-register";
import { useSendOtp } from "@/hooks/use-send-otp";
import { useVerifyOtp } from "@/hooks/use-verify-otp";
import { cn } from "@/utils";
import { IconArrowLeft } from "@tabler/icons-react";
import { Frank_Ruhl_Libre } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Modal } from "./ui/modal";
import { SectionHeading } from "./ui/section-heading";

type Step = "Enter Email" | "Verify OTP" | "Enter Password" | "Register";

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

type Inputs = {
  email: string;
  password: string;
  confirm_password: string;
  otp: string;
  first_name: string;
  last_name: string;
  phone_number: string;
};

const font = Frank_Ruhl_Libre({ weight: ["500"], subsets: ["latin"] });

export function LoginModal({ open, onClose }: LoginModalProps) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const [modalTitle, setModalTitle] = useState("Get Instant Discount");
  const [step, setStep] = useState<Step>("Enter Email");

  const isUserRegistered = useIsUserRegistered();
  const login = useLogin();
  const sendOtp = useSendOtp();
  const verifyOtp = useVerifyOtp();
  const registerUser = useRegister();

  function goToEmailStep() {
    setModalTitle("Get Instant Discount");
    setStep("Enter Email");
  }

  function goToPasswordStep() {
    setModalTitle("Login to Kalakritis");
    setStep("Enter Password");
  }

  function goToOtpStep() {
    setModalTitle("Verify OTP");
    setStep("Verify OTP");
  }

  function goToRegisterStep() {
    setModalTitle("Enter your details");
    setStep("Register");
  }

  const isLoading = login.isLoading || sendOtp.isLoading || verifyOtp.isLoading;

  return (
    <Modal open={open} onClose={onClose}>
      <form
        className={cn("grid grid-cols-[400px,1fr] gap-12")}
        onSubmit={handleSubmit(
          ({ email, password, otp, first_name, last_name, phone_number }) => {
            switch (step) {
              case "Enter Email":
                isUserRegistered.mutate(email, {
                  onSuccess: ({ user_exists }) => {
                    if (user_exists) {
                      goToPasswordStep();
                    } else {
                      sendOtp.mutate(
                        { email },
                        {
                          onSuccess: ({ details }) => {
                            alert(details);
                            goToOtpStep();
                          },
                        },
                      );
                    }
                  },
                });
                break;
              case "Enter Password":
                login.mutate(
                  { email, password },
                  {
                    onSuccess: (data) => alert(JSON.stringify(data)),
                  },
                );
                break;
              case "Verify OTP":
                verifyOtp.mutate(
                  { email, otp },
                  {
                    onSuccess: ({ details }) => {
                      alert(details);
                      goToRegisterStep();
                    },
                  },
                );
                break;
              case "Register":
                registerUser.mutate(
                  {
                    email,
                    first_name,
                    last_name,
                    phone_number,
                    password,
                  },
                  { onSuccess: () => goToEmailStep() },
                );
                break;
            }
          },
        )}
      >
        <div>
          <Image
            src="/login-modal.jpeg"
            width={100}
            height={100}
            className="w-full"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center gap-8">
          {step === "Verify OTP" && (
            <button onClick={goToEmailStep}>
              <IconArrowLeft />
            </button>
          )}
          <SectionHeading className="text-left">{modalTitle}</SectionHeading>
          <p className="text-gray-700">
            Register to get instant update about our new launches and offers.
            Check your Email address after registration for 10% Discount coupon
            code
          </p>

          <div className="space-y-8">
            <h2 className="text-2xl" style={font.style}>
              Sign in or Sign up
            </h2>
            <div>
              {step === "Enter Email" && (
                <Input
                  className="w-full"
                  label="Enter Email"
                  placeholder="Email"
                  error={errors.email?.message}
                  {...register("email", { required: "Email is required" })}
                />
              )}
              {step === "Enter Password" && (
                <Input
                  className="w-full"
                  label="Enter Password"
                  placeholder="Password"
                  type="password"
                  error={errors.password?.message}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              )}
              {step === "Verify OTP" && (
                <Input
                  className="w-full"
                  label="Enter OTP"
                  placeholder="OTP"
                  type="password"
                  error={errors.otp?.message}
                  {...register("otp", { required: "OTP is required" })}
                />
              )}
              {step === "Register" && (
                <div className="h-[200px] space-y-4 overflow-y-scroll">
                  <Input
                    className="w-full"
                    label="First Name"
                    error={errors.first_name?.message}
                    {...register("first_name", {
                      required: "First name is required",
                    })}
                  />
                  <Input
                    className="w-full"
                    label="Last Name"
                    error={errors.last_name?.message}
                    {...register("last_name", {
                      required: "Last name is required",
                    })}
                  />
                  <Input
                    className="w-full"
                    label="Mobile Number"
                    error={errors.phone_number?.message}
                    {...register("phone_number", {
                      required: "Mobile number is required",
                      minLength: {
                        value: 10,
                        message: "Number should be exactly 10 digits",
                      },
                    })}
                  />
                  <Input
                    className="w-full"
                    label="Password"
                    type="password"
                    error={errors.password?.message}
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  <Input
                    className="w-full"
                    label="Confirm Password"
                    type="password"
                    error={errors.confirm_password?.message}
                    {...register("confirm_password", {
                      required: "Please confirm your password",
                      validate: (d) => {
                        console.log(d, getValues("password"));

                        return d === getValues("password")
                          ? undefined
                          : "Passwords must match";
                      },
                    })}
                  />
                </div>
              )}
            </div>
          </div>
          <span className="block text-sm font-light">
            By continuing I agree with the{" "}
            <a href="" className="text-accent-400">
              Terms of use
            </a>{" "}
            and{" "}
            <a href="" className="text-accent-400">
              Privacy Policy
            </a>
          </span>
          <Button
            variant="primary"
            className="w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Continue"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
