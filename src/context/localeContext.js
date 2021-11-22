/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component, createContext } from 'react';

export const LocaleContext = createContext();

class LocaleProvider extends Component {
  state = {
    locale: 'en',
  };

  render() {
    const { locale } = this.state;
    return (
      <LocaleContext.Provider
        value={{
          locale,
          changeLocale: (newLocale) => {
            this.setState({
              locale: newLocale,
            });
          },
        }}
      >
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}

export default LocaleProvider;
