import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/ui/select'
import i18n from '@i18n/i18n'
import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params'

const sortListEN = [
  {
    title: 'Price: Low to High',
    value: 'price-asc'
  },
  {
    title: 'Price: High to Low',
    value: 'price-desc'
  },
  {
    title: 'Rate: Low to High',
    value: 'score-asc'
  },
  {
    title: 'Rate: High to Low',
    value: 'score-desc'
  }
]
const sortListVI = [
  {
    title: 'Giá: Thấp đến Cao',
    value: 'price-asc'
  },
  {
    title: 'Giá: Cao đến Thấp',
    value: 'price-desc'
  },
  {
    title: 'Đánh giá: Thấp đến Cao',
    value: 'score-asc'
  },
  {
    title: 'Đánh giá: Cao đến Thấp',
    value: 'score-desc'
  }
]

const SortHotel = () => {
  const [query, setQuery] = useQueryParams({
    _page: withDefault(NumberParam, 1),
    _sort: StringParam,
    _order: StringParam
  })

  const defaultValue = query._sort + '-' + query._order

  const handleSelect = (v: string) => {
    const [sort, order] = v.split('-')
    setQuery({ _sort: sort, _order: order, _page: 1 })
    toast.success('Sort successfully', {
      style: {
        backgroundColor: '#4caf50',
        color: '#ffffff'
      }
    })
  }

  useTranslation('others')

  const currentLanguage = i18n.language

  const handleLanguage = useMemo(() => {
    if (currentLanguage === 'en') {
      return sortListEN
    } else {
      return sortListVI
    }
  }, [currentLanguage])

  return (
    <>
      <Select
        defaultValue={!defaultValue.includes('undefined') ? defaultValue : handleLanguage[0].value}
        onValueChange={handleSelect}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort" className="placeholder:text-primary text-primary" />
        </SelectTrigger>
        <SelectContent>
          <SelectContent>
            {handleLanguage.map((v, index) => (
              <SelectItem value={v.value} key={index}>
                {v.title}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectContent>
      </Select>
    </>
  )
}

export default memo(SortHotel)
