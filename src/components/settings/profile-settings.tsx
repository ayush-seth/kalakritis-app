import { useUpdateUserDetails } from "@/hooks/user/use-update-user-details";
import { useUserDetails } from "@/hooks/user/use-user-details";
import { RegisterOptions, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type FormInput = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

const phoneNumberValidations: RegisterOptions<FormInput, "phone_number"> = {
  minLength: {
    value: 10,
    message: "Phone number should be 10 characters",
  },
  maxLength: {
    value: 10,
    message: "Phone number should be 10 characters",
  },
};

export const ProfileSettings = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm<FormInput>();

  const { data } = useUserDetails();
  const { mutate } = useUpdateUserDetails();

  return (
    <form
      className="space-y-6 md:grid md:grid-cols-2 md:gap-12 md:space-y-0"
      onSubmit={handleSubmit((v) => mutate(v))}
    >
      <Input
        label="First Name"
        className="bg-white"
        defaultValue={data?.first_name}
        {...register("first_name")}
      />
      <Input
        label="Last Name"
        className="bg-white"
        defaultValue={data?.last_name}
        {...register("last_name")}
      />
      <Input
        label="Email ID"
        className="bg-white"
        defaultValue={data?.email}
        {...register("email")}
      />
      <Input
        label="Phone Number"
        className="bg-white"
        defaultValue={data?.phone_number}
        {...register("phone_number", phoneNumberValidations)}
      />
      <div className="md:col-start-2">
        <Button
          className="w-full md:ml-auto md:block md:w-auto"
          variant="primary"
          disabled={!isDirty}
        >
          update
        </Button>
      </div>
    </form>
  );
};
