import { z } from 'zod'

export const bookingSchema = (t?: (_key: string) => string) => {
  return z.object({
    guests: z.string().min(1, { message: t ? t('bookingGuest') : 'Please choose guests' })
  })
}

export const bookingHotelSchema = (t?: (_key: string) => string) => {
  return bookingSchema(t)
}

export type TBookingSchemaValues = z.infer<Awaited<ReturnType<typeof bookingSchema>>>
export type TBookingHotelSchemaValues = z.infer<Awaited<ReturnType<typeof bookingHotelSchema>>>
