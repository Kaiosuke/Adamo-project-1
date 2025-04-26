import { Button } from '@/components/ui/button'
import { CiSearch } from 'react-icons/ci'

import { getFiltersHotel, getLocationHotel } from '@/api/hotelRequest'
import DatePickerSingle from '@/components/DatePickerSingle'
import { useQuery } from '@tanstack/react-query'
import { addDays } from 'date-fns'
import { memo, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params'

import GuestCom from '@/components/GuestCom'
import InputSearch from '@/components/InputSearch'
import LoadingSearch from '@/components/LoadingList/LoadingSearch'
import { useDebounce } from 'use-debounce'

const SearchHotel = ({ isHome = false }: { isHome?: boolean }) => {
  const { t } = useTranslation('search')

  const [query, setQuery] = useQueryParams({
    location: withDefault(StringParam, ''),
    _page: withDefault(NumberParam, 1),
    guest: StringParam,
    from: StringParam
  })

  const { data, isLoading } = useQuery({
    queryKey: ['filtersHotel'],
    queryFn: () => getFiltersHotel()
  })

  const from = useMemo(() => (query.from ? new Date(query.from) : addDays(new Date(), 1)), [query.from])

  const [date, setDate] = useState(from)
  const [location, setLocation] = useState<string>(query.location)

  const [guest, setGuest] = useState<string>(() => {
    const v = query.guest
    return v ? v : 'All'
  })

  const navigate = useNavigate()

  const handleFilter = useCallback(() => {
    toast.success('Filter successfully', {
      style: {
        backgroundColor: '#4caf50',
        color: '#ffffff'
      }
    })

    navigate(`/hotels?location=${location}&guest=${guest}&from=${from.toDateString()}&_page=1`)
  }, [navigate, location, guest, from])

  const [value] = useDebounce(location.trim(), 300)

  const { data: locationData } = useQuery({
    queryKey: ['locationHotel', { value }],
    queryFn: () => {
      return getLocationHotel({ data: value })
    },
    enabled: !!value
  })

  return (
    <div
      className={`bg-third/80 ${
        isHome ? 'lg:h-[503px] w-[100%]' : 'flex-[0_0_30%] lg:w-auto w-full 2xl:mr-48 lg:mr-32 md:mr-12 sm:mr-24 mr-8 '
      }`}
    >
      {isLoading ? (
        <div className="h-[503px] w-[100%]">
          <LoadingSearch />
        </div>
      ) : (
        <div className="z-10 relative h-full">
          <div className="lg:px-8 lg:py-8 p-4 h-full">
            <div className="text-size-2xl">{t('hotel.title')}</div>
            <div className="flex flex-col justify-between h-full">
              <div className="lg:mt-6 mt-4 flex flex-col lg:gap-4 gap-2">
                {
                  <InputSearch
                    location={location}
                    locationData={locationData}
                    setLocation={setLocation}
                    placeHolder="Search Location Hotel"
                  />
                }

                <div className="group bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center hover:bg-primary">
                  <DatePickerSingle setQuery={setQuery} date={date} setDate={(value) => setDate(value ?? date)} />
                </div>
                {data && <GuestCom guest={guest} setGuest={setGuest} t={t} data={data.guests} />}
              </div>
              <div className={` ${isHome ? 'lg:mb-8 mt-4' : 'mt-4'}`}>
                <Button
                  variant="primary"
                  className="flex justify-center gap-2 text-third h-[64px] "
                  onClick={handleFilter}
                >
                  <CiSearch className="text-size-lg " />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(SearchHotel)
