import { RootState } from '..'
import { IStateAuth } from '../slices/authSlice'

const authSelector = (state: RootState): IStateAuth => state.authSlice

export { authSelector }
