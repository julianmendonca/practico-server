import { User } from "../../domain/entities/user.entity.js";
import { UserRepository } from "../../domain/repositories/user.repository.js";
import { db } from "../db/db.js";

interface UserRepositoryDeps {
  db: {
    createUser: (user: User) => User;
  };
}

export const userRepository: (deps: UserRepositoryDeps) => UserRepository = (
  deps: UserRepositoryDeps
) => ({
  createUser: async (user) => {
    return deps.db.createUser(user);
  },
});

export const userRepository2 = (user: User) => ({
  createUser: async (user) => {
    return db.createUser(user);
  },
});
