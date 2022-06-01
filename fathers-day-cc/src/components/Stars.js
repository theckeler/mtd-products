import React from "react";

import "../stylesheets/main.min.css";

const Promos = ({ rating }) => {
  return (
    <div className="product-rating clearfix">
      <div className="ratings">
        <div
          data-bv-show="rating_summary"
          data-bv-productid="CS16E-60V-CORDLESS-CHAINSAW"
          data-bv-seo="false"
          data-bv-ready="true"
        >
          <div className="bv_main_container">
            <button
              id="ratings-summary"
              className="bv_main_container_row_flex"
              role="link"
              type="button"
              aria-expanded="false"
            >
              <div className="bv_stars_component_container">
                {rating.stars.map(function (star) {
                  const randomNum = Math.floor(Math.random() * 10000);
                  console.log("star.percent", star.percent);

                  return (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 25 25"
                      focusable="false"
                      style={{
                        width: "30px !important",
                        height: "30px !important",
                      }}
                    >
                      <path
                        d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
                        //fill={"url('#id" + randomNum + "') !important"}
                        fill={"url(#id" + randomNum + ")"}
                      ></path>
                      <defs>
                        <linearGradient
                          //x1={"99.9%"}
                          x1={star.percent + "%"}
                          y1="0%"
                          x2="100%"
                          y2="0%"
                          id={"id" + randomNum}
                        >
                          <stop
                            offset="0%"
                            style={{
                              stopColor: "#ffc10f",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="1%"
                            style={{
                              stopColor: "rgb(217, 217, 217)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  );
                })}
              </div>
              <div className="bv_avgRating_component_container notranslate">
                {rating.reviewTotal}
              </div>
              <div className="bv_numReviews_component_container">
                &nbsp;
                <div className="bv_numReviews_text">({rating.numReviews})</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promos;
