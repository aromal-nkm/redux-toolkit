import {createSlice} from '@reduxjs/toolkit'
// intializing the reducers and state

const counterSlice=createSlice({
    name:'Counter',
    initialState:0,
    reducers:{
        increment:state=>+1,
        decrement:state=>-1
    }
})
export const {increment,decrement}=counterSlice.actions