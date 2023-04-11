import "./styles.css";
import {useSelector, useDispatch} from "react-redux";
import {counterActions, asyncThunk, asyncThunkfor5} from "./store/counterSlice";
// import Cart from "./Cart";
import {Link} from "react-router-dom";

export default function App() {

  const counter = useSelector((state)=>{
    
    return state.counter.counter;
  })

  const dispatch = useDispatch();

  function incHandler()
  {
    dispatch(counterActions.increment())
  }

  function incBy5Handler()
  {
    dispatch(counterActions.incrementBy5(5))
  }

  function asyncIncBy1Handler()
  {
    dispatch(asyncThunk)
  }

  function asyncIncBy5Handler()
  {
    dispatch(asyncThunkfor5(5))
  }
  return (
    <>
    <h1>counter app</h1>
    <h1>{counter}</h1>
    <button onClick = {incHandler}>increment</button>
    <button onClick = {incBy5Handler}>increment By 5</button>
    <button onClick = {asyncIncBy1Handler}>async increment 1</button>
    <button onClick = {asyncIncBy5Handler}>async increment 5</button>
    <Link to = "/cart">
    <h1>cart</h1>
    </Link>
    
    </>
  );
}
