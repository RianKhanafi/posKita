import {
  configureStore,
  ThunkAction,
  Action,
  ConfigureStoreOptions,
} from "@reduxjs/toolkit";
import { api } from "./features/api/api";

import counterReducer from "./features/slice";
import authState from "./features/auth";

export function makeStore(
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) {
  return configureStore({
    reducer: {
      counter: counterReducer,
      auth: authState,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    ...options,
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
