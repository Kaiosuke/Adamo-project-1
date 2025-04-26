import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useState } from 'react'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
import { Input } from './ui/input'

interface IInputAuth<T extends FieldValues> {
  form: UseFormReturn<T>
  title: string
  name: Path<T>
  type?: string
}

const InputAuth = <T extends FieldValues>({ form, title, name, type = 'text' }: IInputAuth<T>) => {
  const [showPS, setShowPs] = useState<boolean>(false)

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl className="relative ">
            <div className="">
              <Input
                {...field}
                id={name}
                placeholder=" "
                type={`${showPS ? 'text' : type}`}
                className="peer z-[1] shadow-none border-b-2 border-x-0 border-t-0 rounded-none pl-0 ring-transparent focus-visible:ring-transparent "
              />
              <FormLabel
                htmlFor={name}
                className={`absolute left-0 top-1/2 -translate-y-1/2 text-base text-four transition-all peer-focus:top-[-10px] peer-focus:text-sm ${
                  field.value.length
                    ? 'top-[-10px] text-sm'
                    : 'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 text-base'
                }`}
              >
                {title}
              </FormLabel>

              {type === 'password' && (
                <div
                  className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer z-[2]"
                  onClick={() => setShowPs((prev) => !prev)}
                >
                  {showPS ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
              )}
            </div>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default InputAuth
