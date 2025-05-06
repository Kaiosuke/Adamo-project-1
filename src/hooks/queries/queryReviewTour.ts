import { getAllReviewTour } from '@api/reviewRequest'
import { useQuery } from '@tanstack/react-query'

type TId = string | undefined

const useQueryReviewTour = (id: TId) => {
  return useQuery({
    queryKey: ['reviewsTour', { id }],
    queryFn: () => getAllReviewTour(id as string),
    enabled: id !== undefined
  })
}

export { useQueryReviewTour }
