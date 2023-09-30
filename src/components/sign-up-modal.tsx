import { Frank_Ruhl_Libre } from "next/font/google";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Modal } from "./ui/modal";
import { SectionHeading } from "./ui/section-heading";

type SignUpModalProps = {
  opened?: boolean;
};

const font = Frank_Ruhl_Libre({ weight: ["500"], subsets: ["latin"] });

export function SignUpModal({ opened }: SignUpModalProps) {
  return (
    <Modal>
      <Modal.Trigger>
        <Button variant="primary">Sign safsafup</Button>
      </Modal.Trigger>
      <Modal.Content>
        <div className="grid grid-cols-[400px,1fr] gap-12">
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
            <SectionHeading className="text-left">
              Get Instant Discount
            </SectionHeading>
            <p className="text-gray-700">
              Register to get instant update about our new launches and offers.
              Check your Email address after registration for 10% Discount
              coupon code
            </p>
            <div className="space-y-8">
              <h2 className="text-2xl" style={font.style}>
                Sign in or Sign up
              </h2>
              <Input
                className="w-full"
                label="Enter Email"
                placeholder="Email"
              />
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
            <Button variant="primary" className="w-full">
              Continue
            </Button>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}
