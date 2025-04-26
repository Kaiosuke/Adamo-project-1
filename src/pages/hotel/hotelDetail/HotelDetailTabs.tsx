import { getReviewsHotel } from '@/api/reviewRequest'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { IHotel } from '@/interfaces/hotel'
import { useQuery } from '@tanstack/react-query'
import { memo } from 'react'
import { useParams } from 'react-router'
import Descriptions from './Descriptions'
import Reviews from './Reviews'
import SelectRoom from './SelectRoom'

interface Props {
  data: IHotel
}

const HotelDetailTabs = ({ data }: Props) => {
  const { id } = useParams()
  const { data: totalScore, isLoading } = useQuery({
    queryKey: ['reviewHotel', 'score'],
    queryFn: () =>
      getReviewsHotel({
        hotelId: id as string
      }),
    enabled: id !== undefined
  })

  return (
    <>
      <Tabs defaultValue="selectRoom" className="lg:pt-10 pt-6">
        <TabsList className="w-full bg-third justify-between p-0">
          <TabsTrigger
            value="selectRoom"
            className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
          >
            Select room
          </TabsTrigger>
          <TabsTrigger
            value="descriptions"
            className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
          >
            Descriptions
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
          >
            {isLoading ? (
              <div className="flex items-center gap-4 text-size-2xl">Reviews: Loading...</div>
            ) : (
              <>
                {totalScore && Number(totalScore.length) > 0
                  ? `Reviews(${totalScore.length})`
                  : `Review(${totalScore?.length})`}
              </>
            )}
          </TabsTrigger>
        </TabsList>
        <div className="str-line" />
        <TabsContent value="selectRoom">
          <SelectRoom />
        </TabsContent>
        <TabsContent value="descriptions">
          <Descriptions data={data} />
        </TabsContent>
        <TabsContent value="reviews">{totalScore && <Reviews totalScore={totalScore} />}</TabsContent>
      </Tabs>
    </>
  )
}

export default memo(HotelDetailTabs)
