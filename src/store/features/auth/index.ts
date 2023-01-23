import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import jsCookie from "js-cookie";
import { redirect } from "next/navigation";

import type { AppState } from "../..";
import { postApi } from "./api";

export interface authForm {
  username?: string | null;
  email?: string | null;
  password?: string | null;
  phone?: string | null;
  name?: string | null;
  identifier?: string | null;
}

export interface IUserData {
  blocked?: boolean;
  confirmed?: boolean;
  createdAt?: Date;
  deletedAt?: Date | null;
  email?: string;
  id?: string;
  name?: string;
  phone?: string;
  updatedAt?: string;
  username?: string;
}

export interface IUserAuth<T> {
  accessToken: string;
  user: T;
}

export type TStatus = "idle" | "loading" | "failed";

export interface IError {
  code: number;
  message: string | string[];
  isError: boolean;
}

export interface authState {
  signup: {
    form: authForm;
    status: TStatus;
    error: IError;
  };
  signin: {
    form: authForm;
    status: TStatus;
    error: IError;
  };
  emailVerification: "success" | "faild" | "loading";
  userAuth?: IUserAuth<IUserData> | null;
  isAuthenticate?: boolean;
}

const initialState: authState = {
  signup: {
    form: { username: null, email: null, password: null },
    status: "idle",
    error: { isError: false, code: 0, message: "" },
  },
  signin: {
    form: { identifier: null, password: null },
    status: "idle",
    error: { isError: false, code: 0, message: "" },
  },
  emailVerification: "loading",
  userAuth: null,
  isAuthenticate: false,
};

export const authState = createSlice({
  name: "auth",

  initialState,
  reducers: {
    setUserAuth: (state, { payload }: PayloadAction<IUserAuth<IUserData>>) => {
      state.userAuth = payload;

      if (payload.accessToken) state.isAuthenticate = true;
    },
    logout: (state) => {
      jsCookie.remove("postKita");
    },

    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },SerializedError
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(postApi.endpoints.signup.matchPending, (state, action) => {
        state.signup.error = {
          ...state.signup.error,
          isError: false,
          code: 0,
          message: "",
        };
        state.signup.status = "loading";
      })
      .addMatcher(postApi.endpoints.signup.matchFulfilled, (state, action) => {
        state.signup.status = "idle";
      })
      .addMatcher(
        postApi.endpoints.signup.matchRejected,
        (state, action: AnyAction) => {
          state.signup.status = "failed";

          const dataResp = action?.payload?.data;

          // 409 conflict data
          if (dataResp && dataResp.code === 409) {
            state.signup.error = {
              ...state.signup.error,
              isError: true,
              code: dataResp.code,
              message: dataResp.message[0],
            };
          }

          if (dataResp && dataResp.code === 400) {
            state.signup.error = {
              ...state.signup.error,
              isError: true,
              code: dataResp.code,
              message: dataResp.message,
            };
          }
        }
      )
      .addMatcher(postApi.endpoints.signin.matchPending, (state, action) => {
        state.signin.status = "loading";
      })
      .addMatcher(
        postApi.endpoints.signin.matchFulfilled,
        (state, action: AnyAction) => {
          state.signin.status = "idle";
          const userData = JSON.stringify(action.payload.data);
          jsCookie.set("postkita", userData);
          redirect("/dashboard");
        }
      )
      .addMatcher(postApi.endpoints.signin.matchRejected, (state, action) => {
        state.signin.status = "failed";
      })

      .addMatcher(
        postApi.endpoints.emailVerification.matchPending,
        (state, action) => {
          state.emailVerification = "loading";
        }
      )
      .addMatcher(
        postApi.endpoints.emailVerification.matchFulfilled,
        (state, action: AnyAction) => {
          state.emailVerification = "success";
        }
      )
      .addMatcher(
        postApi.endpoints.emailVerification.matchRejected,
        (state, action) => {
          state.signin.status = "failed";
        }
      );
  },
});

export const { setUserAuth, logout } = authState.actions;

export const selectAuth = (state: AppState) => state.auth;

export default authState.reducer;
