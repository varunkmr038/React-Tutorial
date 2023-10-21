import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Translate from "./Translate";
import React from "react";
import { updateCounter } from "./Redux/actions/globalActions";

function App() {
  const counter = useSelector(({ global }) => global.counter);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(updateCounter(5));
  };

  return (
    <>
      <p>{counter}</p>
      <button onClick={onClickHandler}>Click here</button>
    </>
  );
}

export default App;
