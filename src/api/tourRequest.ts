import { instanceLocal } from "./instance";

const getAllTour = async () => {
  try {
    const res = await instanceLocal("/tours");
    console.log(res);
  } catch (error) {
    return error;
  }
};

export { getAllTour };
