import React from "react";
import ReactDOM from "react-dom";

import Header from "./templates/Header";
import Footer from "./templates/Footer";
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Footer />, document.getElementById("footer"));

if (module.hot) {
  module.hot.accept();
}
