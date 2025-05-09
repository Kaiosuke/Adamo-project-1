import { zodResolver } from '@hookform/resolvers/zod'
import { newPasswordSchema, TNewPasswordValues } from '@schemas/authSchema'
import { useForm } from 'react-hook-form'

import { changePassword } from '@api/authRequest'
import InputAuth from '@components/InputAuth'
import LoadingBtn from '@components/LoadingList/LoadingBtn'
import LoadingPage from '@components/LoadingList/LoadingPage'
import { Button } from '@components/ui/button'
import { Form } from '@components/ui/form'
import { toastFailed, toastSuccess } from '@lib/toasts'
import { useAppDispatch } from '@redux-toolkit/index'
import { authSelector } from '@redux-toolkit/selectors/authSelector'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'

const ChangePassword = () => {
  const { t } = useTranslation('auth')

  const { t: validationValues } = useTranslation('schema')

  const form = useForm<TNewPasswordValues>({
    resolver: zodResolver(newPasswordSchema(validationValues as unknown as (_key: string) => string)),
    defaultValues: {
      password: '',
      confirm: ''
    }
  })

  const { loading, currentUser } = useSelector(authSelector)

  const dispatch = useAppDispatch()

  function onSubmit(values: TNewPasswordValues) {
    ;(async () => {
      try {
        await dispatch(changePassword(values.password)).unwrap()
        form.reset()
        toastSuccess({ content: 'Change Password' })
      } catch (error) {
        if (typeof error === 'string') toastFailed({ content: error })
      }
    })()
  }

  const navigate = useNavigate()
  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
  }, [currentUser, navigate])

  if (!currentUser) {
    return <LoadingPage />
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-start flex-col">
        <h1 className="text-size-5xl text-secondary">{t('changePs.title')}</h1>
        <div className="pt-4">{t('changePs.description')}</div>
        <div className="mt-16">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[350px]">
              <InputAuth form={form} name="password" title={t('changePs.password')} type="password" />
              <InputAuth form={form} name="confirm" title={t('changePs.confirm')} type="password" />
              <div className="text-right">
                <Link to="/auth/forgot-password" className="text-four text-base hover:underline">
                  {t('changePs.forgot')}
                </Link>
              </div>
              <div className="flex flex-col gap-6 mt-6">
                <Button variant={'primary'} type="submit" className="text-ten">
                  {loading ? <LoadingBtn /> : `${t('changePs.access')}`}
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-6">
            <span className="text-four">
              {t('changePs.accCount')}{' '}
              <Link to="/auth/register" className="text-primary">
                {t('changePs.signUp')}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
