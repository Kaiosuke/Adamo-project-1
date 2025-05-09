import Rating from '@components/Rating'
import { Button } from '@components/ui/button'
import { Form, FormField, FormItem, FormMessage } from '@components/ui/form'
import { Textarea } from '@components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch } from '@redux-toolkit/index'
import { commentSchema, TCommentSchemaValues } from '@schemas/reviewSchema'
import { useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'

import { addReviewTour } from '@api/reviewRequest'
import { IReviewTourLackId } from '@interfaces/review'
import { toastFailed, toastSuccess, toastWarring } from '@lib/toasts'
import { authSelector } from '@redux-toolkit/selectors/authSelector'
import { useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useDebouncedCallback } from 'use-debounce'

interface Props {
  id: string
  setCurrentPage: (_v: number) => void
}

const TourReviewForm = ({ id, setCurrentPage }: Props) => {
  const { t } = useTranslation('detail')
  const { t: validationValues } = useTranslation('schema')

  const dispatch = useAppDispatch()
  const { currentUser } = useSelector(authSelector)

  const form = useForm<TCommentSchemaValues>({
    resolver: zodResolver(commentSchema(validationValues as unknown as (_key: string) => string)),
    defaultValues: {
      message: '',
      star: 0
    }
  })

  const queryClient = useQueryClient()

  const onSubmit = useDebouncedCallback((values: TCommentSchemaValues) => {
    ;(async () => {
      if (id) {
        if (!currentUser) {
          return toastWarring({ content: 'Please Login to comment' })
        }
        const data: IReviewTourLackId = {
          userId: currentUser?.uid,
          tourId: Number(id),
          rate: values.star,
          avatar: 'url("@/assets/images/Avatar-1.png")',
          opinion: 'Nevermind',
          time: new Date().toDateString(),
          title: 'The best experience ever',
          des: values.message
        }
        try {
          await dispatch(addReviewTour({ data: data })).unwrap()
          toastSuccess({ content: 'Comment' })

          form.reset({
            message: '',
            star: 0
          })
          queryClient.invalidateQueries({
            queryKey: ['reviewsTour', { id }]
          })
          setCurrentPage(0)
        } catch (error) {
          const err = error as Error
          toastFailed({ content: err })
        }
      }
    })()
  }, 300)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <div className="flex gap-2">
                <div className="">
                  <FaUserCircle className="lg:w-[56px] md:w-[48px] w-[40px] h-auto text-five" />
                </div>
                <Textarea
                  value={field.value}
                  onChange={(v) => {
                    field.onChange(v)
                  }}
                  placeholder={t('tour.review.textArea')}
                  className="h-[128px] bg-seven text-four placeholder:text-four"
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full mt-6 flex justify-between">
          <FormField
            control={form.control}
            name="star"
            render={({ field }) => (
              <FormItem>
                <div className="">
                  <Rating
                    rating={Number(field.value)}
                    size={30}
                    onRatingChange={(v) => {
                      field.onChange(Number(v))
                    }}
                    variant="yellow"
                    totalStars={5}
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-auto lg:px-10 md:px-8 px-6" size={'third'}>
            {t('tour.review.button')}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default TourReviewForm
