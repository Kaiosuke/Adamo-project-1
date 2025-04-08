import { z } from "zod";

const UserSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(4, { message: "First name must be greater than 4 character " }),
  lastName: z
    .string()
    .trim()
    .min(4, { message: "Last name must be greater than 4 character " }),
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
  payMethod: z.string().min(1, { message: "Please choice a pay method" }),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
  requirement: z.string().optional(),
});

export { UserSchema };
