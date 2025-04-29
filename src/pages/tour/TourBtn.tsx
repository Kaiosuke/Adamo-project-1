import { Button } from '@components/ui/button'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  onFilter: () => void
}

const TourBtn = ({ onFilter }: Props) => {
  const { t } = useTranslation('others')

  return (
    <div className="py-4">
      <Button variant={'primary'} size={'third'} className="h-[48px]" onClick={onFilter}>
        {t('applyFilter')}
      </Button>
    </div>
  )
}

export default memo(TourBtn)
