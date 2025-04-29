import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import { Button } from '@components/ui/button'
import { Calendar } from '@components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover'
import { cn } from '@lib/utils'
import { memo } from 'react'

interface Props {
  date: Date
  setQuery: (_query: { from: string | null }) => void
  setDate: (_v: Date | undefined) => void
}

function DatePickerSingle({ date, setDate, setQuery }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <Button
          variant={'outline'}
          size={'four'}
          className={cn(
            'justify-start text-left font-normal border-none shadow-none group pe-0 h-full w-full',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-3 text-primary group-hover:text-third ml-6" />
          {date ? format(date, 'PPP') : <span>Departure time</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full h-full p-0">
        <Calendar
          classNames={{
            disabled: 'text-five',
            selected: 'bg-primary text-third',
            day_button: 'hover:bg-six tran-fast w-full h-full cursor-pointer hover:text-third'
          }}
          mode="single"
          selected={date}
          onSelect={(v) => {
            setDate(v)
            setQuery({ from: v ? format(v, 'yyyy-MM-dd') : null })
          }}
          disabled={(date) => {
            const day = new Date()
            return date < day
          }}
        />
      </PopoverContent>
    </Popover>
  )
}

export default memo(DatePickerSingle)
