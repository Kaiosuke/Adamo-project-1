interface IReviewTour {
  id: number;
  tourId: number;
  rate: number;
  avatar: string;
  opinion: string;
  time: string;
  title: string;
  des: string;
}

interface IReviewHotel {
  id: number;
  hotelId: number;
  rate: number;
  avatar: string;
  opinion: string;
  time: string;
  title: string;
  des: string;
}

export type { IReviewHotel, IReviewTour };
