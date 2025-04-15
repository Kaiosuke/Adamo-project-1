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
}
export type { IHotel };
