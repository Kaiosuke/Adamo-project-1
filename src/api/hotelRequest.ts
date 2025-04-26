import { IHotel } from '@/interfaces/hotel'
import { instanceLocal } from './instance'

const getFiltersHotel = async (): Promise<{
  locations: string[]
  guests: string[]
}> => {
  const resDataLocations = await instanceLocal.get('/locationHotels')
  const resDataGuests = await instanceLocal.get('/guests')

  const [locations, guests] = await Promise.all([resDataLocations.data, resDataGuests.data])
  return { locations, guests }
}

interface IGetHotels {
  _page: number | string
  _limit?: number | string
  _sort?: string
  _order?: string
  location?: string
  score?: string
  prices?: string
  star?: string
}

const getHotels = async ({
  _page = 1,
  _limit = 6,
  _sort = 'price',
  _order = 'asc',
  location = ' ',
  score = '0',
  prices = '0,300',
  star = ''
}: IGetHotels): Promise<{ data: IHotel[]; totalData: number }> => {
  const res = await instanceLocal.get('hotels', {
    params: {
      _page,
      _limit,
      _sort,
      _order,
      score_gte: score,
      location_like: location === 'All' ? ' ' : location,
      price_gte: prices.split(',')[0],
      price_lte: prices.split(',')[1],
      star: star ? star.split(',') : undefined
    }
  })

  return { data: res.data, totalData: res.headers['x-total-count'] }
}

const getHotelById = async (id: number | string): Promise<IHotel> => {
  const res = await instanceLocal.get(`hotels/${id}`)
  return res.data
}

const changeStatusFavorite = async ({ id, data }: { id: number; data: { favorite: boolean } }): Promise<IHotel> => {
  const res = await instanceLocal.patch(`hotels/${id}`, data)
  return res.data
}

const getLocationHotel = async ({ data }: { data: string }): Promise<IHotel[]> => {
  const res = await instanceLocal(`/hotels?location_like=${data}`)
  return res.data
}

export { getFiltersHotel, getHotels, getHotelById, changeStatusFavorite, getLocationHotel }
