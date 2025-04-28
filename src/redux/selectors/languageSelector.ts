import { RootState } from '..'
import { IStateLanguage } from '../slices/languageSlice'

const languageSelector = (state: RootState): IStateLanguage => state.languageSlice

export { languageSelector }
