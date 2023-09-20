import { createSlice } from "@reduxjs/toolkit";
const userslice = createSlice({
   name:"counter",
   initialState:{
    value:0
   },
   reducers:{
    increment:(state)=>{
        state.value += 1
    }
}
})
export default userslice.reducer
export const {increment}=userslice.actions