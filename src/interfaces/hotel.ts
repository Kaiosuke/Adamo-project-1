interface IHotel {
  id: number;
  title: string;
  location: string;
  score: number;
  price: number;
  duration: string;
  type: string;
  thumbnail: string;
  images: string[];
  description: {
    overview: {
      description: string;
    };
    amenities: string[];
    rules: {
      checkIn: string;
      checkOut: string;
      information: string[];
    };
    maps: [number, number];
    image360: string;
    video: string;
  };

  rooms: {
    id: string;
    thumbnail: string;
    description: string;
    title: string;
    images: string[];
    price: number;
    square: string;
    capacity: number;
    beds: string;
    features: string[];
  }[];
  reviews: {
    rate: number;
    avatar: string;
    opinion: string;
    time: string;
    title: string;
    des: string;
  }[];
}
export type { IHotel };
