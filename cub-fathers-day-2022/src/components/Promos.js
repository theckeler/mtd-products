import React from "react";

import "../stylesheets/main.min.css";
import importedData from "../data/Promos.json";
import Stars from "./Stars";

const Promos = () => {
  return (
    <ul className="row list-unstyled">
      {importedData.promos.map((d, i) => {
        return (
          <li className="col-6 mb-4" key={i}>
            <a
              href={d.link}
              className="bg-grey output d-flex flex-column align-items-center text-decoration-none h-100"
              role="button"
            >
              <div className="p-5 d-flex flex-column align-items-center h-100">
                <img src={d.image} alt="" className="mb-2" loading="lazy" />
                <h2
                  className="mb-2 w-100"
                  dangerouslySetInnerHTML={{ __html: d.title }}
                ></h2>
                <Stars rating={d.rating} />
                <ul className="w-100 mb-2 bullets">
                  {d.bullets.map((b, x) => {
                    return (
                      <li
                        className="mb-2"
                        key={x}
                        dangerouslySetInnerHTML={{ __html: b }}
                      ></li>
                    );
                  })}
                </ul>
                <button className="btn btn-primary mt-auto bg-yellow">
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
