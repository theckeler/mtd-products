import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "./components/Head";

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
ReactDOM.render(<Head />, document.getElementById("head"));
