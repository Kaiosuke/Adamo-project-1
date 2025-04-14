import {
  changePassword,
  forgotPassword,
  login,
  loginByFb,
  logout,
  register,
} from "@/api/authRequest";
import { IAuth } from "@/interfaces/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  loading: boolean;
  error: string | undefined;
  currentUser: IAuth | null;
}

const initialState: IAuthState = {
  loading: false,
  error: undefined,
  currentUser: null,
};

const setLoading = (state: IAuthState) => {
  state.loading = true;
  state.error = undefined;
};

const setError = (
  state: IAuthState,
  action: PayloadAction<string | undefined>
) => {
  state.loading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(login.pending, setLoading);
    build.addCase(
      login.fulfilled,
      (state: IAuthState, action: PayloadAction<IAuth>) => {
        state.loading = false;
        state.error = undefined;
        state.currentUser = action.payload;
      }
    );
    build.addCase(login.rejected, setError);

    build.addCase(register.pending, setLoading);
    build.addCase(register.fulfilled, (state: IAuthState) => {
      state.loading = false;
      state.error = undefined;
    });
    build.addCase(register.rejected, setError);

    build.addCase(logout.pending, setLoading);
    build.addCase(logout.fulfilled, (state: IAuthState) => {
      state.loading = false;
      state.currentUser = null;
      state.error = undefined;
    });
    build.addCase(logout.rejected, setError);

    build.addCase(forgotPassword.pending, setLoading);
    build.addCase(forgotPassword.fulfilled, (state: IAuthState) => {
      state.loading = false;
      state.error = undefined;
    });
    build.addCase(forgotPassword.rejected, setError);

    build.addCase(changePassword.pending, setLoading);
    build.addCase(changePassword.fulfilled, (state: IAuthState) => {
      state.loading = false;
      state.error = undefined;
    });
    build.addCase(changePassword.rejected, setError);

    build.addCase(
      loginByFb.fulfilled,
      (state: IAuthState, action: PayloadAction<IAuth>) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.error = undefined;
      }
    );
  },
});

export default authSlice.reducer;
