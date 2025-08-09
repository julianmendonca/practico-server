import { User } from "../entities/user.entity.js";

export interface UserRepository {
  createUser(user: User): Promise<User>;
}
