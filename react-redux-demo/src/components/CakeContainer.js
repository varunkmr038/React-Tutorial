import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h1>Cake Container</h1>
      <h2>Cake count - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Click me</button>
    </div>
  );
}

// alternative way to hooks
// these functions have access to store
// we connect these to components
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
