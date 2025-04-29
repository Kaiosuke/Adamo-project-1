import { Button } from '@components/ui/button'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { CiSearch } from 'react-icons/ci'
import { DebouncedState } from 'use-debounce'

interface Props {
  handleFilter: DebouncedState<() => void>
}

const SearchTourBtn = ({ handleFilter }: Props) => {
  const { t } = useTranslation('search')

  return (
    <div className="lg:pt-6 pt-4">
      <Button variant="primary" className="flex justify-center gap-2 text-third" onClick={handleFilter}>
        <CiSearch className="text-size-lg" />
        {t('tour.search')}
      </Button>
    </div>
  )
}

export default memo(SearchTourBtn)
