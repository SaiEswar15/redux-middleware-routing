import {useSelector} from "react-redux";

function Cart()
{
  const counter = useSelector(state=>state.counter.counter)
  return (<>
  <h1>result of count</h1>
  <h1>{counter}</h1></>)
}

export default Cart;