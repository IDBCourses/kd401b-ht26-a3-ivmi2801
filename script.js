const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "style2.css";
  link.setAttribute("href", dark ? "style.css" : "style2.css");
});

const link2 = document.querySelector("#readingMode");
const button2 = document.querySelector("#readingModeButton");

button2.addEventListener("click", function () {
  if (link2.getAttribute("href") === "") {
    link2.setAttribute("href", "style3.css");
  } else {
    link2.setAttribute("href", "");
  }
});
