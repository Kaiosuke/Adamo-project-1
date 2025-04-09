interface ITour {
  id: number;
  title: string;
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
    itinerary: [
      {
        title: string;
        locations: [
          {
            name: string;
            des: string;
            duration: string;
          }
        ];
      }
    ];
    maps: number[];
    Images: string[];
    videos: string[];
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

  reviews: [
    {
      rate: number;
      avatar: string;
      opinion: string;
      time: string;
      title: string;
      des: string;
    }
  ];
}

export type { ITour };
