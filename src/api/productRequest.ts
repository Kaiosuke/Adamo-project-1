import axios from "axios";
import instance from "./instance";

const controller = new AbortController();

// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

// const params = new URLSearchParams({ foo: "bar" });
// console.log(params);

const formData = new FormData();

formData.append("foo", "bar");
formData.append("arr[]", "1");

const getAllProducts = async () => {
  try {
    const res = await instance.get("users", {
      signal: controller.signal,
    });
    return res.data.data;
  } catch (error) {
    // if (axios.isCancel(error)) {
    //   console.log("Request canceled", error.message);
    // } else {
    //   console.error("An error occurred:", error);
    // }
    console.log(error);
    if (axios.isAxiosError(error)) {
      console.log(error);
    }
  }
};

// source.cancel("Casdas");
controller.abort();

export { getAllProducts };
