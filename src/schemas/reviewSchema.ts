/* eslint-disable indent */
import i18next from 'i18next'
import { z } from 'zod'

const lg = i18next.language

const commentSchema =
  lg === 'en'
    ? z.object({
        message: z.string().min(4, { message: 'comment must be greater than 4 character' }),
        star: z.number().min(1, { message: 'Please choose rate' })
      })
    : z.object({
        message: z.string().min(4, { message: 'Bình luận phải có ít nhất 4 ký tự' }),
        star: z.number().min(1, { message: 'Vui lòng chọn đánh giá' })
      })

export { commentSchema }
