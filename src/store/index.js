import { ConfigureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = ConfigureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});


export default store;
