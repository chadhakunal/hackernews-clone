/*
  Developed By Kunal Chadha
  Hacker News Clone
*/

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Import Stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
