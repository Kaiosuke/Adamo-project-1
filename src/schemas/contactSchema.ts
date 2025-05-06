/* eslint-disable indent */
import i18next from 'i18next'
import { z } from 'zod'

const lg = i18next.language

const contactSchema =
  lg === 'en'
    ? z.object({
        name: z.string().trim().min(4, { message: 'Your name must be greater than 4 character' }),
        email: z.string().email({ message: 'Invalid Email' }),
        phoneNumber: z
          .string()
          .min(8, {
            message: 'Phone number must be greater than 8 character and smaller than 11 character'
          })
          .max(11, {
            message: 'Phone number must be greater than 8 character and smaller than 11 character'
          }),
        message: z.string().min(4, { message: 'Message must be greater than 4 character' })
      })
    : z.object({
        name: z.string().trim().min(4, { message: 'Tên của bạn phải có ít nhất 4 ký tự' }),
        email: z.string().email({ message: 'Email không hợp lệ' }),
        phoneNumber: z
          .string()
          .min(8, {
            message: 'Số điện thoại phải có ít nhất 8 ký tự và không vượt quá 11 ký tự'
          })
          .max(11, {
            message: 'Số điện thoại phải có ít nhất 8 ký tự và không vượt quá 11 ký tự'
          }),
        message: z.string().min(4, { message: 'Tin nhắn phải có ít nhất 4 ký tự' })
      })

export { contactSchema }
