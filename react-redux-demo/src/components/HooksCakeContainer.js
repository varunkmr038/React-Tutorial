import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hooks Cake Container - {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Click me</button>
    </div>
  );
}

export default HooksCakeContainer;
