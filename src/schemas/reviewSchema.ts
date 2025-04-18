import { z } from "zod";

const commentSchema = z.object({
  message: z
    .string()
    .min(4, { message: "comment must be greater than 4 character" }),
  star: z.number().min(1, { message: "Please choose rate" }),
});

export { commentSchema };
