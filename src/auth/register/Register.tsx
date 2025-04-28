import { registerSchema } from '@/schemas/authSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import InputAuth from '@/components/InputAuth'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { FaFacebook } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router'
import { useAppDispatch } from '@/redux/index'
import { loginByFb, register } from '@/api/authRequest'
import { useSelector } from 'react-redux'
import { authSelector } from '@/redux/selectors/authSelector'
import LoadingBtn from '@/components/LoadingList/LoadingBtn'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirm: ''
    }
  })

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLoginByFb = async () => {
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
    }
  }

  const { loading } = useSelector(authSelector)

  function onSubmit(values: z.infer<typeof registerSchema>) {
    ;(async () => {
      try {
        await dispatch(
          register({
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName
          })
        ).unwrap()
        toast.success('Register Success', {
          style: {
            backgroundColor: '#4caf50',
            color: '#ffffff'
          }
        })
        form.reset()
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

  const { t } = useTranslation('auth')

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-start flex-col">
        <h1 className="text-size-5xl text-secondary">{t('signUp.title')}</h1>
        <div className="pt-4">{t('signUp.description')}</div>
        <div className="mt-16">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[350px]">
              <div className="flex items-center gap-4 ">
                <InputAuth form={form} name="firstName" title={t('signUp.firstName')} />
                <InputAuth form={form} name="lastName" title={t('signUp.lastName')} />
              </div>
              <InputAuth form={form} name="email" title={t('signUp.email')} />

              <InputAuth form={form} name="password" title={t('signUp.password')} type="password" />
              <InputAuth form={form} name="confirm" title={t('signUp.confirm')} type="password" />

              <div className="flex flex-col gap-6 mt-6">
                <Button variant={'primary'} type="submit">
                  {loading ? (
                    <>
                      <LoadingBtn />
                    </>
                  ) : (
                    `${t('signUp.register')}`
                  )}
                </Button>
                <Button variant={'six'} type="button" onClick={handleLoginByFb}>
                  <span>
                    <FaFacebook className="text-size-lg" />
                  </span>
                  {t('signUp.signFb')}
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-6">
            <span className="text-four">
              {t('signUp.already')}{' '}
              <Link to="/auth/login" className="text-primary">
                {t('signUp.SignIN')}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
