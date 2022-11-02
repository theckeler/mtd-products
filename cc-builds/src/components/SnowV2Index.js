import React from "react";
import indexData from "../data/index.json";
import "../scss/main.scss";
import { ReactComponent as Logo } from "../images/x-series.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { ReactComponent as Intellipower } from "../images/intellipower-logo.svg";
import { ReactComponent as EFI } from "../images/efi-logo.svg";
import Button from "./elements/Button";
import Stars from "./elements/Stars";

const App = () => {
  console.log(indexData);

  return (
    <div className="snow-v2 snow-v2-index">
      <section className="section-1 hero">
        <div className="wrapper">
          <div className="block bg-black clip-corner">
            <Logo />
          </div>
        </div>
        <img src={indexData.hero.img} alt={indexData.hero.alt} />
      </section>

      <section className="section-2 bg-black">
        <div className="pluses top">
          <Plus />
          <Plus />
          <Plus />
          <Plus />
          <Plus />
          <Plus />
          <Plus />
          <Plus />
          <Plus />
        </div>
        <div className="wrapper">
          <h1 dangerouslySetInnerHTML={{ __html: indexData.copyBlock.h1 }}></h1>
          <p dangerouslySetInnerHTML={{ __html: indexData.copyBlock.copy }}></p>
        </div>
        <div className="pluses bottom">
          <Plus />
          <Plus />
          <Plus />
          <Plus />
          <Plus />
          <Plus />
        </div>
      </section>

      <section className="section-3">
        <div className="wrapper">
          <div className="container">
            <h2>{indexData.lineup.title}</h2>
            <ul className="row list-unstyled">
              {indexData.lineup.blocks.map((block, i) => {
                return (
                  <li key={i} className="col col-12 col-sm-6 col-md-4">
                    <a href={block.url} className="unstyled link">
                      <img src={block.img} alt={block.alt} />
                      <strong className="title">{block.title}</strong>
                      <p className="copy">{block.copy}</p>
                      <div className="eng-for">Engineered for</div>
                      <ul className="row list-unstyled">
                        {block.engFor.map((subblock, i) => {
                          return (
                            <li
                              key={i}
                              className="flex-column col col-12 col-sm-6 col-md-4 eng-for-blocks"
                            >
                              <strong>{subblock.title}</strong>
                              <img src={subblock.img} alt="" className="icon" />
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: subblock.copy,
                                }}
                                style={{ marginTop: "auto" }}
                              ></p>
                            </li>
                          );
                        })}
                      </ul>
                      <Button
                        addClass="bg-black"
                        copy={block.button.copy}
                        url={block.button.url}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-4 snow-picker">
        <div id="product-finder-snow-blowers">
          {/* <script>
            (function(c,a,r,t,f,u,l)
            {
              ((c[u] =
                c[u] ||
                function () {
                  (c[u].q = c[u].q || []).push(arguments);
                }),
              (l = a.createElement(r)),
              (l.async = 1),
              (l.id = u + "scr"),
              (l.src = f),
              a[t].appendChild(l))
            }
            )(window,document,"script","body","//embed.cartfulsolutions.com/cub-cadet-finder/recommendation.min.js","cfl643");
          </script> */}
        </div>
      </section>

      <section className="section-5 quote">
        <div className="wrapper">
          <div className="block bg-white clip-corner">
            <ul className="row list-unstyled">
              <li className="col col-12 col-sm-6 col-md-6 title">
                <strong>{indexData.quote.title}</strong>
              </li>
              <li
                className="col col-12 col-sm-6 col-md-6"
                style={{ textAlign: "right" }}
              >
                <Stars fill="#FFC10F" />
              </li>
            </ul>
            <p className="copy">{indexData.quote.copy}</p>
            <ul className="row list-unstyled">
              <li className="col col-sm-6 col-md-6 author">
                <strong>{indexData.quote.name}</strong>
              </li>
              <li
                className="col col-sm-6 col-md-6 unit"
                dangerouslySetInnerHTML={{
                  __html: indexData.quote.unit,
                }}
              ></li>
            </ul>
          </div>
        </div>
        <img src={indexData.quote.img} alt={indexData.quote.alt} />
      </section>

      <section className="section-6">
        <div className="wrapper container">
          <ul className="row list-unstyled">
            <li className="col-12 col-sm-6 col-md-6 p-1 flex">
              <div className="bg-black clip-corner p-2 flex flex-column">
                <div className="logo intellipower p-6">
                  <Intellipower />
                </div>
                <ul className="flex list-unstyled p-2">
                  <li className="plus">+</li>
                  <li className="content">
                    <p
                      className="copy title"
                      dangerouslySetInnerHTML={{
                        __html: indexData.intellipower.blocks[0].title,
                      }}
                    ></p>
                    <p
                      className="copy"
                      dangerouslySetInnerHTML={{
                        __html: indexData.intellipower.blocks[0].copy,
                      }}
                    ></p>
                    <small
                      dangerouslySetInnerHTML={{
                        __html: indexData.intellipower.blocks[0].tag,
                      }}
                    ></small>
                  </li>
                </ul>
              </div>
            </li>
            <li className="col-12 col-sm-6 col-md-6 p-1 flex">
              <div className="bg-black clip-corner p-2 flex flex-column">
                <div className="logo efi p-6">
                  <EFI />
                </div>
                <ul className="flex list-unstyled p-2">
                  <li className="plus">+</li>
                  <li className="content">
                    <p
                      className="copy title"
                      dangerouslySetInnerHTML={{
                        __html: indexData.intellipower.blocks[1].title,
                      }}
                    ></p>
                    <p
                      className="copy"
                      dangerouslySetInnerHTML={{
                        __html: indexData.intellipower.blocks[1].copy,
                      }}
                    ></p>
                    <small
                      dangerouslySetInnerHTML={{
                        __html: indexData.intellipower.blocks[1].tag,
                      }}
                    ></small>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <Button
            copy={indexData.intellipower.button.copy}
            url={indexData.intellipower.button.url}
            addClass="clip-corner bg-black mx-auto"
          />
        </div>
      </section>

      <section className="section-7">
        <div className="wrapper">
          <h2 className="text-center">{indexData.machineExtreme.h2}</h2>
          <p className="copy text-center">{indexData.machineExtreme.copy}</p>

          <ul className="row list-unstyled">
            {indexData.machineExtreme.blocks.map((block, i) => {
              return (
                <li className="col-12 col-sm-6 col-md-6 p-1" key={i}>
                  <div>
                    <ul className="row list-unstyled align-items-center">
                      <li className="col-12 col-sm-6 col-md-3 p-1">
                        <img src={block.icon} alt="" />
                      </li>
                      <li className="col-12 col-sm-6 col-md-9 p-1 pl-6 pr-6">
                        <strong>{block.title}</strong>
                        <p>{block.copy}</p>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-8">
        <div className="wrapper">
          <img
            className="mobile"
            style={{ width: "100%" }}
            src={indexData.imgBlocks.mobile}
            alt=""
          />
          <img
            className="desktop"
            style={{ width: "100%" }}
            src={indexData.imgBlocks.desktop}
            alt=""
          />
        </div>
      </section>

      <section className="section-9">
        <div className="wrapper container">
          <h2 className="text-center">{indexData.compare.h2}</h2>
          <ul className="compare row list-unstyled">
            {indexData.compare.blocks.map((block, i) => {
              return (
                <React.Fragment key={i}>
                  {block.row.map((block2, x) => {
                    let output = "";
                    if (block2.img) {
                      output += `<img src=${block2.img} />`;
                    }

                    if (block2.copy) {
                      //output += block2.copy;
                      output += `<p>${block2.copy}</p>`;
                    }

                    if (block2.active === true) {
                      output = "&bull;";
                    } else if (block2.active === false) {
                      output = "&ndash;";
                    }
                    return (
                      <li className="flex p-3" key={x}>
                        <div
                          className="text-center"
                          dangerouslySetInnerHTML={{
                            __html: output,
                          }}
                        ></div>
                      </li>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </ul>
          <h3 className="text-center">{indexData.compare.copy}</h3>
          <Button
            copy={indexData.compare.button.copy}
            url={indexData.compare.button.url}
            addClass="clip-corner bg-black mx-auto mt-5"
          />
        </div>
      </section>

      <section className="section-10">
        <div className="wrapper">
          <h2 className="text-center">{indexData.howTo.h2}</h2>
          <div className="slick">
            <ul className="list-unstyled row">
              {indexData.howTo.blocks.map((block, i) => {
                return (
                  <li
                    className="col-12 col-sm-6 col-md-4 p-1 flex flex-column"
                    key={i}
                  >
                    <a href={block.url} className="flex flex-column">
                      <img src={block.img} alt="" />
                      <div className="content flex flex-column p-3">
                        <strong className="title">{block.title}</strong>
                        <p className="copy mt-2">{block.copy}</p>
                        <span className="read-more mt-2">Read more</span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-11">
        <div className="wrapper">
          <h2 className="text-center">{indexData.attAcc.h2}</h2>
          <div className="slick">
            <ul className="list-unstyled row">
              {indexData.attAcc.blocks.map((block, i) => {
                return (
                  <li
                    className="col-12 col-sm-6 col-md-4 p-1 flex flex-column"
                    key={i}
                  >
                    <a href={block.url} className="flex flex-column">
                      <img src={block.img} alt="" />
                      <div className="content flex flex-column p-3">
                        <strong className="title">{block.title}</strong>
                        <p className="copy mt-2">
                          <b>Item#:</b> {block.item}
                        </p>
                        <p className="price mt-2">{block.price}</p>
                        <button className="bg-black">Add to Cart</button>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
