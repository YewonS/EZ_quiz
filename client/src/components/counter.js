import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onIncrease = () => {
    this.setState({ count: (this.state.count += 1) });
  };

  onDecrease = () => {
    this.setState({ count: (this.state.count -= 1) });
  };

  render() {
    return (
      <div className='container'>
        <h2>
          {this.props.title}: {this.state.count}
        </h2>
        <button onClick={this.onIncrease}>+</button>
        <button onClick={this.onDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
