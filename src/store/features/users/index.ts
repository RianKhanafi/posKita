import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import jsCookie from "js-cookie";
import { redirect } from "next/navigation";
import type { AppState } from "../..";
import { postApi } from "./api";
import { IError, IUserData, TStatus } from "../auth";

interface Iusers {
  users: IUserData;
  status: TStatus;
  error: IError;
}
const initialState: Iusers = {
  users: {},
  status: "idle",
  error: { isError: false, code: 0, message: "" },
};

export const authState = createSlice({
  name: "auth",

  initialState,
  reducers: {
    // setUserAuth: (state, { payload }: PayloadAction<IUserAuth<IUserData>>) => {
    //   state.userAuth = payload;
    //   if (payload.accessToken) state.isAuthenticate = true;
    // },
    // logout: (state) => {
    //   jsCookie.remove("postKita");
    //   console.log("remove cookie");
    // },
    // // decrement: (state) => {
    // //   state.value -= 1;
    // // },
    // // incrementByAmount: (state, action: PayloadAction<number>) => {
    // //   state.value += action.payload;
    // // },SerializedError
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(postApi.endpoints.getUser.matchPending, (state, action) => {
        state.error = {
          ...state.error,
          isError: false,
          code: 0,
          message: "",
        };
        state.status = "loading";
      })
      .addMatcher(postApi.endpoints.getUser.matchFulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload?.data;
      })
      .addMatcher(
        postApi.endpoints.getUser.matchRejected,
        (state, action: AnyAction) => {
          state.status = "failed";

          const dataResp = action?.payload?.data;

          state.error = {
            ...state.error,
            isError: true,
            code: dataResp.code,
            message: dataResp.message,
          };
        }
      );
    // .addMatcher(postApi.endpoints.signin.matchPending, (state, action) => {
    //   state.signin.status = "loading";
    // })
    // .addMatcher(
    //   postApi.endpoints.signin.matchFulfilled,
    //   (state, action: AnyAction) => {
    //     state.signin.status = "idle";
    //     const userData = JSON.stringify(action.payload.data);
    //     jsCookie.set("postkita", userData);
    //     redirect("/dashboard");
    //   }
    // )
    // .addMatcher(postApi.endpoints.signin.matchRejected, (state, action) => {
    //   state.signin.status = "failed";
    // });
  },
});

export const {} = authState.actions;

export const selectAuth = (state: AppState) => state.auth;

export default authState.reducer;
