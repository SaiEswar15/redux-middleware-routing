import {createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name : "counter",
  initialState : {counter : 0},
  reducers :{
    increment(state,action)
    {
      state.counter++
    },
    incrementBy5(state,action)
    {
      state.counter += action.payload
    }
  }
})



export const counterActions = counterSlice.actions

export default counterSlice;

export const asyncThunk = (dispatch)=>{
  setTimeout(()=>{
    dispatch(counterActions.increment())
  },3000)
  
}

export const asyncThunkfor5 = (value)=>{
  return(dispatch)=>{
    setTimeout(()=>{
      dispatch(counterActions.incrementBy5(value))
    },3000)
  }
}

