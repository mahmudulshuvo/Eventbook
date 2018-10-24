import React, { Component } from "react";
import { connect } from "react-redux";

const mapState = state => ({
  data: state.test.data
});

const mapDispatch = dispatch => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" })
});

class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1>Test Component</h1>
        <h3>
          The answer is : {this.props.data}
          <button onClick={this.props.increment}>+</button>
          <button onClick={this.props.decrement}>-</button>
        </h3>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(TestComponent);
