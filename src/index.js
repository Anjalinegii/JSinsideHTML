import React from "react";
import ReactDOM from "react-dom";
const name = "Anjali";
const currentYear = new Date().getFullYear();
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
