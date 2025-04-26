interface ITour {
  id: number
  title: string
  type: string
  favorite: boolean
  duration: number
  location: string
  score: number
  time: string
  thumbnail: string
  images: string[]
  price: number
  description: {
    overview: {
      title: string
      list: string[]
    }
    included: string[]
    departureReturn: {
      point: string[]
      time: string
    }
    itineraries: [
      {
        title: string
        type: string
        locations: {
          title: string
          des: string
          duration?: string
        }[]
      }
    ]
    maps: [number, number]
    image360: string
    video: string
  }

  additionalInfo: {
    list: string[]
    faqs: [
      {
        title: string
        description: string
      }
    ]
  }
}

export type { ITour }
