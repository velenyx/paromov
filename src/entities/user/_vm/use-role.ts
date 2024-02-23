import { useAppSession } from "@/entities/user/_vm/use-app-session";

export const useRole = () => {
  const session = useAppSession();
  return session.data?.user.role;
};
