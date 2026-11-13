const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "style2.css";
  link.setAttribute("href", dark ? "style.css" : "style2.css");
});
