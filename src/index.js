import React from "react";
import ReactDOM from "react-dom";
import './styles.css';

const App = () => {
  return <div className="heading">Welcome to React</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));