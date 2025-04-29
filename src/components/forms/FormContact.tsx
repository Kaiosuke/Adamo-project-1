import { FormControl, FormField, FormItem, FormMessage } from '@components/ui/form'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

interface IFormContact<T extends FieldValues> {
  form: UseFormReturn<T>
  name: Path<T>
  placeholder?: string
  isArea?: boolean
  isImportant?: boolean
}

const FormContact = <T extends FieldValues>({ form, name, placeholder = '', isArea = false }: IFormContact<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl className="relative ">
            <div className="">
              {isArea ? (
                <Textarea
                  {...field}
                  id="name"
                  placeholder={placeholder}
                  className="h-[138px] max-h-[360px] rounded-none placeholder:text-four mt-4 bg-seven"
                />
              ) : (
                <Input
                  {...field}
                  id={name}
                  placeholder={placeholder}
                  className="peer mt-4 z-[1] placeholder:text-four shadow-none rounded-none bg-seven placeholder:font-bold pl-4 py-0 h-[54px] ring-transparent focus-visible:ring-transparent "
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

export default FormContact
