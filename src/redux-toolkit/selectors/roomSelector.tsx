import { RootState } from '..'
import { IStateRoom } from '../slices/roomsSlice'

const roomSelector = (state: RootState): IStateRoom => state.roomsSlice

export { roomSelector }
