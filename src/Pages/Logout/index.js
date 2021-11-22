import React from 'react';

const Logout = (props) => {
  const clearUserData = () => {
    sessionStorage.clear();
    localStorage.clear();
    props.history.replace('/Login');
    props.history.go(0);
  };
  return (
    <div>
      <h3>Are you sure you want to logout?</h3>
      <button type="button" onClick={clearUserData}>Logout</button>
      {' '}
      {'    '}
      <button type="button" onClick={() => { props.history.replace('/'); }}>Cancel</button>
    </div>
  );
};

export default Logout;
