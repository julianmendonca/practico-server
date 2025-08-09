import { userRepository } from "./repositories/user.repository.js";

const userRepositoryImplementation = userRepository({
  db: {
    createUser: (user) => {
      return user;
    },
  },
});
