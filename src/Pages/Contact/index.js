import React from 'react';

const Contact = (props) => {
  console.log(props);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          props.history.replace('/', { title: 'Hello Yagnesh' });
        }}
      >
        Go To Home
      </button>
    </div>
  );
};

export default Contact;
