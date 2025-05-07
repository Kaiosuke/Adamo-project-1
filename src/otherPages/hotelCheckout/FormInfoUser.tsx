import FormComp from '@components/forms/FormCom'
import { Button } from '@components/ui/button'
import { Form } from '@components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TUserSchemaValues, userSchema } from '@schemas/userSchema'
import { useForm } from 'react-hook-form'

import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router'

import { bookingHotel } from '@api/bookingRequest'
import PayMethod from '@components/PayMethod'
import { IBookingHotel } from '@interfaces/booking'
import { useMutation } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { useDebouncedCallback } from 'use-debounce'
import { StringParam, useQueryParams, withDefault } from 'use-query-params'

interface Props {
  booking: IBookingHotel
  discount?: number
}

const FormInfoUser = ({ booking, discount }: Props) => {
  const { t } = useTranslation('checkout')

  const { t: validationValues } = useTranslation('schema')

  const [isSubmitted, setIsSubmitted] = useState(false)

  const [query, setQuery] = useQueryParams({
    firstName: withDefault(StringParam, ''),
    lastName: withDefault(StringParam, ''),
    email: withDefault(StringParam, ''),
    phoneNumber: withDefault(StringParam, ''),
    address: withDefault(StringParam, ''),
    city: withDefault(StringParam, ''),
    state: withDefault(StringParam, ''),
    zipCode: withDefault(StringParam, ''),
    country: withDefault(StringParam, ''),
    requirement: withDefault(StringParam, ''),
    payMethod: withDefault(StringParam, '')
  })

  const form = useForm<TUserSchemaValues>({
    resolver: zodResolver(userSchema(validationValues as unknown as (_key: string) => string)),
    defaultValues: {
      firstName: query.firstName,
      lastName: query.lastName,
      email: query.email,
      phoneNumber: query.phoneNumber,
      address: query.address,
      city: query.city,
      state: query.state,
      zipCode: query.zipCode,
      country: query.country,
      requirement: query.requirement,
      payMethod: query.payMethod
    }
  })

  const { watch } = form

  useEffect(() => {
    if (!isSubmitted) {
      const subscription = watch((value) => {
        setQuery({
          ...value
        })
      })
      return () => subscription.unsubscribe()
    }
  }, [watch, isSubmitted, setQuery])

  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: (data: IBookingHotel) => bookingHotel({ data }),
    onSuccess: () => {
      setIsSubmitted(true)
      toast.success('Booking hotel success')
      setIsSubmitted(true)
      form.reset()
      navigate('/thanks')
    }
  })

  const onSubmit = useDebouncedCallback((values: TUserSchemaValues) => {
    const user = {
      ...values,
      phoneNumber: Number(values.phoneNumber)
    }
    const priceDiscount = discount ? booking.totalPrice - booking.totalPrice * discount : booking.totalPrice
    mutate({
      breakFast: booking.breakFast,
      duration: booking.duration,
      extraBed: booking.extraBed,
      guests: booking.guests,
      hotelId: booking.hotelId,
      rooms: booking.rooms,
      totalPrice: priceDiscount,
      user: user
    })
  }, 300)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-2">
        <h3 className="text-size-xl">{t('hotel.travelDetail.title')}</h3>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 xl:gap-8 gap-6">
            <FormComp
              form={form}
              title={t('hotel.travelDetail.firstName')}
              name="firstName"
              placeholder={t('hotel.travelDetail.firstName')}
              isImportant
            />
            <FormComp
              form={form}
              title={t('hotel.travelDetail.lastName')}
              name="lastName"
              placeholder={t('hotel.travelDetail.lastName')}
              isImportant
            />

            <FormComp
              form={form}
              title={t('hotel.travelDetail.email')}
              name="email"
              placeholder="email@domain.com"
              isImportant
            />
            <FormComp
              form={form}
              title={t('hotel.travelDetail.phone')}
              name="phoneNumber"
              placeholder={t('hotel.travelDetail.phone')}
              isImportant
            />
          </div>
        </div>

        <h3 className="text-size-xl">{t('hotel.address.address')}</h3>
        <div className="flex flex-col gap-6">
          <FormComp
            form={form}
            title={t('hotel.address.address')}
            placeholder={t('hotel.address.address')}
            name="address"
          />
          <div className="grid grid-cols-2 xl:gap-8 gap-6">
            <FormComp form={form} title={t('hotel.address.city')} placeholder={t('hotel.address.city')} name="city" />
            <FormComp
              form={form}
              title={t('hotel.address.state')}
              placeholder={t('hotel.address.state')}
              name="state"
            />
            <FormComp
              form={form}
              title={t('hotel.address.zipCode')}
              placeholder={t('hotel.address.zipCode')}
              name="zipCode"
            />
            <FormComp
              form={form}
              title={t('hotel.address.country')}
              placeholder={t('hotel.address.country')}
              name="country"
            />
          </div>
        </div>
        <div className="">
          <FormComp
            form={form}
            title={t('hotel.address.requirement')}
            placeholder={t('hotel.address.requirement')}
            name="requirement"
            isArea
          />
        </div>
        <PayMethod form={form} name="payMethod" setQuery={setQuery} />
        <Button type="submit" className="lg:w-full w-fit px-10">
          {t('hotel.address.requirement')}
        </Button>
      </form>
    </Form>
  )
}

export default FormInfoUser
