import React from "react";
import ReactDOM from "react-dom";
import Index from "./components/Index";
import Header from "./templates/Header";
import Footer from "./templates/Footer";

ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Index />, document.getElementById("app"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
