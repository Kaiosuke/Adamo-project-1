import { getAllRoom } from '@api/roomRequest'

import { Skeleton } from '@components/ui/skeleton'
import { useQueryData } from '@hooks/queries/other'
import { useTranslation } from 'react-i18next'
import Room from './Room'

const SelectRoom = () => {
  const { data, isLoading } = useQueryData({ key: 'rooms', getData: getAllRoom })
  const { t } = useTranslation('detail')

  return (
    <>
      <h3 className="text-secondary text-size-xl font-extrabold">{t('hotel.selectRoom.room')}</h3>

      {isLoading || !data?.length ? (
        <Skeleton className="h-screen bg-five mt-4" />
      ) : (
        data.map((room) => <Room key={room.id} room={room} />)
      )}
    </>
  )
}

export default SelectRoom
