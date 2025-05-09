import React, { Suspense, useState } from 'react'
import LazyScrollCom from './LazyScrollCom'
import { useTranslation } from 'react-i18next'

interface Props {
  loader: () => Promise<{ default: React.ComponentType<unknown> }>
  fallback?: React.ReactNode
}

const LazyWrapper = ({ loader, fallback }: Props) => {
  const { t } = useTranslation('others')
  const [Component, setComponent] = useState<React.LazyExoticComponent<React.ComponentType<unknown>> | null>(null)

  return (
    <LazyScrollCom
      onVisible={() => {
        if (!Component) {
          const LazyCom = React.lazy(loader)
          setComponent(() => LazyCom)
        }
      }}
    >
      {Component ? (
        <Suspense fallback={fallback ? fallback : <div>{t('loading')}</div>}>
          <Component />
        </Suspense>
      ) : null}
    </LazyScrollCom>
  )
}

export default LazyWrapper
