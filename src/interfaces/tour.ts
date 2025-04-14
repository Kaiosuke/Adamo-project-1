interface ITour {
  id: number;
  title: string;
  type: string;
  duration: number;
  location: string;
  score: number;
  time: string;
  thumbnail: string;
  images: string[];
  price: number;
  description: {
    overview: {
      title: string;
      list: string[];
    };
    included: string[];
    departureReturn: {
      point: string[];
      time: string;
    };
    itineraries: [
      {
        title: string;
        type: string;
        locations: {
          title: string;
          des: string;
          duration?: string;
        }[];
      }
    ];
    maps: [number, number];
    image360: string;
    video: string;
  };

  additionalInfo: {
    list: string[];
    faqs: [
      {
        title: string;
        description: string;
      }
    ];
  };

  reviews: {
    rate: number;
    avatar: string;
    opinion: string;
    time: string;
    title: string;
    des: string;
  }[];
}

export type { ITour };
