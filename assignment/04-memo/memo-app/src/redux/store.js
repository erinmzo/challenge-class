import { configureStore } from "@reduxjs/toolkit";
import memoListSlice from "./slices/memoList.slice";
const store = configureStore({
  reducer: {
    memoList: memoListSlice,
  },
});
export default store;
