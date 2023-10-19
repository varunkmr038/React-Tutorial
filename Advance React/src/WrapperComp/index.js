import React from "react";
import Hoc from "../Hoc/index";

class NewComp extends React.Component {
  render() {
    return <div>I am the wrapped component</div>;
  }
}

export default Hoc(NewComp);
