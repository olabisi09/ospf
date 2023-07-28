import { createSlice } from "@reduxjs/toolkit";

interface StepState {
  step: number;
}

const initialState: StepState = {
  step: 1,
}

const stepSlice = createSlice({
  name: "step",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.step += 1;
    },
    decrement: (state) => {
      state.step -= 1;
    },
  },
});

export const { increment, decrement } = stepSlice.actions;
export default stepSlice.reducer;