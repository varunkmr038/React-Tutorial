import React from "react";

const Hoc = (OrgComp) => {
  class NewHoc extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      this.increaseCount = this.increaseCount.bind(this);
    }

    increaseCount() {
      this.setState({ count: this.state.count + 1 });
    }
    render() {
      return (
        <div>
          <OrgComp {...this.props} />
          <div>the count is {this.state.count}</div>
          <button onClick={this.increaseCount}>Increment</button>
          {this.props.children}
        </div>
      );
    }
  }
  return NewHoc;
};

export default Hoc;
