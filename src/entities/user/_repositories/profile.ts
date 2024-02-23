import { Profile, UserId } from "../_domain/types";
import { dbClient } from "@/shared/lib/db";

export class ProfileRepository {
  async update(userId: UserId, data: Partial<Profile>): Promise<Profile> {
    return dbClient.user.update({
      where: {
        id: userId,
      },
      data,
    });
  }
}

export const profileRepository = new ProfileRepository();
