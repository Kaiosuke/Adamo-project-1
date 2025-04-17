import { IBreakfast, IExtraBed } from "@/redux/slices/roomsSlice";
import { IRoom } from "./room";

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

interface IBookingHotel {
  duration: {
    from: string;
    to: string;
  };
  hotelId: number;
  guests: string;
  rooms: { data: IRoom; quantity: number }[];
  breakFast: IBreakfast | undefined;
  extraBed: IExtraBed | undefined;
  totalPrice: number;
}

export type { IBooking, IBookingHotel };
