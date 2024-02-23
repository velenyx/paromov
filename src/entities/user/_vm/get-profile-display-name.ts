import { Profile } from "../_domain/types";

export const getProfileDisplayName = (profile: Profile) =>
  profile.name ? profile.name : profile.email;
