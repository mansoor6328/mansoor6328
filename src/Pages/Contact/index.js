/* eslint-disable react/prop-types */
import React from 'react';
import { LocaleContext } from '../../context/localeContext';

const Contact = (props) => {
  console.log(props);
  return (
    <div>
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
          props.history.replace('/', { title: 'Hello Yagnesh' });
        }}
      >
        Go To Home
      </button>
    </div>
  );
};

export default Contact;
