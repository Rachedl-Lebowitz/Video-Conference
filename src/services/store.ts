import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";
import sessionReducer from "./session/sessionSlice";
import commonReducer from "./common/commonSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    session: sessionReducer,
    common: commonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
