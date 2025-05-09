import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { forgotPassword } from '@api/authRequest'
import InputAuth from '@components/InputAuth'
import LoadingBtn from '@components/LoadingList/LoadingBtn'
import { Button } from '@components/ui/button'
import { Form } from '@components/ui/form'
import { toastFailed, toastSuccess } from '@lib/toasts'
import { useAppDispatch } from '@redux-toolkit/index'
import { authSelector } from '@redux-toolkit/selectors/authSelector'
import { forgotPasswordSchema, TForgotPasswordValues } from '@schemas/authSchema'
import { Trans, useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const ForgotPassword = () => {
  const { t } = useTranslation('auth')
  const { t: validationValues } = useTranslation('schema')

  const form = useForm<TForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema(validationValues as unknown as (_key: string) => string)),
    defaultValues: {
      email: ''
    }
  })

  const { loading } = useSelector(authSelector)

  const dispatch = useAppDispatch()

  function onSubmit(values: TForgotPasswordValues) {
    ;(async () => {
      try {
        await dispatch(forgotPassword(values.email))
        form.reset()
        toastSuccess({ content: 'Please check your email ' })
      } catch (error) {
        if (typeof error === 'string') toastFailed({ content: error })
      }
    })()
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-start flex-col">
        <h1 className="text-size-5xl text-secondary">{t('forgotPs.title')}</h1>
        <div className="pt-4">
          <Trans ns="auth" i18nKey={'forgotPs.description'} />
        </div>
        <div className="mt-16">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[350px]">
              <InputAuth form={form} name="email" title={t('forgotPs.email')} />
              <div className="flex flex-col gap-6 mt-6">
                <Button variant={'primary'} type="submit" className="text-ten">
                  {loading ? <LoadingBtn /> : `${t('forgotPs.send')}`}
                </Button>
                <Link to="/auth/login">
                  <Button variant={'outline'} type="button">
                    {t('forgotPs.back')}
                  </Button>
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
