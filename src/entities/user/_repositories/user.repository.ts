import { UserEntity } from "../_domain/types";
import { dbClient } from "@/shared/lib/db";

export class UserRepository {
  async createUser(user: UserEntity): Promise<UserEntity> {
    return await dbClient.user.create({
      data: user,
    });
  }
}

export const userRepository = new UserRepository();
