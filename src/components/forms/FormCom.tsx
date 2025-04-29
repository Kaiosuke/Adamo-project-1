import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form'
import { useCallback } from 'react'
import { ControllerRenderProps, FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { FaStarOfLife } from 'react-icons/fa6'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

interface IFormComp<T extends FieldValues> {
  form: UseFormReturn<T>
  title: string
  name: Path<T>
  placeholder?: string
  isArea?: boolean
  isImportant?: boolean
  setQuery?: (_query: Record<string, unknown>) => void
}

const FormComp = <T extends FieldValues>({
  form,
  title,
  name,
  placeholder = '',
  isArea = false,
  isImportant = false,
  setQuery
}: IFormComp<T>) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, field: ControllerRenderProps<T, Path<T>>) => {
      field.onChange(e.target.value)
      if (setQuery) {
        setQuery({ [name]: e.target.value })
      }
    },
    [name, setQuery]
  )

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl className="relative ">
            <div className="">
              <FormLabel htmlFor={name} className="font-medium text-base">
                {title}
                {isImportant ? <FaStarOfLife className="text-red-600 text-[6px] -ml-2" /> : null}
              </FormLabel>
              {isArea ? (
                <Textarea
                  {...field}
                  id="name"
                  placeholder={placeholder}
                  className="h-[138px] max-h-[360px] rounded-none placeholder:text-four mt-4"
                />
              ) : (
                <Input
                  value={field.value}
                  onChange={(e) => {
                    handleChange(e, field)
                  }}
                  id={name}
                  placeholder={placeholder}
                  className="peer mt-4 z-[1] placeholder:text-four shadow-none rounded-none pl-4 py-0 h-[54px] ring-transparent focus-visible:ring-transparent "
                />
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormComp
