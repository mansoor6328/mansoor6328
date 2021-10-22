import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="About">Go To About</Link>

      <button
        type="button"
        onClick={() => {
          props.history.push('/about', { title: 'Hello Yagnesh' });
        }}
      >
        Go To About
      </button>
    </div>
  );
};

export default Home;
