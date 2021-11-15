import React, { Component, createRef } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

// State value change or Prop value change

// Life Cycle Methods

// 4 Stages of Life Cycle Methods

// 1. Mounting

// -> 1. Constructor
// -> 2. getDerivedStateFromProps
// -> 3. Render
// -> 4. componentDidMount

// 2. Updating

// -> 1. getDerivedStateFromProps
// -> 2. shouldComponentUpdate
// -> 3. getSnapshotBeforeUpdate
// -> 4. componentDidUpdate

// 3. Unmounting
// -> 1. componentWillUnmount

// 4. Error
// -> 1. getDerivedStateFromError
// -> 2. componentDidCatch

class Home extends Component {
  state = {
    counter: 1,
    users: [],
  };

  headerRef = createRef();

  // Call Only once
  // constructor(props) {
  //   super(props);
  //   // base on prop value if one want to define state value
  //   // this.state = {
  //   //   counter: 0,
  //   //   pageName:
  //   //     props.location.pathname === '/'
  //   //       ? 'Home Page'
  //   //       : 'props.location.pathname',
  //   // };
  //   // console.log('constructor');

  //   // console.log(document.getElementById('heading'));

  //   // Bind Method
  //   // this.incrementCounter = this.incrementCounter.bind(this);

  //   // For Anylytics
  //   // Cant set state base on Api response
  // }

  static getDerivedStateFromProps(props, state) {
    // console.log(document.getElementById('heading'));
    // console.log('getDerivedStateFromProps');
    return {
      pageName:
        props.location.pathname === '/'
          ? 'Home Page'
          : 'props.location.pathname',
    };
  }

  // Call Only once
  componentDidMount() {
    // Load data
    // Register event
    // document.addEventListener('copy', () => {
    //   console.log('Copied');
    // });
    // API CAll
    // this.setState({
    //   users:
    // })
    // O(1)
    // console.log(this.headerRef.current);
    // O(LogN)
    // console.log(document.getElementById('heading'));
    // O(N)
    // console.log(document.getElementsByTagName('h1'));
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 'some data';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(snapshot);
  }

  componentWillUnmount() {}

  incrementCounter = () => {
    // this.setState({
    //   counter: this.state.counter + 1,
    // });

    this.setState(
      ({ counter }) => {
        return {
          counter: counter + 1,
        };
      },
      () => {
        console.log(this.state.counter);
      }
    );

    // alert('hello');
  };

  static getDerivedStateFromError(error) {
    return {
      error: !!error,
    };
  }

  componentDidCatch(error, info) {
    // Log The errors
    console.log(error);
    console.log(info);
  }

  render() {
    console.log('render');
    const { pageName, counter, error } = this.state;

    if (error) {
      return <h1>Some thing went wrong</h1>;
    }

    return (
      <div>
        <p>{`my current page is ${pageName}`}</p>
        <h1 ref={this.headerRef} id="heading">
          {counter}
        </h1>
        <button type="button" onClick={this.incrementCounter}>
          Increment Counter
        </button>

        <Child1 />
        {counter < 5 && <Child2 />}
      </div>
    );
  }
}

export default Home;
