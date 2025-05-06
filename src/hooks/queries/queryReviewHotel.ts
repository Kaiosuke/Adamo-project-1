/* eslint-disable no-unused-vars */
import { getReviewsHotel } from '@api/reviewRequest'
import { useQuery } from '@tanstack/react-query'

type TId = string | undefined
type TPage = number | undefined

interface IQueryReviewHotel {
  id: TId
  _page?: TPage
  _limit?: number
}

interface IQueryTotalScore<T> {
  id: TId
  key: string
  getReview: ({ id }: { id: string }) => Promise<T>
}

const useQueryReviewHotel = ({ id, _page, _limit }: IQueryReviewHotel) => {
  return useQuery({
    queryKey: ['reviewHotel', { id, _page, _limit }],
    queryFn: () =>
      getReviewsHotel({
        id: id as string,
        _page,
        _limit
      }),
    enabled: id !== undefined
  })
}

const useQueryTotalReviews = ({ id }: Omit<IQueryReviewHotel, '_page' | '_limit'>) => {
  return useQuery({
    queryKey: ['reviewHotel', { id }],
    queryFn: () =>
      getReviewsHotel({
        id: id as string
      }),
    enabled: id !== undefined
  })
}

const useQueryTotalScore = <T>({ id, key, getReview }: IQueryTotalScore<T>) => {
  return useQuery({
    queryKey: [key, 'score'],
    queryFn: () =>
      getReview({
        id: id as string
      }),
    enabled: id !== undefined
  })
}

export { useQueryReviewHotel, useQueryTotalScore, useQueryTotalReviews }
