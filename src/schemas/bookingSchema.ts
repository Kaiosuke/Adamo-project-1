import { z } from "zod";

const bookingSchema = z.object({
  guests: z.string().min(1, { message: "Please choose guests" }),
});

export { bookingSchema };
