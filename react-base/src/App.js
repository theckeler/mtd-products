import React from "react";
import "./stylesheets/index.min.css";

function App() {
  // const fetchURL =
  //   "/on/demandware.static/-/Sites-cubcadet-Library/default/v0bd9709d89098b9cca3ad99d631a216404a517c1/json/test.json";

  // fetch(fetchURL, {
  //   method: "POST",
  //   //headers: connection.headers,
  //   body: JSON.stringify(),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  // fetch("./imports/data.json")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log(error));

  //console.log(data);

  const section1 = {
    img: "https://placeimg.com/1000/480/arch",
    h1: "H1 Header",
    mainCopy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum ultrices nulla, et sodales eros volutpat a. Nulla vitae diam eu quam bibendum dictum nec id orci. Morbi ut sapien facilisis, commodo sem nec, ultricies massa. Aliquam ullamcorper a tellus nec malesuada. Morbi convallis sodales justo at rhoncus. Nullam sed odio neque. Donec vehicula lectus sed tincidunt lacinia. Nullam vel nulla varius, blandit erat non, ultricies urna. Quisque venenatis massa et massa vehicula sodales.",
  };
  //console.log(obj);

  return (
    <>
      <section className="section-1">
        <div className="wrapper">
          <img src={section1.img} />
          <h1>{section1.h1}</h1>
          <div>
            <p>{section1.mainCopy}</p>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="wrapper">
          <ul className="rows">
            <li className="row row-1">
              <div>
                <img src="https://placeimg.com/1000/480/arch" />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam consequat augue ut ultrices dictum. Proin tincidunt
                  imperdiet nibh in fringilla. Curabitur augue nibh, dignissim
                  sit amet dolor vitae, fermentum eleifend lacus. Cras eleifend
                  nisi a lacus viverra, quis viverra diam iaculis. Donec et
                  tellus dolor.
                </p>
              </div>
            </li>
            <li className="row row-2">
              <div>
                <img src="https://placeimg.com/1000/480/arch" />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam consequat augue ut ultrices dictum. Proin tincidunt
                  imperdiet nibh in fringilla. Curabitur augue nibh, dignissim
                  sit amet dolor vitae, fermentum eleifend lacus. Cras eleifend
                  nisi a lacus viverra, quis viverra diam iaculis. Donec et
                  tellus dolor.
                </p>
              </div>
            </li>
            <li className="row row-3">
              <div>
                <img src="https://placeimg.com/1000/480/arch" />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam consequat augue ut ultrices dictum. Proin tincidunt
                  imperdiet nibh in fringilla. Curabitur augue nibh, dignissim
                  sit amet dolor vitae, fermentum eleifend lacus. Cras eleifend
                  nisi a lacus viverra, quis viverra diam iaculis. Donec et
                  tellus dolor.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
