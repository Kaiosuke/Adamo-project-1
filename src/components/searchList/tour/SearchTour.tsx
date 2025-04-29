import { getLocationTour } from '@api/tourRequest'
import DatePickerSingle from '@components/DatePickerSingle'
import GuestCom from '@components/GuestCom'
import InputSearch from '@components/InputSearch'
import LoadingSearch from '@components/LoadingList/LoadingSearch'
import TypeCom from '@components/TypeCom'
import { tourSelector } from '@redux-toolkit/selectors/tourSelector'
import { filterByGuest, filterByLocation, filterByType } from '@redux-toolkit/slices/toursSlice'
import { useQuery } from '@tanstack/react-query'
import { addDays } from 'date-fns'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import { useDebounce, useDebouncedCallback } from 'use-debounce'
import { NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params'
import SearchTourBtn from './SearchTourBtn'

const SearchTour = ({ isHome = false }: { isHome?: boolean }) => {
  const { guests, types, filter, loading } = useSelector(tourSelector)

  const { location, type, guest } = filter
  const { t } = useTranslation('search')

  const dispatch = useDispatch()

  const [query, setQuery] = useQueryParams({
    from: StringParam,
    _page: withDefault(NumberParam, 0)
  })

  const from = useMemo(() => (query.from ? new Date(query.from) : addDays(new Date(), 1)), [query.from])

  const [date, setDate] = useState(from)

  const [locationFilter, setLocationFilter] = useState(location)
  const [typeFilter, setTypeFilter] = useState(type)

  const handleFilterGuest = useCallback(
    (value: string) => {
      dispatch(filterByGuest(value))
    },
    [dispatch]
  )

  const navigate = useNavigate()

  const handleFilter = useDebouncedCallback(() => {
    dispatch(filterByLocation(locationFilter))
    dispatch(filterByType(typeFilter))
    toast.success('Filter successfully', {
      style: {
        backgroundColor: '#4caf50',
        color: '#ffffff'
      }
    })
    localStorage.setItem('currentPageTour', '0')
    navigate(`/tours?from=${from.toDateString()}`)
  }, 300)

  const [value] = useDebounce(locationFilter.trim(), 300)

  const { data: locationData } = useQuery({
    queryKey: ['locationHotel', { value }],
    queryFn: () => getLocationTour({ data: value }),
    enabled: !!value
  })

  return (
    <div
      className={`h-full bg-third/80 w-full ${
        !isHome ? 'flex-[0_0_30%] h-[503px] 2xl:mr-48 lg:mr-32 md:mr-12 sm:mr-24 mr-8' : ''
      }`}
    >
      {loading ? (
        <div className="lg:h-[503px] w-[100%]">
          <LoadingSearch />
        </div>
      ) : (
        <div className="lg:px-8 lg:py-8 w-full h-full p-4">
          <p className="text-size-2xl">{t('tour.description')}</p>
          <div className="lg:mt-6 mt-4 flex flex-col lg:gap-4 gap-2">
            <InputSearch
              location={locationFilter}
              setLocation={setLocationFilter}
              locationData={locationData}
              placeHolder="Search Location Tour"
            />
            <div className="group bg-third lg:h-[64px] md:h-[48px] h-[36px] flex items-center hover:bg-primary">
              <DatePickerSingle date={date} setDate={(v) => setDate(v ?? date)} setQuery={setQuery} />
            </div>

            <TypeCom data={types} setTypeFilter={setTypeFilter} t={t} type={type} />

            <GuestCom data={guests} guest={guest} setGuest={handleFilterGuest} t={t} />
          </div>
          <SearchTourBtn handleFilter={handleFilter} />
        </div>
      )}
    </div>
  )
}

export default SearchTour
