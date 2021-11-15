import React, { PureComponent } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class Child2 extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState);
  //     // if (this.state !== nextState || this.props !== nextProps) {
  //     //   return true;
  //     // }
  //     // return false;
  //   }

  state = {
    counter: 0,
  };

  componentDidMount() {
    document.addEventListener('mousemove', this.mouseMove);
    this.interval = setInterval(() => {
      console.log('interval');
    }, 1000);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMove);
    clearInterval(this.interval);
  }

  mouseMove = () => {
    console.log('mouse Moved...');
  };

  render() {
    console.log('Child 2 component');
    const { counter } = this.state;
    if (counter > 5) throw new Error('Something went wrong');

    return (
      <div>
        <h1>Child 2 Compoenent</h1>
        <h2>{counter}</h2>
        <button
          type="button"
          onClick={() => {
            this.setState(({ counter: cnt }) => ({
              counter: cnt + 1,
            }));
          }}
        >
          Increment Counter
        </button>
      </div>
    );
  }
}
