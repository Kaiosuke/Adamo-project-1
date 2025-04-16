import { z } from "zod";

const commentSchema = z.object({
  message: z
    .string()
    .min(1, { message: "comment must be greater than 4 character" }),
});

export { commentSchema };
