import { User } from "@/types";
import { authenticatedClient } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";

export const useUserDetails = () => {
  const id = getCookie("userId");

  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id!),
    enabled: !!id,
  });
};

const fetchUser = (id: string) => {
  return authenticatedClient.get(`users/${id}/`).json<User>();
};
