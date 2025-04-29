interface IReviewTour {
  id: number
  userId: string
  tourId: number
  rate: number
  avatar: string
  opinion: string
  time: string
  title: string
  des: string
}

interface IReviewHotel {
  id: number
  userId: string
  hotelId: number
  rate: number
  avatar: string
  opinion: string
  time: string
  title: string
  des: string
}

type IReviewTourLackId = Omit<IReviewTour, 'id'>

export type { IReviewHotel, IReviewTour, IReviewTourLackId }
