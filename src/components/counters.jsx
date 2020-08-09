import React, { Component } from 'react';
import Counter from './counterComponents';

class Counters extends Component {
  state = {
    counterComponents:[
      {
        id:1, value:0
      },{
        id:2, value:0
      },{
        id:3, value:0
      },{
        id:4, value:0
      },
    ]
  }
  render() {
    return (
      <div>
        { this.state.counterComponents.map(ele => <Counter key={ele.id} value = {ele.value} id={ele.id}></Counter>)}

      </div>
    );
  }
}

export default Counters;
