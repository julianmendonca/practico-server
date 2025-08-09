import fastify from "fastify";
import { createUser } from "../use-cases/user/create-user.use-case.js";

const server = fastify();

server.post<{ Body: { name: string } }>(
  "/create-user",
  async (request, reply) => {
    const { name } = request.body;
    const user = await createUser({ name, id: "123" });
    return user;
  }
);

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
