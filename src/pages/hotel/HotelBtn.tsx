import LoadingBtn from '@/components/LoadingList/LoadingBtn'
import { Button } from '@/components/ui/button'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  loading: boolean
  onClick: () => void
}

const HotelBtn = ({ loading, onClick }: Props) => {
  const { t } = useTranslation('others')

  return (
    <div className="py-4" onClick={onClick}>
      <Button variant={'primary'} size={'third'} className="h-[48px] ">
        {loading ? (
          <>
            <LoadingBtn />
          </>
        ) : (
          t('applyFilter')
        )}
      </Button>
    </div>
  )
}

export default memo(HotelBtn)
