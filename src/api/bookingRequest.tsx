import { IBooking, IBookingHotel } from "@/interfaces/booking";
import { instanceLocal } from "./instance";

const bookingTour = async ({ data }: { data: IBooking }) => {
  return await instanceLocal.post("bookingTours", data);
};

const bookingHotel = async ({ data }: { data: IBookingHotel }) => {
  return await instanceLocal.post("bookingHotels", data);
};

export { bookingHotel, bookingTour };
