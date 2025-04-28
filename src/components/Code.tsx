import { getCode } from '@/api/codeRequest'
import { Input } from '@/components/ui/input'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { useTranslation } from 'react-i18next'

interface Props {
  setDiscount: (_v: number) => void
}

const Code = ({ setDiscount }: Props) => {
  const [code, setCode] = useState('')

  const { mutate } = useMutation({
    mutationFn: (code: string) => getCode(code),
    onSuccess: (data) => {
      toast.success(`You get a ${data.discount * 100}% discount`, {
        style: {
          backgroundColor: '#4caf50',
          color: '#ffffff'
        }
      })

      setDiscount(data.discount)
    },
    onError: () => {
      toast.error('Invalid promo code', {
        style: {
          backgroundColor: '#f44336',
          color: '#ffffff'
        }
      })
      setDiscount(0)

      return
    }
  })

  const handleCheckCode = () => {
    mutate(code)
  }

  const { t } = useTranslation('bill')

  return (
    <div className="w-full h-[56px] flex items-center gap-4 text-sm">
      <div className="flex-[1_0_auto]  h-full">
        <Input
          value={code}
          onChange={(v) => {
            setCode(v.target.value)
          }}
          className="bg-third rounded-none h-full p-0 py-2 pl-3 placeholder:text-four"
          placeholder={t('billCheckOutTour.promo')}
        />
      </div>
      <div className="text-secondary w-[112px] h-full">
        <Button variant={'outline'} className="font-bold border-2 h-full" onClick={handleCheckCode}>
          {t('billCheckOutTour.apply')}
        </Button>
      </div>
    </div>
  )
}

export default Code
