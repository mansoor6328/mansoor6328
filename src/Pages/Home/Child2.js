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

  render() {
    console.log('Child 2 component');
    return (
      <div>
        <h1>Child 2 Compoenent</h1>
      </div>
    );
  }
}
