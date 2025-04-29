import { memo, useState } from 'react'
import { Slider } from '../ui/slider'

interface Props {
  prices: number[]
  max?: number
  onValueChange: (_v: number[]) => void
}

const SliderCom = ({ prices, onValueChange, max = 300 }: Props) => {
  const [livePrice, setLivePrice] = useState(prices)

  return (
    <div className="relative">
      <Slider value={livePrice} max={max} step={1} onValueChange={setLivePrice} onValueCommit={onValueChange} />
      <div className="absolute -top-[30px]">${prices[0]}</div>
      <div className="absolute -top-[30px] right-[10px]">${prices[1]}</div>
    </div>
  )
}

export default memo(SliderCom)
