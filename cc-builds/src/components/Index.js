import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../scss/main.scss";
import "../scss/home.scss";

import SnowV2Index from "./SnowV2Index";
import IntelliPower from "./IntelliPower";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/snowv2" element={<SnowV2Index />} />
      <Route path="/intellipower" element={<IntelliPower />} />
    </Routes>
  );
};

function Home() {
  return (
    <div
      className="wrapper"
      style={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textTransform: "uppercase" }}>CC Page Builds:</h1>
      <ul className="home-list">
        <li>
          <strong className="title">Snow V2:</strong>
          <ul>
            <li>
              <Link to="/snowv2">Snow V2 Index</Link>
            </li>
            <li>
              <Link to="/intellipower">IntelliPower</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Index;
