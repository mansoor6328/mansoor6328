import React from 'react';

const About = (props) => {
  console.log(props);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          props.history.replace('/contact', { title: 'Hello Yagnesh' });
        }}
      >
        Go To contact
      </button>
    </div>
  );
};

export default About;
