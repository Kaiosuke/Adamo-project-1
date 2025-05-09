import { cn } from '@lib/utils'
import * as React from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'
import { enUS, vi } from 'react-day-picker/locale'

import i18n from '@i18n/i18n'

function Calendar({ className, classNames, showOutsideDays = true, ...props }: React.ComponentProps<typeof DayPicker>) {
  const lg = i18n.language

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-4', className)}
      locale={lg === 'en' ? enUS : vi}
      classNames={{
        ...classNames
      }}
      {...props}
    />
  )
}

export { Calendar }
