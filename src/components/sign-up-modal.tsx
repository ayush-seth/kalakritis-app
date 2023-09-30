import { useIsUserRegistered } from "@/hooks/use-is-user-registered";
import { useLogin } from "@/hooks/use-login";
import { useSendOtp } from "@/hooks/use-send-otp";
import { IconArrowLeft } from "@tabler/icons-react";
import { Frank_Ruhl_Libre } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Modal } from "./ui/modal";
import { SectionHeading } from "./ui/section-heading";

type SignUpModalProps = {
  open: boolean;
  onClose: () => void;
};

type Inputs = {
  email: string;
  password: string;
  otp: string;
};

const font = Frank_Ruhl_Libre({ weight: ["500"], subsets: ["latin"] });

export function SignUpModal({ open, onClose }: SignUpModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [modalTitle, setModalTitle] = useState("Get Instant Discount");
  const [stepNumber, setStepNumber] = useState(1);

  const isUserRegistered = useIsUserRegistered();
  const login = useLogin();
  const sendOtp = useSendOtp();

  function goToEmailStep() {
    setModalTitle("Get Instant Discount");
    setStepNumber(1);
  }

  function goToPasswordStep() {
    setModalTitle("Login to Kalakritis");
    setStepNumber(2);
  }

  function goToOtpStep() {
    setModalTitle("Verify OTP");
    setStepNumber(3);
  }

  return (
    <Modal open={open} onClose={onClose}>
      <form
        className="grid grid-cols-[400px,1fr] gap-12"
        onSubmit={handleSubmit(({ email, password, otp }) => {
          switch (stepNumber) {
            case 1:
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
            case 2:
              login.mutate(
                { email, password },
                {
                  onSuccess: (data) => alert(JSON.stringify(data)),
                },
              );
              break;
            case 3:
          }
        })}
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
          {stepNumber === 3 && (
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
              {stepNumber === 1 && (
                <Input
                  className="w-full"
                  label="Enter Email"
                  placeholder="Email"
                  error={errors.email?.message}
                  {...register("email", { required: "Email is required" })}
                />
              )}
              {stepNumber === 2 && (
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
              {stepNumber === 3 && (
                <Input
                  className="w-full"
                  label="Enter OTP"
                  placeholder="OTP"
                  type="password"
                  error={errors.otp?.message}
                  {...register("otp", { required: "OTP is required" })}
                />
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
          <Button variant="primary" className="w-full" type="submit">
            Continue
          </Button>
        </div>
      </form>
    </Modal>
  );
}
