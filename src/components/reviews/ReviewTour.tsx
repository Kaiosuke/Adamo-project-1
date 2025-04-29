import Avatar1 from '@/assets/images/Avatar-1.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IReviewTour } from '@/interfaces/review'
import { FaStar } from 'react-icons/fa6'
import { TbPointFilled } from 'react-icons/tb'

import { deleteReviewTour, editReviewTour } from '@/api/reviewRequest'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { commentSchema } from '@/schemas/reviewSchema'
import { useTranslation } from 'react-i18next'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
import LoadingBtn from '../LoadingList/LoadingBtn'
import Rating from '../Rating'
import { Textarea } from '../ui/textarea'

import { HiDotsVertical } from 'react-icons/hi'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { IAuth } from '@/interfaces/auth'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteForever } from 'react-icons/md'

const ReviewTour = ({ review, user }: { review: IReviewTour; user?: IAuth }) => {
  const queryClient = useQueryClient()

  const { t } = useTranslation('detail')

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)

  const deleteComment = useMutation({
    mutationFn: (id: string) => deleteReviewTour({ id }),
    onSuccess: () => {
      toast.success('Delete successfully', {
        style: {
          backgroundColor: '#4caf50',
          color: '#ffffff'
        }
      })
      queryClient.invalidateQueries({ queryKey: ['reviewsTour'] })
      setIsOpen(false)
    }
  })

  const updateComment = useMutation({
    mutationFn: ({ id, data }: { id: string; data: { des: string; rate: number } }) => editReviewTour({ data, id }),
    onSuccess: () => {
      toast.success('Edit comment successfully', {
        style: {
          backgroundColor: '#4caf50',
          color: '#ffffff'
        }
      })
      queryClient.invalidateQueries({ queryKey: ['reviewsTour'] })
      setIsOpenEdit(false)
    }
  })

  const handleDeleteComment = () => {
    deleteComment.mutate(String(review.id))
  }

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      message: review.des,
      star: review.rate
    }
  })

  const onSubmit = (values: z.infer<typeof commentSchema>) => {
    updateComment.mutate({ id: String(review.id), data: { des: values.message, rate: values.star } })
  }

  return (
    <>
      <div className="flex justify-between items-start">
        <div>
          <div className="flex gap-6 items-center">
            <Avatar className="w-[83px] h-[83px]">
              <AvatarImage src={Avatar1} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-4 text-secondary">
              <div className="text-secondary flex items-center gap-2">
                {Array.from({ length: review.rate }).map((_, index) => (
                  <FaStar className="text-nine" key={index} />
                ))}
              </div>
              <div className="font-bold">{review.title}</div>
              <div className="flex gap-2 items-center">
                {review.opinion} <TbPointFilled className="w-3 text-five" /> {review.time}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="leading-6 text-four h-[60px]">{review.des}</p>
          </div>
        </div>
        {user?.uid === review.userId && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <HiDotsVertical className="text-xl cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="cursor-pointer text-xl text-six flex justify-between items-center"
                onClick={() => setIsOpenEdit(true)}
              >
                Edit
                <CiEdit className="text-2xl text-six " />
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="cursor-pointer text-xl text-red-600 flex justify-between items-center"
                onClick={() => setIsOpen(true)}
              >
                Delete
                <MdDeleteForever className="text-2xl  text-red-600" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      <div className="str-line-2" />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader className="p-4">
            <DialogTitle className="text-size-4xl">Are you absolutely sure?</DialogTitle>
            <DialogDescription className="text-xl mt-4 ">
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </DialogDescription>
            <div className="flex gap-5 justify-end mt-6">
              <Button variant={'primary'} className="flex-[0_0_30%]" onClick={handleDeleteComment}>
                Delete
              </Button>
              <Button variant={'six'} className="flex-[0_0_30%]" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={isOpenEdit} onOpenChange={setIsOpenEdit}>
        <DialogContent>
          <DialogHeader className="p-4">
            <DialogTitle className="text-size-4xl">Edit Comment</DialogTitle>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-6">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex gap-2">
                        <Textarea
                          value={field.value}
                          onChange={(v) => {
                            field.onChange(v)
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
                    {updateComment.isPending ? <LoadingBtn /> : t('hotel.review.button')}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ReviewTour
