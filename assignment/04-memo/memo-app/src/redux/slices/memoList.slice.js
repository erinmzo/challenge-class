import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  list: [
    {
      id: uuid(),
      content: "",
      time: new Date().toLocaleString("ko-KR"),
      isActive: true,
    },
  ],
};

export const memoListSlice = createSlice({
  name: "memoList",
  initialState: initialState,
  reducers: {
    clickMemo: (state, action) => {
      state.list = state.list.map((memo) => {
        if (memo.id === action.payload) {
          return { ...memo, isActive: true };
        } else {
          return { ...memo, isActive: false };
        }
      });
    },
    addMemo: (state, action) => {
      const prevList = state.list.map((memo) => {
        return { ...memo, isActive: false };
      });
      state.list = [action.payload, ...prevList];
    },
    deleteMemo: (state) => {
      if (state.list.length > 1) {
        const filteredList = state.list.filter(
          (memo) => memo.isActive !== true
        );
        state.list = filteredList;
      }
      state.list.forEach((memo, index) => {
        if (index === 0) {
          memo.isActive = true;
        }
      });
    },
    updateMemo: (state, action) => {
      state.list = [...action.payload];
    },
  },
});

export const { clickMemo, addMemo, deleteMemo, updateMemo } =
  memoListSlice.actions;
export default memoListSlice.reducer;
