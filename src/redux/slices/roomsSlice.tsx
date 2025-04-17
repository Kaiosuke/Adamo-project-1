import { IRoom, IRoomWithQuantity } from "@/interfaces/room";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBreakfast {
  title: "breakfast";
  status: boolean;
  price: number;
  quantity: number;
}

export interface IExtraBed {
  title: "extraBed";
  status: boolean;
  price: number;
  quantity: number;
}

interface IStateRoom {
  loading: boolean;
  error: undefined | string;
  rooms: { data: IRoomWithQuantity; quantity: number }[];
  breakfast: IBreakfast;
  extraBed: IExtraBed;
}

const initialState: IStateRoom = {
  loading: false,
  error: undefined,
  rooms: [],
  breakfast: {
    price: 120,
    quantity: 0,
    status: false,
    title: "breakfast",
  },
  extraBed: {
    price: 20,
    quantity: 0,
    status: false,
    title: "extraBed",
  },
};

const roomsSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    addRoom: (
      state: IStateRoom,
      action: PayloadAction<{ data: IRoomWithQuantity; quantity: number }>
    ) => {
      state.rooms = [...state.rooms, action.payload];
    },

    deleteRoom: (state: IStateRoom, action: PayloadAction<IRoom>) => {
      state.rooms = state.rooms.filter(
        (room) => room.data.id !== action.payload.id
      );
    },

    increaseRoom: (state: IStateRoom, action: PayloadAction<IRoom>) => {
      state.rooms = state.rooms.map((room) => {
        if (room.data.id === action.payload.id) {
          if (room.quantity >= action.payload.quantity) {
            return room;
          }
          return { ...room, quantity: room.quantity + 1 };
        }
        return room;
      });
    },

    decreaseRoom: (state: IStateRoom, action: PayloadAction<IRoom>) => {
      const existRoom = state.rooms.find(
        (room) => room.data.id === action.payload.id
      );
      if (existRoom && existRoom.quantity < 1) {
        return;
      } else {
        state.rooms = state.rooms.map((room) => {
          if (room.data.id === action.payload.id) {
            return { ...room, quantity: room.quantity - 1 };
          }
          return room;
        });
      }
    },

    changeBreakfast: (state: IStateRoom) => {
      state.breakfast.status = !state.breakfast.status;
    },

    inCreaseBreakfast: (state: IStateRoom) => {
      state.breakfast.quantity = state.breakfast.quantity += 1;
    },

    deCreaseBreakfast: (state: IStateRoom) => {
      if (state.breakfast.status && state.breakfast.quantity > 0) {
        state.breakfast.quantity = state.breakfast.quantity -= 1;
      }
    },

    changeExtraBed: (state: IStateRoom) => {
      state.extraBed.status = !state.extraBed.status;
    },

    inCreaseExtraBed: (state: IStateRoom) => {
      state.extraBed.quantity = state.extraBed.quantity += 1;
    },

    deCreaseExtraBed: (state: IStateRoom) => {
      if (state.extraBed.status && state.extraBed.quantity > 0) {
        state.extraBed.quantity = state.extraBed.quantity -= 1;
      }
    },
  },
});

export default roomsSlice.reducer;
export const {
  addRoom,
  decreaseRoom,
  increaseRoom,
  deleteRoom,
  changeBreakfast,
  deCreaseBreakfast,
  inCreaseBreakfast,
  changeExtraBed,
  deCreaseExtraBed,
  inCreaseExtraBed,
} = roomsSlice.actions;
