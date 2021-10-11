fetch("http://127.0.0.1:5500/includes/tb-header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("#main").insertAdjacentHTML("beforebegin", data);
  });
fetch("http://127.0.0.1:5500/includes/tb-footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("#main").insertAdjacentHTML("afterend", data);
  });
