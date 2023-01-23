import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "store";
import { incrementByAmount, selectCount } from ".";
// import { fetchCount } from "./api";

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    // const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    // return response.data;
  }
);

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };
