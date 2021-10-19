import React, { Component, createRef } from 'react';

class index extends Component {
  state = {
    display: '',
  };

  cityInput = createRef();

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      display: `${this.cityInput.current.value} is cool`,
    });
  };

  render() {
    const { display } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref={this.cityInput} />
          <button type="submit">Get Wather</button>
        </form>
        <h3>{display}</h3>
      </div>
    );
  }
}

export default index;
