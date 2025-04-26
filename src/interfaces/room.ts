interface IRoom {
  id: number
  status: boolean
  thumbnail: string
  description: string
  quantity: number
  type: string
  images: string[]
  price: number
  square: string
  capacity: number
  beds: string
  features: string[]
}

interface IRoomWithQuantity extends IRoom {
  quantity: number
}

export type { IRoom, IRoomWithQuantity }
