import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Styles
// Generics
import "./styles/generics/reset.scss";
// Elements
import "./styles/elements/elements.scss";
// Utilities
import "./styles/utilities/utilities.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
