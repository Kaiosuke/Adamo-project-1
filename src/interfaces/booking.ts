interface IBooking {
  duration: {
    from: string;
    to: string;
  };
  day: number;
  tourId: number;
  totalPrice: number;
  guests: string;
}

export type { IBooking };
