// import authReducer from "../slices/loginServices/authSlice";
// import homeReducer from "../slices/homeServices/homeSlice";
import reportReducer from "../slice/reportSlice/ReportSlice"

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  reportReducer: reportReducer,
  // home: homeReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
