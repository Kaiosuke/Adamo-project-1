import { getLocationHotel } from '@api/hotelRequest'
import { useQuery } from '@tanstack/react-query'

import InputSearch from '@components/InputSearch'
import { useDebounce } from 'use-debounce'
import { TFunction } from 'i18next'
import { memo } from 'react'

interface Props {
  t: TFunction<['search', 'others'], undefined>
  location: string
  setLocation: (_v: string) => void
}

const SearchLocation = ({ location, setLocation, t }: Props) => {
  const [value] = useDebounce(location.trim(), 300)

  const { data: locationData } = useQuery({
    queryKey: ['locationHotel', { value }],
    queryFn: () => {
      return getLocationHotel({ data: value })
    },
    enabled: !!value
  })
  return (
    <InputSearch
      location={location}
      locationData={locationData}
      setLocation={setLocation}
      placeHolder={t('others:searchHotel')}
    />
  )
}

export default memo(SearchLocation)
