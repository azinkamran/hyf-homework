import React from 'react';

class Counter extends React.Component {
  state = { counter: 0 };

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  render() {
    return (<div>
    You have used {this.state.counter} seconds on this website</div>);
  }
}

export default Counter;