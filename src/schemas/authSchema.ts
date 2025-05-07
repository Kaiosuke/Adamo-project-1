import { z } from 'zod'
import { userSchema } from './userSchema'

const baseSchema = (t?: (_key: string) => string) => {
  return userSchema(t)
    .pick({
      email: true
    })
    .extend({
      password: z
        .string()
        .min(8, { message: t ? t('password.min') : 'Password must be at least 8 characters' })
        .refine((value) => /[a-z]/.test(value), {
          message: t ? t('password.lowercase') : 'Password must contain at least 1 lowercase letter'
        })
        .refine((value) => /[A-Z]/.test(value), {
          message: t ? t('password.uppercase') : 'Password must contain at least 1 uppercase letter'
        })
        .refine((value) => /\d/.test(value), {
          message: t ? t('password.number') : 'Password must contain at least 1 number'
        })
        .refine((value) => /[!@#$%&*-]/.test(value), {
          message: t ? t('password.symbol') : 'Password must contain at least 1 special character'
        })
    })
}

export const getSignInSchema = (t?: (_key: string) => string) => {
  return baseSchema(t)
}

export const registerSchema = (t?: (_key: string) => string) => {
  return baseSchema(t)
    .pick({ email: true, password: true })
    .extend({
      firstName: z
        .string()
        .trim()
        .min(2, { message: t ? t('firstName') : 'First name must be greater than 2 character' }),
      lastName: z
        .string()
        .trim()
        .min(2, { message: t ? t('lastName') : 'Last name must be greater than 2 character ' }),
      confirm: z.string()
    })
    .refine((data) => data.password === data.confirm, {
      message: t ? 'confirm' : 'Passwords do not match'
    })
}

export const newPasswordSchema = (t?: (_key: string) => string) => {
  return baseSchema(t)
    .pick({
      password: true
    })
    .extend({
      confirm: z.string()
    })
    .refine((data) => data.password === data.confirm, {
      message: t ? 'confirm' : 'Passwords do not match'
    })
}

export const forgotPasswordSchema = (t?: (_key: string) => string) => {
  return baseSchema(t).pick({ email: true })
}

export const sendMailSchema = (t?: (_key: string) => string) => {
  return baseSchema(t).pick({ email: true })
}

export type TSignValues = z.infer<Awaited<ReturnType<typeof getSignInSchema>>>
export type TRegisterValues = z.infer<Awaited<ReturnType<typeof registerSchema>>>
export type TNewPasswordValues = z.infer<Awaited<ReturnType<typeof newPasswordSchema>>>
export type TForgotPasswordValues = z.infer<Awaited<ReturnType<typeof forgotPasswordSchema>>>
export type TSendMailValues = z.infer<Awaited<ReturnType<typeof sendMailSchema>>>
