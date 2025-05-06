import { getHotelById, getHotels } from '@api/hotelRequest'
import { useQuery } from '@tanstack/react-query'

type TQueryParams = {
  _page: number
  _sort?: string
  _limit?: number
  _order?: string
  location?: string
  score?: string
  prices?: string
  star?: string
  guest?: string
}

type TId = number

const useQueryHotel = ({ _page, _sort, _order, location, score, prices, star, guest, _limit }: TQueryParams) => {
  return useQuery({
    queryKey: ['hotels', { _page, _sort, _order, location, score, prices, star, guest }],
    queryFn: () => getHotels({ _page, _sort, _order, location, score, prices, star, _limit })
  })
}

const useQueryDetailHotel = (id: TId) => {
  return useQuery({
    queryKey: ['hotelDetail', { id: id }],
    queryFn: () => getHotelById(id),
    enabled: id !== undefined
  })
}

export { useQueryDetailHotel, useQueryHotel }
