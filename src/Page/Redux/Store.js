import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./Userslice"
export default configureStore({
    reducer:{
        cartInfo:useReducer,
    },
})