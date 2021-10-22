import "./stylesheets/index.min.css";
import React from "react";

function App() {
  const fetchURL =
    "/on/demandware.static/-/Sites-cubcadet-Library/default/v0bd9709d89098b9cca3ad99d631a216404a517c1/json/test.json";

  fetch(fetchURL, {
    method: "POST",
    //headers: connection.headers,
    body: JSON.stringify(),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <>
      <div className="wrapper">
        <h1>Header</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            bibendum ultrices nulla, et sodales eros volutpat a. Nulla vitae
            diam eu quam bibendum dictum nec id orci. Morbi ut sapien facilisis,
            commodo sem nec, ultricies massa. Aliquam ullamcorper a tellus nec
            malesuada. Morbi convallis sodales justo at rhoncus. Nullam sed odio
            neque. Donec vehicula lectus sed tincidunt lacinia. Nullam vel nulla
            varius, blandit erat non, ultricies urna. Quisque venenatis massa et
            massa vehicula sodales.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
