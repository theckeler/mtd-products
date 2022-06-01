import React, { useState, useEffect } from "react";

import "../stylesheets/main.min.css";
import importedData from "../data/fathers-day-6-31-22-3.json";

const Promos = () => {
  return (
    <ul className="row list-unstyled">
      {importedData.promos.map((d, i) => {
        return (
          <li className="col-4 mb-4" key={i}>
            <a
              href={d.link}
              className={`output d-flex flex-column align-items-center text-decoration-none h-100`}
              role="button"
            >
              {d.blocktitle ? (
                <div className="w-100 text-center p-1 bg-black block-title d-flex justify-content-center align-items-center">
                  {d.blocktitle}
                </div>
              ) : null}

              <div className="p-3 d-flex flex-column align-items-center h-100 bg-white">
                <img src={d.image} alt="" className="mb-2" loading="lazy" />
                <h2 className="font-weight-normal mb-2 w-100">{d.title}</h2>
                <p className="mb-2">{d.copy}</p>
                <button
                  className={`btn btn-primary ${d.center ? "" : "mt-auto"}`}
                >
                  {d.buttontitle}
                </button>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Promos;
