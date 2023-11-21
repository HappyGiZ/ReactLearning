import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const text = "Hello world!";

const elem = (
  <div>
    <h2 className="header">Текст: {text}</h2>
    <input type="text" />
    <button tabIndex='0'>Click</button>
    <label htmlFor=""></label>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  elem
);
