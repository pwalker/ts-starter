import dotenv from "dotenv"; // This import _should come first_
dotenv.config();

// other imports go here:
import { z } from "zod";

/**
 * zod is a way of defining a schema, and using that to parse to values.
 * In this case, the schema is simple `z.string()`, and we're parsing the environment variable.
 * This does 2 things:
 * 1. Throws an error if the env variable doesn't exist, a helpful guardrail
 * 2. Makes the type of `foo` _just_ `string`, which is more useful than `string | undefined`.
 */
const foo = z.string().parse(process.env.FOO);
console.log("process.env.FOO is:", foo);

for (let i = 0; i < 10; i++) {
  console.log("Hello World!");
}
