import { IRoom } from "@/interfaces/room";
import { instanceLocal } from "./instance";

const getAllRoom = async (): Promise<IRoom[]> => {
  try {
    const res = await instanceLocal("/rooms");

    return res.data;
  } catch (error) {
    return error;
  }
};

export { getAllRoom };
