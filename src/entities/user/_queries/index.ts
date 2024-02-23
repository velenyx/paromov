import { getUserProfileAction } from "../_actions/get-user-profile.action";
import { UserId } from "../_domain/types";

const baseKey = "user";

export const getProfileQuery = (userId: UserId) => ({
  queryKey: [baseKey, "getProfileById", userId],
  queryFn: () => getUserProfileAction({ userId }),
});
