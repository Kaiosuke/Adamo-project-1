import { IRoomWithQuantity } from "@/interfaces/room";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

interface IStateRoom {
  loading: boolean;
  error: undefined | string;
  rooms: IRoomWithQuantity[];
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
    addRoom: (state: IStateRoom, action: PayloadAction<IRoomWithQuantity>) => {
      const exist = state.rooms.find((r) => r.id === action.payload.id);
      if (exist) {
        state.rooms = state.rooms.filter(
          (room) => room.id !== action.payload.id
        );
      } else {
        state.rooms = [...state.rooms, action.payload];
      }
    },

    deleteRoom: (state: IStateRoom, action: PayloadAction<number>) => {
      state.rooms = state.rooms.filter((room) => room.id !== action.payload);
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
      const existRoom = state.rooms.find((room) => room.id === action.payload);
      if (existRoom && existRoom.quantity < 2) {
        state.rooms = state.rooms.filter((room) => room.id !== action.payload);
      } else {
        state.rooms = state.rooms.map((room) => {
          if (room.id === action.payload && room.quantity) {
            return { ...room, quantity: room.quantity - 1 };
          }
          return room;
        });
      }
    },
  },
});

export default roomsSlice.reducer;
export const { addRoom, decreaseRoom, increaseRoom, deleteRoom } =
  roomsSlice.actions;
