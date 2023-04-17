import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "../features/listSlice";
import alertSlice from "../features/alertSlice";

export default configureStore({
  reducer: {
    alert: alertSlice,
    lists: listsReducer
  },
});