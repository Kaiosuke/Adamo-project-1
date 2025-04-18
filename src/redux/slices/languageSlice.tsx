import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Lg {
  en = "en",
  vi = "vi",
}

interface IStateLanguage {
  lg: Lg;
}

const initialState: IStateLanguage = {
  lg: Lg.en,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state: IStateLanguage, action: PayloadAction<Lg>) => {
      state.lg = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
