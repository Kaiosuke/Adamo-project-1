import { z } from "zod";

const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(6, { message: "Password must be greater than 6 character" }),
});

const RegisterSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(4, { message: "First name must be greater than 4 character " }),
    lastName: z
      .string()
      .trim()
      .min(4, { message: "Last name must be greater than 4 character " }),
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

const NewPasswordSchema = z
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

const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
});

export {
  SignInSchema,
  RegisterSchema,
  NewPasswordSchema,
  ForgotPasswordSchema,
};
