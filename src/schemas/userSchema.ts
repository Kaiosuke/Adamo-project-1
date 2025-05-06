/* eslint-disable indent */
import i18next from 'i18next'
import { z } from 'zod'

const lg = i18next.language

const userSchema =
  lg === 'en'
    ? z.object({
        firstName: z.string().trim().min(4, { message: 'First name must be greater than 4 character ' }),
        lastName: z.string().trim().min(4, { message: 'Last name must be greater than 4 character ' }),
        email: z.string().email({ message: 'Invalid Email' }),
        phoneNumber: z
          .string()
          .min(8, {
            message: 'Phone number must be greater than 8 character and smaller than 11 character'
          })
          .max(11, {
            message: 'Phone number must be greater than 8 character and smaller than 11 character'
          }),
        payMethod: z.string().min(1, { message: 'Please choice a pay method' }),
        address: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        zipCode: z.string().optional(),
        country: z.string().optional(),
        requirement: z.string().optional()
      })
    : z.object({
        firstName: z.string().trim().min(4, { message: 'Tên đầu tiên phải có ít nhất 4 ký tự' }),
        lastName: z.string().trim().min(4, { message: 'Họ phải có ít nhất 4 ký tự' }),
        email: z.string().email({ message: 'Email không hợp lệ' }),
        phoneNumber: z
          .string()
          .min(8, {
            message: 'Số điện thoại phải có ít nhất 8 ký tự và không vượt quá 11 ký tự'
          })
          .max(11, {
            message: 'Số điện thoại phải có ít nhất 8 ký tự và không vượt quá 11 ký tự'
          }),
        payMethod: z.string().min(1, { message: 'Vui lòng chọn phương thức thanh toán' }),
        address: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        zipCode: z.string().optional(),
        country: z.string().optional(),
        requirement: z.string().optional()
      })

export { userSchema }
