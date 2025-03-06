import { configureStore } from "@reduxjs/toolkit";
import userReduser from "../Features/UserSlice";

export const store = configureStore({
  reducer: {
    users: userReduser,
  },
});
