import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import { useQueryTotalReviews } from '@hooks/queries/queryReviewHotel'
import { IHotel } from '@interfaces/hotel'
import { memo } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import Descriptions from './Descriptions'
import Reviews from './Reviews'
import SelectRoom from './SelectRoom'

interface Props {
  data: IHotel
}

const HotelDetailTabs = ({ data }: Props) => {
  const { id } = useParams()

  const { data: totalScore, isLoading } = useQueryTotalReviews({ id })

  const { t } = useTranslation('detail')

  return (
    <>
      <Tabs defaultValue="selectRoom" className="lg:pt-10 pt-6">
        <TabsList className="w-full bg-third justify-between p-0">
          <TabsTrigger
            value="selectRoom"
            className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
          >
            {t('hotel.selectRoom.title')}
          </TabsTrigger>
          <TabsTrigger
            value="descriptions"
            className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
          >
            {t('hotel.description.title')}
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
          >
            {isLoading ? (
              <div className="flex items-center gap-4 text-size-2xl">Reviews: Loading...</div>
            ) : (
              <Trans ns="detail" i18nKey={'hotel.review.review'} count={totalScore?.length} />
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
