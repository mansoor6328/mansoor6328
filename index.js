// Methods, classes, functions will get from this library
import React from "react";
// This Library will help to setup virtual dom
import ReactDOM from "react-dom";
import styles from "./styles";
import "./styles.css";

// HTML, CSS, Javascrip all in javascript file

// Componet
// 1. Start Name of the component with capital letter
// 2. apply inline style as a object and property Name should be in camelCase

const App = (params) => {
  return (
    <div>
      <h1 className="h1">{params.title}</h1>
      {/* <p>hello From react.js</p>
      <input type="text" />
      <input type="pasword" />
      <input type="checkbox" /> */}
    </div>
  );
};

ReactDOM.render(
  <div>
    <App title="React.JS" />
    <App title="React Native" />
  </div>,
  document.getElementById("root")
);
