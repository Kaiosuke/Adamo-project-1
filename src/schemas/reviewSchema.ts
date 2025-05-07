import { z } from 'zod'

export const commentSchema = (t?: (_key: string) => string) => {
  return z.object({
    message: z.string().min(4, { message: t ? t('comment') : 'Comment must be greater than 4 character' }),
    star: z.number().min(1, { message: t ? t('rate') : 'Please choose rate' })
  })
}

export type TCommentSchemaValues = z.infer<Awaited<ReturnType<typeof commentSchema>>>
