import { User } from "../../domain/entities/user.entity.js";

export const db = {
  createUser: (user: User) => {
    return user;
  },
};
