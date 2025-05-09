import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { contact } from '@api/contactRequest'
import FormContact from '@components/forms/FormContact'
import LoadingBtn from '@components/LoadingList/LoadingBtn'
import { Button } from '@components/ui/button'
import { Form } from '@components/ui/form'
import { IContact } from '@interfaces/contact'
import { toastFailed, toastSuccess } from '@lib/toasts'
import { contactSchema, TContactSchemaValues } from '@schemas/contactSchema'
import { useMutation } from '@tanstack/react-query'
import { Trans, useTranslation } from 'react-i18next'
import { useDebouncedCallback } from 'use-debounce'
import Office from './Office'

const ContactSection = () => {
  const { t } = useTranslation('contact')

  const { t: validationValues } = useTranslation('schema')

  const form = useForm<TContactSchemaValues>({
    resolver: zodResolver(contactSchema(validationValues as unknown as (_key: string) => string)),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    }
  })

  const { mutate, isPending } = useMutation({
    mutationFn: (data: IContact) => contact({ data }),
    onSuccess: () => {
      toastSuccess({ content: 'Contact' })
      form.reset()
    },
    onError: (error) => {
      toastFailed({ content: error })
    }
  })

  const onSubmit = useDebouncedCallback((values: TContactSchemaValues) => {
    mutate({ ...values, phoneNumber: Number(values.phoneNumber) })
  }, 300)

  return (
    <section className="main-container animate-fade-down">
      <div className="flex gap-10 lg:flex-row flex-col-reverse">
        <div className="flex-[1_0_40%] flex flex-col justify-between">
          <div>
            <h2 className="text-secondary text-size-4xl">
              <Trans i18nKey={'contact.title'} ns="contact" />
            </h2>
            <div className="text-four mt-10">
              <Trans i18nKey={'contact.description'} ns="contact" />
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-col justify-between">
                <FormContact form={form} placeholder={t('contact.name')} name="name" />
                <FormContact form={form} placeholder={t('contact.email')} name="email" />
                <FormContact form={form} placeholder={t('contact.phone')} name="phoneNumber" />
                <FormContact form={form} placeholder={t('contact.message')} name="message" isArea />
              </div>
              <div className="w-full text-right">
                <Button variant={'primary'} type="submit">
                  {isPending ? (
                    <>
                      <LoadingBtn />
                    </>
                  ) : (
                    t('contact.submit')
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <Office />
      </div>
    </section>
  )
}

export default ContactSection
