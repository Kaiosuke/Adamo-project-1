import { addReviewHotel } from '@api/reviewRequest'
import { Button } from '@components/ui/button'
import { Textarea } from '@components/ui/textarea'
import { IReviewHotel } from '@interfaces/review'
import { commentSchema } from '@schemas/reviewSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ControllerRenderProps, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'
import { z } from 'zod'

import LoadingBtn from '@components/LoadingList/LoadingBtn'
import Rating from '@components/Rating'
import { Form, FormField, FormItem, FormMessage } from '@components/ui/form'
import { ChangeEvent, memo, useCallback, useMemo, useState } from 'react'
import { toast } from 'sonner'
import { useDebouncedCallback } from 'use-debounce'
import { Trans, useTranslation } from 'react-i18next'
import i18n from '@i18n/i18n'
import { useSelector } from 'react-redux'
import { authSelector } from '@redux-toolkit/selectors/authSelector'

interface Props {
  id: string
  totalData: number
  setPageCount: (_v: number) => void
  setCurrentPage: (_v: number) => void
  ITEMS_PER_PAGE: number
  onAverageRate: number
  setQuery: (_query: Record<string, unknown>) => void
}

const listEvaluateEN = [
  {
    score: 1,
    title: 'Not Bad'
  },
  {
    score: 2,
    title: 'Pleasant'
  },
  {
    score: 3,
    title: 'Good'
  },
  {
    score: 4,
    title: 'Very Good'
  },
  {
    score: 5,
    title: 'Wonderful'
  }
]

const listEvaluateVI = [
  {
    score: 1,
    title: 'Tạm được'
  },
  {
    score: 2,
    title: 'Dễ chịu'
  },
  {
    score: 3,
    title: 'Tốt'
  },
  {
    score: 4,
    title: 'Rất tốt'
  },
  {
    score: 5,
    title: 'Tuyệt vời'
  }
]

const ReviewForm = ({ totalData, id, setCurrentPage, onAverageRate, setQuery }: Props) => {
  const queryClient = useQueryClient()
  const { currentUser } = useSelector(authSelector)

  const [isReview, setIsReview] = useState(false)

  const addComment = useMutation({
    mutationFn: (data: Omit<IReviewHotel, 'id'>) => {
      return addReviewHotel({ data })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviewHotel', 'score'] })
      queryClient.invalidateQueries({
        queryKey: ['reviewHotel', { id, _page: 1 }]
      })
      form.reset()
      setQuery({ _page: 1 })
      setCurrentPage(0)
      toast.success('Comment success', {
        style: {
          backgroundColor: '#4caf50',
          color: '#ffffff'
        }
      })
    }
  })

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      message: '',
      star: 0
    }
  })

  const onSubmit = useDebouncedCallback((values: z.infer<typeof commentSchema>) => {
    if (!currentUser) {
      return toast.warning('Please login to comment', {
        style: {
          backgroundColor: '#FF0B55',
          color: '#ffffff'
        }
      })
    }

    const data = {
      userId: currentUser.uid,
      hotelId: Number(id),
      rate: values.star,
      avatar: 'url("@/assets/images/Avatar-30.png")',
      opinion: 'Dreamy!',
      time: new Date().toDateString(),
      title: 'Romantic escape',
      des: values.message
    }

    addComment.mutate(data)
  }, 300)

  const handleOpenComment = useCallback(() => {
    setIsReview((prev) => !prev)
  }, [])

  const handleChangeValue = useCallback(
    ({
      field,
      v
    }: {
      field: ControllerRenderProps<
        {
          message: string
          star: number
        },
        'message'
      >
      v: ChangeEvent<HTMLTextAreaElement>
    }) => {
      field.onChange(v)
    },
    []
  )

  const { t } = useTranslation('detail')
  const currentLanguage = i18n.language

  const handleFindEvaluate = useMemo(() => {
    return (currentLanguage === 'en' ? listEvaluateEN : listEvaluateVI).reverse().find((v) => v.score <= onAverageRate)
      ?.title
  }, [onAverageRate, currentLanguage])

  return (
    <>
      <div className="flex gap-8">
        <div className="w-[148px] h-[148px] bg-primary flex justify-center items-center">
          <span className="text-third text-size-5xl">{onAverageRate}</span>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-size-4xl">{handleFindEvaluate}</div>
          {/* <div>{t('hotel.review.review')}</div> */}
          <Trans ns="detail" i18nKey={'hotel.review.review'} count={totalData} />

          <Button variant={isReview ? 'five' : 'primary'} size={'third'} onClick={handleOpenComment} className="px-2">
            {isReview ? t('hotel.review.close') : t('hotel.review.write')}
          </Button>
        </div>
      </div>
      {isReview && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-6">
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
                        handleChangeValue({ field: field, v })
                      }}
                      placeholder={t('hotel.review.textArea')}
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
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-auto lg:px-10 md:px-8 px-6" size={'third'}>
                {addComment.isPending ? <LoadingBtn /> : t('hotel.review.button')}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  )
}

export default memo(ReviewForm)
