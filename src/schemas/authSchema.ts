import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(6, { message: "Password must be greater than 6 character" }),
});

const registerSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, { message: "First name must be greater than 2 character " }),
    lastName: z
      .string()
      .trim()
      .min(2, { message: "Last name must be greater than 2 character " }),
    email: z.string().email({ message: "Invalid Email" }),
    password: z
      .string()
      .min(6, { message: "Password must be greater than 6 character" }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

const newPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Password must be greater than 6 character" }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
});

const sendMailSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
});

export {
  signInSchema,
  registerSchema,
  newPasswordSchema,
  forgotPasswordSchema,
  sendMailSchema,
};
