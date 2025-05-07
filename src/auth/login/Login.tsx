import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { login, loginByFb } from '@api/authRequest'
import InputAuth from '@components/InputAuth'
import LoadingBtn from '@components/LoadingList/LoadingBtn'
import { Button } from '@components/ui/button'
import { Form } from '@components/ui/form'
import { useAppDispatch } from '@redux-toolkit/index'
import { authSelector } from '@redux-toolkit/selectors/authSelector'
import { FaFacebook } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'

import { getSignInSchema, TSignValues } from '@schemas/authSchema'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'

const Login = () => {
  const { t: validationMessage } = useTranslation('schema')

  const form = useForm<TSignValues>({
    resolver: zodResolver(getSignInSchema(validationMessage as unknown as (_key: string) => string)),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [pendingLoginFb, setPendingLoginFb] = useState(false)

  const { t } = useTranslation(['auth', 'schema'])

  const { loading } = useSelector(authSelector)

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  function onSubmit(values: TSignValues) {
    ;(async () => {
      try {
        const user = await dispatch(login({ email: values.email, password: values.password })).unwrap()
        if (user) {
          toast.success('Login Success', {
            style: {
              backgroundColor: '#4caf50',
              color: '#ffffff'
            }
          })
          navigate('/')
        }
      } catch (error) {
        if (typeof error === 'string')
          toast.error(error, {
            style: {
              backgroundColor: '#FF0B55',
              color: '#ffffff'
            }
          })
      }
    })()
  }

  const handleLoginByFb = async () => {
    setPendingLoginFb(true)
    try {
      const user = await dispatch(loginByFb()).unwrap()
      if (user) {
        navigate('/')
        toast.success('Login Success', {
          style: {
            backgroundColor: '#4caf50',
            color: '#ffffff'
          }
        })
      }
    } catch (error) {
      if (typeof error === 'string')
        toast.error(error, {
          style: {
            backgroundColor: '#FF0B55',
            color: '#ffffff'
          }
        })
    } finally {
      setPendingLoginFb(false)
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-start flex-col">
        <h1 className="text-size-5xl text-secondary">{t('signIn.title')}</h1>
        <div className="pt-4">{t('signIn.description')}</div>
        <div className="mt-16">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[350px]">
              <InputAuth form={form} name="email" title={t('signIn.email')} />

              <InputAuth form={form} name="password" title={t('signIn.password')} type="password" />
              <div className="text-right">
                <Link to="/auth/forgot-password" className="text-four text-base">
                  {t('signIn.forgotPs')}
                </Link>
              </div>
              <div className="flex flex-col gap-6 mt-6 ">
                <Button variant={'primary'} type="submit" className="text-ten">
                  {loading ? <LoadingBtn /> : `${t('signIn.title')}`}
                </Button>
                <Button
                  variant={'six'}
                  type="button"
                  onClick={handleLoginByFb}
                  className="text-ten"
                  disabled={pendingLoginFb}
                >
                  {!pendingLoginFb && <FaFacebook className="text-size-lg " />}
                  {pendingLoginFb ? <LoadingBtn /> : `${t('signIn.signFb')}`}
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-6">
            <span className="text-four">
              {t('signIn.accCount')}{' '}
              <Link to="/auth/register" className="text-primary">
                {t('signIn.signUp')}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
