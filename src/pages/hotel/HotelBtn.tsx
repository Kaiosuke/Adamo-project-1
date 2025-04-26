import LoadingBtn from '@/components/LoadingList/LoadingBtn'
import { Button } from '@/components/ui/button'
import { memo } from 'react'

interface Props {
  loading: boolean
  onClick: () => void
}

const HotelBtn = ({ loading, onClick }: Props) => {
  return (
    <div className="py-4" onClick={onClick}>
      <Button variant={'primary'} size={'third'} className="h-[48px] ">
        {loading ? (
          <>
            <LoadingBtn />
          </>
        ) : (
          'Apply Filter'
        )}
      </Button>
    </div>
  )
}

export default memo(HotelBtn)
