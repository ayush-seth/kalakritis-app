import { User } from "@/types";
import { authenticatedClient } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { getCookie, hasCookie } from "cookies-next";

export const useUserDetails = () => {
  const id = getCookie("userId");
  const loggedIn = hasCookie("token");

  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id!),
    enabled: loggedIn,
  });
};

const fetchUser = (id: string) => {
  return authenticatedClient.get(`users/${id}/`).json<User>();
};
