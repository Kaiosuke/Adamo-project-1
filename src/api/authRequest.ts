import instance from "./instance";

const login = async (data: { email: string; password: string }) => {
  try {
    const res = await instance.post("auth/login", data);
    localStorage.setItem("accessToken", res.data.data.accessToken);
  } catch (error) {
    const err = error as { response?: { data: { message: string } } };
    throw err.response?.data.message || error;
  }
};

export { login };
