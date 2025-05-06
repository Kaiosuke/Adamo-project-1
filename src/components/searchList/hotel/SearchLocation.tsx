import { getLocationHotel } from '@api/hotelRequest'

import InputSearch from '@components/InputSearch'
import { useQueryLocation } from '@hooks/queries/location'
import { TFunction } from 'i18next'
import { memo } from 'react'
import { useDebounce } from 'use-debounce'

interface Props {
  t: TFunction<['search', 'others'], undefined>
  location: string
  setLocation: (_v: string) => void
}

const SearchLocation = ({ location, setLocation, t }: Props) => {
  const [value] = useDebounce(location.trim(), 300)

  const { data: locationData } = useQueryLocation({ key: 'locationHotel', getLocation: getLocationHotel, value })

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
