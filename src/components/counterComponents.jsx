import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    name: this.props.name
  };
  render() {
    return (
      <React.Fragment>
        <span
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button onClick={() => this.props.onIncrement()} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={() => this.props.onDecrement()} className="btn btn-secondary btn-sm m-2">Decrement</button>
        <button onClick={()=> this.props.onDelete()} className="btn btn-sm m-2 btn-danger">Delete</button>
        <br></br>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
