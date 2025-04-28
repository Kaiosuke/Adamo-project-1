import { RootState } from '..'
import { IStateBooking } from '../slices/bookingSlice'

const bookingSelector = (state: RootState): IStateBooking => state.bookingSlice

export { bookingSelector }
