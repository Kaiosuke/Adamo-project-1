import { bookingTour } from '@api/bookingRequest'
import FormComp from '@components/forms/FormCom'
import { Button } from '@components/ui/button'
import { Form } from '@components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IBooking } from '@interfaces/booking'
import { TUserSchemaValues, userSchema } from '@schemas/userSchema'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useDebouncedCallback } from 'use-debounce'

import PayMethod from '@components/PayMethod'
import { toastSuccess } from '@lib/toasts'
import { useTranslation } from 'react-i18next'
import { StringParam, useQueryParams, withDefault } from 'use-query-params'

interface Props {
  booking: IBooking
  discount?: number
}

const FormInfoUser = ({ booking, discount }: Props) => {
  const { t } = useTranslation('checkout')

  const { t: validationValues } = useTranslation('schema')

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

  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: (data: IBooking) => bookingTour({ data }),
    onSuccess: async () => {
      await navigate('/thanks')
      toastSuccess({ content: 'Booking tour' })
      form.reset()
    }
  })

  const onSubmit = useDebouncedCallback((values: TUserSchemaValues) => {
    const user = {
      ...values,
      phoneNumber: Number(values.phoneNumber)
    }
    const priceDiscount = discount ? booking.totalPrice - booking.totalPrice * discount : booking.totalPrice
    mutate({
      day: booking.day,
      duration: booking.duration,
      guests: booking.guests,
      totalPrice: priceDiscount,
      tourId: booking.tourId,
      user: user
    })
  }, 300)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-2">
        <h3 className="text-size-xl">{t('tour.travelDetail.title')}</h3>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 xl:gap-8 gap-6">
            <FormComp
              form={form}
              title={t('tour.travelDetail.firstName')}
              name="firstName"
              placeholder={t('tour.travelDetail.firstName')}
              isImportant
              setQuery={setQuery}
            />
            <FormComp
              form={form}
              title={t('tour.travelDetail.lastName')}
              name="lastName"
              placeholder={t('tour.travelDetail.lastName')}
              isImportant
              setQuery={setQuery}
            />

            <FormComp
              form={form}
              title={t('tour.travelDetail.email')}
              name="email"
              placeholder="email@domain.com"
              isImportant
              setQuery={setQuery}
            />
            <FormComp
              form={form}
              title={t('tour.travelDetail.phone')}
              name="phoneNumber"
              placeholder={t('tour.travelDetail.phone')}
              isImportant
              setQuery={setQuery}
            />
          </div>
        </div>

        <h3 className="text-size-xl">{t('tour.address.address')}</h3>
        <div className="flex flex-col gap-6">
          <FormComp
            form={form}
            title={t('tour.address.address')}
            placeholder={t('tour.address.address')}
            name="address"
            setQuery={setQuery}
          />
          <div className="grid grid-cols-2 xl:gap-8 gap-6">
            <FormComp
              form={form}
              title={t('tour.address.city')}
              placeholder={t('tour.address.city')}
              name="city"
              setQuery={setQuery}
            />
            <FormComp
              form={form}
              title={t('tour.address.state')}
              placeholder={t('tour.address.state')}
              name="state"
              setQuery={setQuery}
            />
            <FormComp
              form={form}
              title={t('tour.address.zipCode')}
              placeholder={t('tour.address.zipCode')}
              name="zipCode"
              setQuery={setQuery}
            />
            <FormComp
              form={form}
              title={t('tour.address.country')}
              placeholder={t('tour.address.country')}
              name="country"
              setQuery={setQuery}
            />
          </div>
        </div>
        <div className="">
          <FormComp
            form={form}
            title={t('tour.address.requirement')}
            placeholder={t('tour.address.requirement')}
            name="requirement"
            setQuery={setQuery}
            isArea
          />
        </div>
        <PayMethod form={form} name="payMethod" setQuery={setQuery} />
        <Button type="submit" className="lg:w-full w-fit px-10">
          {t('tour.button')}
        </Button>
      </form>
    </Form>
  )
}

export default FormInfoUser
