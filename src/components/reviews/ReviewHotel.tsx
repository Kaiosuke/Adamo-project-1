import Avatar1 from '@assets/images/Avatar-1.png'
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { IAuth } from '@interfaces/auth'
import { IReviewHotel } from '@interfaces/review'
import { HiDotsVertical } from 'react-icons/hi'
import { TbPointFilled } from 'react-icons/tb'

import { deleteReviewHotel, editReviewHotel } from '@api/reviewRequest'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@components/ui/dropdown-menu'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteForever } from 'react-icons/md'
import { toast } from 'sonner'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@components/ui/button'
import { Form, FormField, FormItem, FormMessage } from '@components/ui/form'
import { commentSchema, TCommentSchemaValues } from '@schemas/reviewSchema'
import { useTranslation } from 'react-i18next'
import LoadingBtn from '../LoadingList/LoadingBtn'
import Rating from '../Rating'
import { Textarea } from '../ui/textarea'

const ReviewHotel = ({ review, user }: { review: IReviewHotel; user?: IAuth }) => {
  const queryClient = useQueryClient()

  const { t } = useTranslation(['detail', 'others'])
  const { t: validationValues } = useTranslation('schema')

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)

  const deleteComment = useMutation({
    mutationFn: (id: string) => deleteReviewHotel({ id }),
    onSuccess: () => {
      toast.success('Delete successfully', {
        style: {
          backgroundColor: '#4caf50',
          color: '#ffffff'
        }
      })
      queryClient.invalidateQueries({ queryKey: ['reviewHotel'] })
      setIsOpen(false)
    }
  })

  const updateComment = useMutation({
    mutationFn: ({ id, data }: { id: string; data: { des: string; rate: number } }) => editReviewHotel({ data, id }),
    onSuccess: () => {
      toast.success('Edit comment successfully', {
        style: {
          backgroundColor: '#4caf50',
          color: '#ffffff'
        }
      })
      queryClient.invalidateQueries({ queryKey: ['reviewHotel'] })
      setIsOpenEdit(false)
    }
  })

  const handleDeleteComment = () => {
    deleteComment.mutate(String(review.id))
  }

  const form = useForm<TCommentSchemaValues>({
    resolver: zodResolver(commentSchema(validationValues as unknown as (_key: string) => string)),
    defaultValues: {
      message: review.des,
      star: review.rate
    }
  })

  const onSubmit = (values: TCommentSchemaValues) => {
    updateComment.mutate({ id: String(review.id), data: { des: values.message, rate: values.star } })
  }

  return (
    <>
      <div className="str-line-2" />
      <div className="flex justify-between">
        <div className="flex gap-6 items-center">
          <Avatar className="w-[83px] h-[83px]">
            <AvatarImage src={Avatar1} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2 text-secondary">
            <div className="flex items-center gap-1.5 text-primary font-bold">
              <span>Rating {review.rate}</span>
              <TbPointFilled className="text-[10px] text-four" />
              <span>{review.opinion}</span>
            </div>
            <div className="font-bold">{review.title}</div>
            <div className="flex gap-2 items-center">
              NeverMind <TbPointFilled className="w-3 text-five" /> {review.time}
            </div>
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
                {t('others:edit')}
                <CiEdit className="text-2xl text-six " />
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="cursor-pointer text-xl text-red-600 flex justify-between items-center"
                onClick={() => setIsOpen(true)}
              >
                {t('others:delete')}
                <MdDeleteForever className="text-2xl  text-red-600" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      <div className="mt-4">
        <p className="leading-6 text-four h-[60px]">{review.des}</p>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader className="p-4">
            <DialogTitle className="text-size-4xl">{t('others:formDelete.title')}</DialogTitle>
            <DialogDescription className="text-xl mt-4 ">{t('others:formDelete.description')}</DialogDescription>
            <div className="flex gap-5 justify-end mt-6">
              <Button variant={'primary'} className="flex-[0_0_30%]" onClick={handleDeleteComment}>
                {t('others:formDelete.delete')}
              </Button>
              <Button variant={'six'} className="flex-[0_0_30%]" onClick={() => setIsOpen(false)}>
                {t('others:formDelete.close')}
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
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-6 overflow-hidden ">
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
                <div className="w-full mt-6">
                  <FormField
                    control={form.control}
                    name="star"
                    render={({ field }) => (
                      <FormItem>
                        <Rating
                          rating={Number(field.value)}
                          size={30}
                          totalStars={10}
                          onRatingChange={(v) => {
                            field.onChange(Number(v))
                          }}
                        />

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-auto lg:px-10 md:px-8 px-6 mt-4" size={'third'}>
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

export default ReviewHotel
