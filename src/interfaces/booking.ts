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
  user?: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    requirement?: string;
    payMethod: string;
  };
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

  user?: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    requirement?: string;
    payMethod: string;
  };
}

export type { IBooking, IBookingHotel };
