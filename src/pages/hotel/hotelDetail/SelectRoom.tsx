import { getAllRoom } from '@/api/roomRequest'

import { useQuery } from '@tanstack/react-query'
import Room from './Room'
import { Skeleton } from '@/components/ui/skeleton'

const SelectRoom = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['rooms'],
    queryFn: () => getAllRoom()
  })

  return (
    <>
      <h3 className="text-secondary text-size-xl font-extrabold">Rooms</h3>

      {isLoading || !data?.length ? (
        <Skeleton className="h-screen bg-five mt-4" />
      ) : (
        data.map((room) => <Room key={room.id} room={room} />)
      )}
    </>
  )
}

export default SelectRoom
