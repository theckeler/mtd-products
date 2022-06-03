import React from "react";

import "../stylesheets/main.min.css";
import importedData from "../data/Tools.json";

const Promos = () => {
  return (
    <>
      <h4 className="text-center mb-4 mr-auto ml-auto w-50">
        Dad has all the tools? Then keep him comfortable and save him time
      </h4>
      <ul className="row list-unstyled">
        {importedData.promos.map((d, i) => {
          return (
            <li className="col-4 mb-4" key={i}>
              <a
                href={d.link}
                className="bg-grey output d-flex flex-column align-items-start text-decoration-none h-100"
                role="button"
              >
                <div className="p-3 d-flex flex-column align-items-start h-100">
                  <img src={d.image} alt="" className="mb-2" loading="lazy" />
                  <h2
                    className="font-weight-normal mb-2 w-100"
                    dangerouslySetInnerHTML={{ __html: d.title }}
                  ></h2>
                  <p className="mb-2">{d.copy}</p>
                  <button className="btn btn-primary mt-auto w-auto d-inline-block bg-yellow">
                    {d.buttontitle}
                  </button>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Promos;
