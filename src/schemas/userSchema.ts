import { z } from 'zod'

const baseUserSchema = (t?: (_key: string) => string) => {
  return z.object({
    firstName: z
      .string()
      .trim()
      .min(4, { message: t ? t('first') : 'First name must be greater than 4 character ' }),
    lastName: z
      .string()
      .trim()
      .min(2, { message: t ? t('lastName') : 'Last name must be greater than 2 character ' }),
    email: z.string().email({ message: t ? t('email') : 'Invalid Email' }),
    phoneNumber: z
      .string()
      .min(8, {
        message: t ? t('minPhone') : 'Phone number must be greater than 8 character and smaller than 11 character'
      })
      .max(11, {
        message: t ? t('maxPhone') : 'Phone number must be greater than 8 character and smaller than 11 character'
      }),
    payMethod: z.string().min(1, { message: t ? t('method') : 'Please choice a pay method' }),
    address: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zipCode: z.string().optional(),
    country: z.string().optional(),
    requirement: z.string().optional()
  })
}

export const userSchema = (t?: (_key: string) => string) => {
  return baseUserSchema(t)
}

export type TUserSchemaValues = z.infer<Awaited<ReturnType<typeof userSchema>>>
