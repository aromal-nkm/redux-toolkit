import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { decrement, increment } from '../action'

const Counter = () => {
    const value=useSelector(state=>state.counter)
    const dispatch=useDispatch()
  return (
    <>
    <div>Counter:{value}</div>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default Counter