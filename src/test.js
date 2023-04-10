import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import "./index.css";

// document.addEventListener("DOMContentLoaded", () => {
//   new Splide(".splide", {
//     type: "loop",
//     perPage: 1,
//     autoPlay: true,
//     arrows: false,
//     width: "100%",
//     pauseOnHover: false,
//     height: "100vh",
//     speed: 1000,
//   }).mount();
// });

document.addEventListener("DOMContentLoaded", function () {
  let slide = new Splide(".splide", {
    type: "loop",
    rewind: "true",
    speed: 1000,
    perPage: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    width: "100%",
    height: "100vh",
  });
  slide.mount();
});
