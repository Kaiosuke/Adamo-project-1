import { Button } from '@components/ui/button'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

const NotFoundPage = () => {
  const { t } = useTranslation('notFound')

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          {t('title')}
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">{t('description')}</p>
        <div className="mt-10 flex items-center justify-center sm:flex-row flex-col md:gap-6 gap-2">
          <Link to="/">
            <Button variant={'primary'} className="px-6 text-ten">
              {t('buttonNotFound')}
            </Button>
          </Link>
          <Link to="/contact" className="text-sm font-semibold text-gray-900">
            <Button variant={'six'} className="px-6 text-ten">
              {t('buttonContact')}
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
