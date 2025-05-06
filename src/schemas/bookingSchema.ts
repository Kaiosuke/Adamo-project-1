/* eslint-disable indent */
import i18next from 'i18next'
import { z } from 'zod'

const lg = i18next.language

const bookingSchema =
  lg === 'en'
    ? z.object({
        guests: z.string().min(1, { message: 'Please choose guests' })
      })
    : z.object({
        guests: z.number().min(1, { message: 'Vui lòng chọn ít nhất 1 khách' })
      })

const bookingHotelSchema =
  lg === 'en'
    ? z.object({
        guests: z.string().min(1, { message: 'Please choose guests' })
      })
    : z.object({
        guests: z.number().min(1, { message: 'Vui lòng chọn ít nhất 1 khách' })
      })

export { bookingSchema, bookingHotelSchema }
