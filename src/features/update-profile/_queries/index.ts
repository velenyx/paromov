import { useMutation } from "@tanstack/react-query";
import { updateProfileAction } from "../_actions/update-profile";

type Props = Parameters<typeof updateProfileAction>;

export const useUpdateProfileMutation = () => {
  return useMutation({
    mutationFn: updateProfileAction,
  });
};
