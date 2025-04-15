import { IRoom } from "@/interfaces/room";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IStateRoom {
  loading: boolean;
  error: undefined | string;
  rooms: IRoom[];
  breakfast:
    | {
        id: number;
        price: number;
        quantity?: number;
      }
    | undefined;
  extraBed:
    | {
        id: number;
        price: number;
        quantity?: number;
      }
    | undefined;
}

const initialState: IStateRoom = {
  loading: false,
  error: undefined,
  rooms: [],
  breakfast: undefined,
  extraBed: undefined,
};

const roomsSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    addRoom: (state: IStateRoom, action: PayloadAction<IRoom>) => {
      const existRoom = state.rooms.find(
        (room) => room.id === action.payload.id
      );
      if (existRoom) {
        state.rooms = state.rooms.map((room) => {
          if (room.id === action.payload.id && room.quantity) {
            if (room.quantity > 2) return room;
            return { ...room, quantity: room.quantity + 1 };
          }
          return room;
        });
      } else {
        state.rooms = [...state.rooms, action.payload];
      }
    },

    increaseRoom: (state: IStateRoom, action: PayloadAction<number>) => {
      state.rooms = state.rooms.map((room) => {
        if (room.id === action.payload && room.quantity) {
          if (room.quantity > 2) return room;
          return { ...room, quantity: room.quantity + 1 };
        }
        return room;
      });
    },
    decreaseRoom: (state: IStateRoom, action: PayloadAction<number>) => {
      state.rooms = state.rooms.filter((room) => {
        if (room.id === action.payload && room.quantity) {
          if (room.quantity < 1) return;
          return { ...room, quantity: room.quantity - 1 };
        }
        console.log(room.quantity);
        return room;
      });
    },
  },
});

export default roomsSlice.reducer;
export const { addRoom, decreaseRoom, increaseRoom } = roomsSlice.actions;
