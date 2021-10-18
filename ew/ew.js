// SETUP:
//document.querySelectorAll(".enterSerialNumber-modal")[1].remove();
document.querySelector(".hero.slant-down.content-page-image").remove();
const moveMe = document.querySelector(".enterSerialNumber-modal");
const modalParent = document.querySelector("#modalMoveHere");
var fragment = document.createDocumentFragment();
fragment.appendChild(moveMe);
modalParent.appendChild(fragment);
const modal = document.querySelector(".section-modal");
const makeFakeDivForTesting = document.createElement("div");
makeFakeDivForTesting.classList.add("modal-backdrop", "show", "fade");

//REMOVE before moving to staging:
document
  .querySelector("#enterSerialNumber")
  .addEventListener("click", function (e) {
    console.log("enterSerialNumber click");
    modalParent.querySelector(".modal").style.display = "block";
    modalParent.querySelector(".modal").classList.add("show");
    document.querySelector("body").append(makeFakeDivForTesting);
  });

// FAQs:
var divs = document.querySelectorAll(".question").forEach(function (el) {
  el.addEventListener("click", function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  });
});

// Modal:
const displayWindowSize = () => {
  let w = window.innerWidth;
  const allEl = document.querySelectorAll(".check-eligibility");

  if (w <= 1024) {
    console.log("mobile");
    modal.classList.add("modal-mobile");
    modal.classList.remove("modal-desktop");
    // document.querySelector("#modal-close").click();
    // if (allEl[0].hasAttribute("data-target")) {
    //   allEl.forEach(function (el) {
    //     el.removeAttribute("data-target");
    //     el.removeAttribute("data-toggle");
    //     el.addEventListener("click", addClickEvent);
    //   });
    // }
  } else {
    console.log("desktop");
    modal.classList.add("modal-desktop");
    modal.classList.remove("modal-mobile");
    // if (!allEl[0].hasAttribute("data-target")) {
    //   document.querySelector(".section-modal").classList.remove("active");
    //   allEl.forEach(function (el) {
    //     el.setAttribute("data-target", "#ew-modal");
    //     el.setAttribute("data-toggle", "modal");
    //     el.removeEventListener("click", addClickEvent);
    //   });
    // }
  }
};
const addClickEvent = (e) => {
  const modalSection = document.querySelector(".section-modal");
  setTimeout(function () {
    modalSection.classList.add("active");
    window.scrollTo({
      top: modalSection.offsetTop - 20,
      left: 0,
      behavior: "smooth",
    });
  }, 400);
};

window.addEventListener("resize", displayWindowSize);
displayWindowSize();
