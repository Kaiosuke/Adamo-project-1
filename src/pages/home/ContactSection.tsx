import { Trans, useTranslation } from 'react-i18next'

import { zodResolver } from '@hookform/resolvers/zod'
import { sendMailSchema, TSendMailValues } from '@schemas/authSchema'
import { useForm } from 'react-hook-form'

import { contact } from '@api/contactRequest'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@components/ui/form'
import { Input } from '@components/ui/input'
import { IContactOnlyEmail } from '@interfaces/contact'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useDebouncedCallback } from 'use-debounce'

const ContactSection = () => {
  const { t } = useTranslation('others')
  const { t: validationValues } = useTranslation('schema')

  const form = useForm<TSendMailValues>({
    resolver: zodResolver(sendMailSchema(validationValues as unknown as (_key: string) => string)),
    defaultValues: {
      email: ''
    }
  })

  const { mutate } = useMutation({
    mutationFn: (data: IContactOnlyEmail) => contact({ data }),
    onSuccess: () => {
      toast.success('Thanks for contact us', {
        style: {
          backgroundColor: '#4caf50',
          color: '#ffffff'
        }
      })
      form.reset()
    }
  })

  const onSubmit = useDebouncedCallback((values: TSendMailValues) => {
    mutate({ ...values })
  }, 300)

  return (
    <section className="main-container animate-fade-down">
      <div className="lg:flex lg:justify-between">
        <h2 className=" lg:pr-20 pt-0 ">
          <Trans
            i18nKey={'contact.title'}
            components={{
              div: <div className="text-secondary text-size-4xl" />,
              span: <span className="text-primary text-size-4xl" />
            }}
          />
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-4 lg:pt-0 pt-10 ">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
                        {...field}
                        className="h-[48px] rounded-none md:w-[324px] w-auto"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                type="submit"
                className="w-[100px] h-[48px] bg-secondary text-third flex items-center justify-center text-sm cursor-pointer hover:bg-secondary/80"
              >
                {t('send')}
              </button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  )
}

export default ContactSection
