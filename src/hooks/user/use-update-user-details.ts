import { User } from "@/types";
import { authenticatedClient } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import toast from "react-hot-toast";

export const useUpdateUserDetails = () => {
  const id = Number(getCookie("userId"));
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user: Partial<User>) => updateUserDetails(user, id),
    onSuccess: () => {
      toast.success("Details updated successfully");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => toast.error("Something went wrong"),
  });
};

const updateUserDetails = (user: Partial<User>, id: number) => {
  return authenticatedClient.patch(`users/${id}/`, { json: { ...user } });
};
