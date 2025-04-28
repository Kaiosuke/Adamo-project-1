import { RootState } from '..'
import { IStateReview } from '../slices/reviewsSlice'

const reviewSelector = (state: RootState): IStateReview => state.reviewsSlice

export { reviewSelector }
