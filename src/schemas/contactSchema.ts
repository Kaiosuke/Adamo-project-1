import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(4, { message: "Your name must be greater than 4 character " }),
  email: z.string().email({ message: "Invalid Email" }),
  phoneNumber: z
    .string()
    .min(8, {
      message:
        "Phone number must be greater than 8 character and smaller than 11 character",
    })
    .max(11, {
      message:
        "Phone number must be greater than 8 character and smaller than 11 character",
    }),
  message: z.string().min(1, { message: "Please choice a pay method" }),
});

export { contactSchema };
