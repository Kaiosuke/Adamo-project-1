import Rating from '@/components/Rating'
import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { useAppDispatch } from '@/redux'
import { commentSchema } from '@/schemas/reviewSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'
import { z } from 'zod'

import { addReviewTour } from '@/api/reviewRequest'
import { IReviewTourLackId } from '@/interfaces/review'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useDebouncedCallback } from 'use-debounce'

interface Props {
  id: string
  setCurrentPage: (v: number) => void
}

const TourReviewForm = ({ id, setCurrentPage }: Props) => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      message: '',
      star: 0
    }
  })

  const queryClient = useQueryClient()

  const onSubmit = useDebouncedCallback((values: z.infer<typeof commentSchema>) => {
    ;(async () => {
      if (id) {
        const data: IReviewTourLackId = {
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
          toast.success('Comment successfully!!', {
            style: {
              backgroundColor: '#4caf50',
              color: '#ffffff'
            }
          })
          form.reset({
            message: '',
            star: 0
          })
          queryClient.invalidateQueries({
            queryKey: ['reviewsTour', { id }]
          })
          setCurrentPage(0)
        } catch (error) {
          toast.error(String(error), {
            style: {
              backgroundColor: '#FF0B55',
              color: '#ffffff'
            }
          })
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
                  placeholder="Type anything"
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
            Comment
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default TourReviewForm
