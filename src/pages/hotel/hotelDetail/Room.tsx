import { changeStatusRoom } from '@api/roomRequest'
import LoadedImageWidth from '@components/LoadingList/LoadedImageWidth'
import SwiperCom from '@components/swiper/SwiperCom'

import { Button } from '@components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/ui/dialog'
import { handleFormatMoney, handleSeparateWord } from '@helper/index'
import { IRoom } from '@interfaces/room'
import { addRoom, deleteRoom } from '@redux-toolkit/slices/roomsSlice'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaCheck, FaImage } from 'react-icons/fa6'
import { IoBedOutline } from 'react-icons/io5'
import { LuUsers } from 'react-icons/lu'
import { RiShape2Line } from 'react-icons/ri'

import { useDispatch } from 'react-redux'
import { toast } from 'sonner'
import { useDebouncedCallback } from 'use-debounce'

const Room = ({ room }: { room: IRoom }) => {
  const { t } = useTranslation(['detail', 'others'])
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const queryClient = useQueryClient()

  const handleAddRoom = (room: IRoom) => {
    const roomData = {
      data: room,
      quantity: 1
    }
    dispatch(addRoom(roomData))
  }

  const handleDeleteRoom = (room: IRoom) => {
    dispatch(deleteRoom(room))
  }

  const changeStatusMutation = useMutation({
    mutationFn: ({ roomId, status }: { roomId: number; status: boolean }) => changeStatusRoom(roomId, status)
  })

  const handleSelectRoom = useDebouncedCallback((room: IRoom, status: boolean) => {
    changeStatusMutation.mutate(
      { roomId: room.id, status },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['rooms'] })
          handleAddRoom(room)
          toast.success('Add room Successfully', {
            style: {
              backgroundColor: '#4caf50',
              color: '#ffffff'
            }
          })
        }
      }
    )
  }, 300)

  const handleNotSelectRoom = useDebouncedCallback((room: IRoom, status: boolean) => {
    changeStatusMutation.mutate(
      { roomId: room.id, status },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['rooms'] })
          handleDeleteRoom(room)
          toast.success('Remove room Successfully', {
            style: {
              backgroundColor: '#4caf50',
              color: '#ffffff'
            }
          })
        }
      }
    )
  }, 300)

  return (
    <div className="flex flex-col gap-4 mt-4" key={room.id}>
      <div className="w-full bg-seven">
        <div className="relative flex md:flex-row flex-col">
          <div className="w-[200px]">
            <LoadedImageWidth alt={room.type} thumbnail={room.thumbnail} />
          </div>

          <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-four flex justify-center items-center">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger>
                <FaImage className="text-third cursor-pointer" onClick={() => setOpen(true)} />
              </DialogTrigger>
              <DialogContent className="2xl:max-w-[1200px] md:max-w-[90%] m-auto 2xl:h-fit h-[60%] pb-6">
                <DialogHeader>
                  <DialogTitle className="text-secondary text-size-3xl px-6 pt-6">{room.type}</DialogTitle>
                </DialogHeader>

                <div className="flex gap-10 lg:flex-row flex-col overflow-auto px-6">
                  <div className="lg:flex-[1_0_auto] flex-[0_0_100%] lg:max-w-[635px] w-full">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="line-through text-four">
                          {handleFormatMoney(room.price * 0.1 + room.price)}
                        </span>
                        <span className="text-size-2xl text-red-700 font-bold">{handleFormatMoney(room.price)}</span>
                        <span className="text-four">/night</span>
                      </div>
                      <div>
                        {room.quantity < 1 ? (
                          <Button
                            variant={'eight'}
                            size={'third'}
                            className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full cursor-not-allowed"
                          >
                            {t('hotel.selectRoom.outOfRoom')}
                          </Button>
                        ) : !room.status ? (
                          <div>
                            <Button
                              variant={'outline'}
                              size={'third'}
                              type="button"
                              className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full"
                              onClick={() => {
                                handleSelectRoom(room, true)
                              }}
                            >
                              {t('hotel.selectRoom.selectRoom')}
                            </Button>
                          </div>
                        ) : (
                          <Button
                            variant={'primary'}
                            size={'third'}
                            type="button"
                            className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full"
                            onClick={() => {
                              handleDeleteRoom(room)
                              handleNotSelectRoom(room, false)
                            }}
                          >
                            <FaCheck className="text-third" />
                            {t('hotel.selectRoom.selected')}
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 h-[520px]">
                      <SwiperCom images={room.images} />
                    </div>
                  </div>
                  <div className="flex-[1_1_auto]">
                    <div className="flex items-center justify-between text-six">
                      <div className="flex items-center gap-1">
                        <RiShape2Line className="text-secondary text-lg" />
                        <span> {handleFormatMoney(room.price)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoBedOutline className="text-secondary text-lg" />
                        <span>{room.beds}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <LuUsers className="text-secondary text-lg" />
                        <span>{room.capacity}</span>
                      </div>
                    </div>
                    <div className="str-line" />
                    <div className="text-four ">
                      {handleSeparateWord(room.description).map((v, index) => (
                        <p key={index} className="mt-4">
                          {v}
                        </p>
                      ))}
                    </div>
                    <div className="str-line" />

                    <div className="">
                      <span className="text-secondary font-bold text-size-lg">{t('others:roomFacilities')}:</span>
                      <ul className="text-four grid grid-cols-2 gap-2 mt-2">
                        {room.features.map((v, index) => (
                          <li className="flex items-center gap-2" key={index}>
                            <span className="text-lg text-[#28B554]">
                              <FaCheck />
                            </span>
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="py-2 px-4 w-full">
            <div className="flex flex-col gap-1.5">
              <h4 className="text-secondary text-size-xl">{room.type}</h4>
              <div className="flex sm:items-center justify-between text-four sm:flex-row flex-col items-start">
                <div className="flex items-center gap-1">
                  <RiShape2Line className="text-secondary text-lg" />
                  <span>{room.square}</span>
                </div>
                <div className="flex items-center gap-1">
                  <IoBedOutline className="text-secondary text-lg" />
                  <span>{room.beds}</span>
                </div>
                <div className="flex items-center gap-1">
                  <LuUsers className="text-secondary text-lg" />
                  <span>
                    {room.capacity} {t('others:guest')}
                  </span>
                </div>
              </div>
              <div className="text-four flex gap-2">
                {room.features.slice(1, 3).map((v, index) => (
                  <span key={index} className="flex gap-2 items-center">
                    {v} •
                  </span>
                ))}
                <span className="text-six font-bold hover:underline cursor-pointer" onClick={() => setOpen(true)}>
                  {room.features.length - 2} {t('others:more')}
                </span>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              {room.quantity < 1 ? (
                <Button
                  variant={'eight'}
                  size={'third'}
                  className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full cursor-not-allowed"
                >
                  {t('hotel.selectRoom.outOfRoom')}
                </Button>
              ) : !room.status ? (
                <div>
                  <Button
                    variant={'outline'}
                    size={'third'}
                    type="button"
                    className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full"
                    onClick={() => {
                      handleSelectRoom(room, true)
                    }}
                  >
                    {t('hotel.selectRoom.selectRoom')}
                  </Button>
                </div>
              ) : (
                <Button
                  variant={'primary'}
                  size={'third'}
                  type="button"
                  className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full"
                  onClick={() => {
                    handleDeleteRoom(room)
                    handleNotSelectRoom(room, false)
                  }}
                >
                  <FaCheck className="text-third" />
                  {t('hotel.selectRoom.selected')}
                </Button>
              )}

              <div>
                <span className="text-red-600 text-size-xl font-bold">{handleFormatMoney(room.price)}</span>
                <span className="text-four">/{t('others:night')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Room)
