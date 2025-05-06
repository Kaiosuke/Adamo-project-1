import { getLocationTour } from '@api/tourRequest'
import InputSearch from '@components/InputSearch'
import { useQueryLocation } from '@hooks/queries/location'
import { TFunction } from 'i18next'
import { memo } from 'react'
import { useDebounce } from 'use-debounce'

interface Props {
  t: TFunction<['search', 'others'], undefined>
  locationFilter: string
  setLocationFilter: (_v: string) => void
}

const SearchLocation = ({ t, locationFilter, setLocationFilter }: Props) => {
  const [value] = useDebounce(locationFilter.trim(), 300)

  const { data: locationData } = useQueryLocation({ key: 'locationTour', getLocation: getLocationTour, value })

  return (
    <InputSearch
      location={locationFilter}
      setLocation={setLocationFilter}
      locationData={locationData}
      placeHolder={t('others:searchTour')}
    />
  )
}

export default memo(SearchLocation)
