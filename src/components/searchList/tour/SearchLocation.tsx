import { getLocationTour } from '@api/tourRequest'
import InputSearch from '@components/InputSearch'
import { useQuery } from '@tanstack/react-query'
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

  const { data: locationData } = useQuery({
    queryKey: ['locationHotel', { value }],
    queryFn: () => getLocationTour({ data: value }),
    enabled: !!value
  })

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
