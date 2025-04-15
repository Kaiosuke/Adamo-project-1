interface IRoom {
  id: number;
  thumbnail: string;
  description: string;
  type: string;
  images: string[];
  price: number;
  square: string;
  capacity: number;
  beds: string;
  features: string[];
}

interface IRoomWithQuantity extends IRoom {
  quantity: number;
}

export type { IRoom, IRoomWithQuantity };
