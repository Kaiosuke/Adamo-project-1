import { Button } from '@components/ui/button'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { CiSearch } from 'react-icons/ci'

interface Props {
  isHome: boolean
  handleFilter: () => void
}

const SearchHotelBtn = ({ handleFilter, isHome }: Props) => {
  const { t } = useTranslation('search')

  return (
    <div className={` ${isHome ? 'lg:mb-8 mt-4' : 'mt-4'}`}>
      <Button variant="primary" className="flex justify-center gap-2 text-third h-[64px]" onClick={handleFilter}>
        <CiSearch className="text-size-lg " />
        {t('hotel.search')}
      </Button>
    </div>
  )
}

export default memo(SearchHotelBtn)
