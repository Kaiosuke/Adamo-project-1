/* eslint-disable indent */
import i18next from 'i18next'
import { z } from 'zod'
const lg = i18next.language

const signInSchema =
  lg === 'en'
    ? z.object({
        email: z.string().email({ message: 'Invalid Email' }),
        password: z.string().min(6, { message: 'Password must be greater than 6 character' })
      })
    : z.object({
        email: z.string().email({ message: 'Email không hợp lệ' }),
        password: z.string().min(6, { message: 'Mật khẩu phải có nhiều hơn 6 ký tự' })
      })

const registerSchema =
  lg === 'en'
    ? z
        .object({
          firstName: z.string().trim().min(2, { message: 'First name must be greater than 2 character ' }),
          lastName: z.string().trim().min(2, { message: 'Last name must be greater than 2 character ' }),
          email: z.string().email({ message: 'Invalid Email' }),
          password: z
            .string()
            .min(6, { message: 'Password must be greater than 6 character' })
            .refine((value) => /[a-z]/.test(value), {
              message: 'Password must contain at least 1 lowercase letter'
            })
            .refine((value) => /[A-Z]/.test(value), {
              message: 'Password must contain at least 1 uppercase letter'
            })
            .refine((value) => /\d/.test(value), {
              message: 'Password must contain at least 1 number'
            })
            .refine((value) => /[!@#$%&*-]/.test(value), {
              message: 'Password must contain at least 1 special character'
            }),
          confirm: z.string()
        })

        .refine((data) => data.password === data.confirm, {
          message: 'Passwords do not match',
          path: ['confirm']
        })
    : z
        .object({
          firstName: z.string().trim().min(2, { message: 'Tên phải có nhiều hơn 2 ký tự' }),
          lastName: z.string().trim().min(2, { message: 'Họ phải có nhiều hơn 2 ký tự' }),
          email: z.string().email({ message: 'Email không hợp lệ' }),
          password: z
            .string()
            .min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
            .refine((value) => /[a-z]/.test(value), {
              message: 'Mật khẩu phải chứa ít nhất 1 chữ thường'
            })
            .refine((value) => /[A-Z]/.test(value), {
              message: 'Mật khẩu phải chứa ít nhất 1 chữ hoa'
            })
            .refine((value) => /\d/.test(value), {
              message: 'Mật khẩu phải chứa ít nhất 1 số'
            })
            .refine((value) => /[!@#$%&*-]/.test(value), {
              message: 'Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt'
            }),
          confirm: z.string()
        })
        .refine((data) => data.password === data.confirm, {
          message: 'Mật khẩu xác nhận không khớp',
          path: ['confirm']
        })

const newPasswordSchema =
  lg === 'en'
    ? z
        .object({
          password: z
            .string()
            .min(6, { message: 'Password must be greater than 6 character' })
            .refine((value) => /[a-z]/.test(value), {
              message: 'Password must contain at least 1 lowercase letter'
            })
            .refine((value) => /[A-Z]/.test(value), {
              message: 'Password must contain at least 1 uppercase letter'
            })
            .refine((value) => /\d/.test(value), {
              message: 'Password must contain at least 1 number'
            })
            .refine((value) => /[!@#$%&*-]/.test(value), {
              message: 'Password must contain at least 1 special character'
            }),
          confirm: z.string()
        })
        .refine((data) => data.password === data.confirm, {
          message: 'Passwords do not match',
          path: ['confirm']
        })
    : z
        .object({
          password: z
            .string()
            .min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
            .refine((value) => /[a-z]/.test(value), {
              message: 'Mật khẩu phải chứa ít nhất 1 chữ thường'
            })
            .refine((value) => /[A-Z]/.test(value), {
              message: 'Mật khẩu phải chứa ít nhất 1 chữ hoa'
            })
            .refine((value) => /\d/.test(value), {
              message: 'Mật khẩu phải chứa ít nhất 1 số'
            })
            .refine((value) => /[!@#$%&*-]/.test(value), {
              message: 'Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt'
            }),
          confirm: z.string()
        })
        .refine((data) => data.password === data.confirm, {
          message: 'Mật khẩu xác nhận không khớp',
          path: ['confirm']
        })

const forgotPasswordSchema =
  lg === 'en'
    ? z.object({
        email: z.string().email({ message: 'Invalid Email' })
      })
    : z.object({
        email: z.string().email({ message: 'Email không hợp lệ' })
      })

const sendMailSchema =
  lg === 'en'
    ? z.object({
        email: z.string().email({ message: 'Invalid Email' })
      })
    : z.object({
        email: z.string().email({ message: 'Email không hợp lệ' })
      })

export { signInSchema, registerSchema, newPasswordSchema, forgotPasswordSchema, sendMailSchema }
