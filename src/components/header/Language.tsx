import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/select'
import { languageSelector } from '@/redux-toolkit/selectors/languageSelector'
import { changeLanguage, Lg } from '@/redux-toolkit/slices/languageSlice'
import { memo, useCallback, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
  getLinkColor: 'text-secondary' | 'text-third'
}

const Language = ({ getLinkColor }: Props) => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const { lg } = useSelector(languageSelector)

  const dispatch = useDispatch()

  const handleChangeLanguage = useCallback(
    (value: Lg) => {
      i18n.changeLanguage(value)
      dispatch(changeLanguage(value))
    },
    [dispatch, i18n]
  )

  useEffect(() => {
    i18n.changeLanguage(lg)
  }, [i18n, lg])

  return (
    <div className="ml-6">
      <Select value={lg} onValueChange={handleChangeLanguage}>
        <SelectTrigger className="w-[60px] text-secondary ">
          <div className={getLinkColor}>{currentLanguage}</div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="en">en</SelectItem>
            <SelectItem value="vi">vi</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default memo(Language)
