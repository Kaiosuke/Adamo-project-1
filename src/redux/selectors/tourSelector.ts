import { RootState } from '../index'
import { ITourState } from '../slices/toursSlice'

const tourSelector = (state: RootState): ITourState => state.toursSlice

export { tourSelector }
