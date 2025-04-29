import { IBooking, IBookingHotel } from '@/interfaces/booking'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IStateBooking {
  loading: boolean
  error: undefined | string
  booking: IBooking | undefined
  bookingHotel: IBookingHotel | undefined
}

const initialState: IStateBooking = {
  loading: false,
  error: undefined,
  booking: undefined,
  bookingHotel: undefined
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state: IStateBooking, action: PayloadAction<IBooking>) => {
      state.booking = action.payload
    },

    addBookingHotel: (state: IStateBooking, action: PayloadAction<IBookingHotel>) => {
      state.bookingHotel = action.payload
    }
  }
})

export default bookingSlice.reducer
export const { addBooking, addBookingHotel } = bookingSlice.actions
