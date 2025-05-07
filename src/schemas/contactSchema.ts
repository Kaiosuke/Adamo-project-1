import { z } from 'zod'
import { userSchema } from './userSchema'

export const contactSchema = (t?: (_key: string) => string) => {
  return userSchema(t)
    .pick({
      email: true,
      phoneNumber: true
    })
    .extend({
      name: z
        .string()
        .trim()
        .min(4, { message: t ? t('name') : 'Your name must be greater than 4 character' }),
      message: z.string().min(4, { message: t ? t('name') : 'Message must be greater than 4 character' })
    })
}

export type TContactSchemaValues = z.infer<Awaited<ReturnType<typeof contactSchema>>>
