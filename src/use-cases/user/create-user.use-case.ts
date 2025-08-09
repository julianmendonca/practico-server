import { User } from "../../domain/entities/user.entity.js";
import { UserRepository } from "../../domain/repositories/user.repository.js";
import { db } from "../../infrastructure/db/db.js";

type CreateUser = (user: User) => Promise<User>;

export const createUser = (user: User) => {
  return db.createUser(user);
};
