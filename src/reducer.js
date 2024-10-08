import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'Counter',
    initialState:0,
    reducers:{
        increment:state=>state+1,
        decrement:state=>state-1   //state
    }
})
export default counterSlice.reducer;