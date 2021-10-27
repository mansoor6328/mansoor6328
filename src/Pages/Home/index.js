import React from 'react';
import { Link } from 'react-router-dom';
import { LocaleContext } from '../../context/localeContext';

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="About">Go To About</Link>

      <LocaleContext.Consumer>
        {({ locale, changeLocale }) => (
          <div>
            <h1>{locale}</h1>
            <button
              type="button"
              onClick={() => {
                changeLocale('FR');
              }}
            >
              Change Locale
            </button>
          </div>
        )}
      </LocaleContext.Consumer>

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
