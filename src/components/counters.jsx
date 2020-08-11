import React, { Component } from "react";
import Counter from "./counterComponents";
import _ from "lodash";

class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 10,
        name: "Apple",
      },
      {
        id: 2,
        value: 0,
        name: "Banana",
      },
      {
        id: 3,
        value: 0,
        name: "Orange",
      },
      {
        id: 4,
        value: 0,
        name: "Mango",
      },
    ],
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    _.find(this.state.counters, ["id", counter.id]).value++;
    this.setState({ counters: this.state.counters });
  };
  handleIncrement = (counter) => {
    _.find(this.state.counters, ["id", counter.id]).value++;
    this.setState({ counters: this.state.counters });
  };
  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleReset} className="btn btn-primary m-2">
            Reset
          </button>
        </div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={() => this.handleIncrement(counter)}
            onDecrement={() => this.handleDecrement(counter)}
            onDelete={() => this.handleDelete(counter)}
            value={counter.value}
            id={counter.id}
            name={counter.name}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
