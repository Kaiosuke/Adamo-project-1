import Card from '@/assets/images/card.png'
import Paypal from '@/assets/images/paypal.png'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useCallback } from 'react'
import { ControllerRenderProps, FieldValues, Path, UseFormReturn } from 'react-hook-form'

interface Props<T extends FieldValues> {
  form: UseFormReturn<T>
  name: Path<T>
  setQuery?: (_query: Record<string, string>) => void
}

const PayMethod = <T extends FieldValues>({ form, name, setQuery }: Props<T>) => {
  const handleChangeValue = useCallback(
    (v: string, field: ControllerRenderProps<T, Path<T>>) => {
      field.onChange(v)
      if (setQuery) setQuery({ [name]: v })
    },
    [name, setQuery]
  )

  return (
    <>
      <h3 className="text-size-xl">Payment Method</h3>
      <p className="text-four">Pay securely—we use SSL encryption to keep your data safe</p>
      <div className="mt-6">
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup onValueChange={(v) => handleChangeValue(v, field)} defaultValue={field.value}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="r1" className=" w-[20px] h-[20px] " />
                    <Label htmlFor="r1" className="text-size-base font-semibold flex items-center cursor-pointer">
                      <div className="w-[120px]">Credit Card</div>
                      <img src={Card} />
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="r2" className=" w-[20px] h-[20px] " />
                    <Label htmlFor="r2" className="text-size-base font-semibold flex items-center cursor-pointer">
                      <div className="w-[120px]">Paypal</div>
                      <img src={Paypal} />
                    </Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
}

export default PayMethod
