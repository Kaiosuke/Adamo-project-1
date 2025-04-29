/* eslint-disable quotes */
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@lib/utils'

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer select-none justify-center gap-2 whitespace-nowrap w-full h-[32rem] text-base font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-transparent text-primary bg-opacity-0 shadow-xs hover:bg-primary hover:text-third dark:bg-input/30 dark:border-input dark:hover:bg-input/50 text-primary border-primary',
        primary: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/80',
        secondary: 'bg-secondary text-secondary-foreground h-[18rem] shadow-xs hover:bg-secondary/80',
        third: 'bg-third text-third-foreground shadow-xs bg:opacity-90 hover:bg-third/80',
        five: 'bg-five text-secondary shadow-xs bg:opacity-90 hover:bg-five/80',
        six: 'bg-six text-six-foreground text-third shadow-xs bg:opacity-90 hover:bg-six/80',
        seven: 'bg-seven text-secondary shadow-xs bg:opacity-90 hover:bg-seven/80',
        eight: 'bg-eight text-third shadow-xs bg:opacity-90 hover:bg-eight/80',
        nine: 'bg-nine text-third shadow-xs bg:opacity-90 hover:bg-nine/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'lg:h-[56px] md:h-[48px] h-[40px] has-[>svg]:px-3',
        secondary: 'md:h-[38px] h-[32px] has-[>svg]:px-3',
        third: 'lg:h-[48px] md:h-[40px] h-[36px] has-[>svg]:px-3',
        four: 'h-full w-full',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-[20px] rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
