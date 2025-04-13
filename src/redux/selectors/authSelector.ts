import { RootState } from "..";

const authSelector = (state: RootState) => state.authSlice;

export { authSelector };
