import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@components/ui/select'
import { TFunction } from 'i18next'
import { memo, SetStateAction } from 'react'
import { CiFlag1 } from 'react-icons/ci'

interface Props {
  type: string[]
  setTypeFilter: (_value: SetStateAction<string[]>) => void
  data: string[]
  t: TFunction<'search', undefined>
}

const TypeCom = ({ data, setTypeFilter, type, t }: Props) => {
  return (
    <div className="group tran-fast bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 p-6 hover:bg-primary">
      <CiFlag1 className="text-primary text-size-lg group-hover:text-third" />
      <Select
        defaultValue={type.length < 1 ? type.toString() : type[0].toString()}
        onValueChange={(value) =>
          setTypeFilter(() => {
            const arr = []
            arr.push(value)
            return arr
          })
        }
      >
        <SelectTrigger className="w-full group-hover:text-third ">
          <SelectValue placeholder={t('tour.type')} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value=" ">All</SelectItem>
            {data.length &&
              data.map((v, index) => (
                <SelectItem value={v} key={index}>
                  {v}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default memo(TypeCom)
