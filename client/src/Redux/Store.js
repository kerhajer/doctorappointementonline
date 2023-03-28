import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./UserSlice"
import Appointement from "./AppointementSlice";
  export const  Store=configureStore ({
    reducer:{
      AuthReducer,Appointement
  }
})