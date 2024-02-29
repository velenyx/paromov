import { useMutation } from "@tanstack/react-query";
import { updateProfileAction } from "../_actions/update-profile";
import { useAppSession } from "@/entities/user/_vm/use-app-session";
import { useInvalidateProfile } from "@/entities/user/profile";

type Props = Parameters<typeof updateProfileAction>;

export const useUpdateProfile = () => {
  const { update: updateSession } = useAppSession();
  const invalidateProfile = useInvalidateProfile();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateProfileAction,
    onSuccess: async ({ profile }, { userId }) => {
      await invalidateProfile(userId);
      await updateSession({ user: profile });
    },
  });

  return {
    update: mutateAsync,
    isPending,
  };
};
