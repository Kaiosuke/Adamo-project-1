import { IHotel } from "@/interfaces/hotel";
import { instanceLocal } from "./instance";

// const getFiltersHotel = async ( { rejectWithValue } => {
//   try {
//     const getLocations = async () => {
//       try {
//         const res = await instanceLocal.get("/locationHotels");
//         return res.data;
//       } catch (error) {
//         if (axios.isAxiosError(error)) {
//           return rejectWithValue(error.response?.data?.message);
//         }
//         return rejectWithValue("Error");
//       }
//     };

//     const getGuests = async () => {
//       try {
//         const res = await instanceLocal.get("/guests");
//         return res.data;
//       } catch (error) {
//         if (axios.isAxiosError(error)) {
//           return rejectWithValue(error.response?.data?.message);
//         }
//         return rejectWithValue("Error");
//       }
//     };

//     const [locations, guests] = await Promise.all([
//       getLocations(),

//       getGuests(),
//     ]);

//     return { locations, guests };
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       return rejectWithValue(error.response?.data?.message);
//     }
//     return rejectWithValue("Error");
//   }
// });

const getFiltersHotel = async (): Promise<{
  locations: string[];
  guests: string[];
}> => {
  const resDataLocations = await instanceLocal.get("/locationHotels");
  const resDataGuests = await instanceLocal.get("/guests");

  const [locations, guests] = await Promise.all([
    resDataLocations.data,
    resDataGuests.data,
  ]);
  return { locations, guests };
};

interface IGetHotels {
  _page: number | string;
  _limit?: number | string;
  _sort?: string;
  _order?: string;
  location?: string;
  score?: string;
  prices?: string;
  star?: string;
}

const getHotels = async ({
  _page = 1,
  _limit = 4,
  _sort = "price",
  _order = "asc",
  location = " ",
  score = "0",
  prices = "0,300",
  star = "",
}: IGetHotels): Promise<IHotel[]> => {
  const res = await instanceLocal.get("hotels", {
    params: {
      _page,
      _limit,
      _sort,
      _order,
      score_gte: score,
      location_like: location === "All" ? " " : location,
      price_gte: prices.split(",")[0],
      price_lte: prices.split(",")[1],
      star: star ? star.split(",") : undefined,
    },
  });

  localStorage.setItem("totalHotel", res.headers["x-total-count"]);
  return res.data;
};

const getHotelById = async (id: string): Promise<IHotel> => {
  const res = await instanceLocal.get(`hotels/${id}`);
  return res.data;
};

export { getFiltersHotel, getHotels, getHotelById };
