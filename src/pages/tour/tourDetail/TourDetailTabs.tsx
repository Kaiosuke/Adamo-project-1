import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import Additional from './Additional'
import Description from './Description'
import Reviews from './Reviews'
import { Trans, useTranslation } from 'react-i18next'

interface Props {
  currentPage: number
  totalData: number
  averageStar?: number
  pageCount: number
  setCurrentPage: (_v: number) => void
}

const TourDetailTabs = ({ totalData, currentPage, pageCount, averageStar, setCurrentPage }: Props) => {
  const { t } = useTranslation('detail')
  return (
    <Tabs defaultValue="descriptions" className="lg:pt-10 pt-6">
      <TabsList className="w-full bg-third justify-between p-0">
        <TabsTrigger
          value="descriptions"
          className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
        >
          {t('tour.description.title')}
        </TabsTrigger>
        <TabsTrigger
          value="additional"
          className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
        >
          {t('tour.additional.title')}
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
        >
          {!totalData && totalData !== 0 ? (
            <div className="flex items-center gap-4 text-size-2xl">Reviews: Loading...</div>
          ) : (
            <Trans ns="detail" i18nKey={'tour.review.title'} count={totalData}>
              {' '}
            </Trans>
          )}
        </TabsTrigger>
      </TabsList>
      <div className="str-line" />
      <TabsContent value="descriptions">
        <Description />
      </TabsContent>
      <TabsContent value="additional">
        <Additional />
      </TabsContent>
      <TabsContent value="reviews">
        <Reviews
          averageStar={averageStar}
          currentPage={currentPage}
          pageCount={pageCount}
          totalData={totalData}
          setCurrentPage={setCurrentPage}
        />
      </TabsContent>
    </Tabs>
  )
}

export default TourDetailTabs
