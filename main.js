import {  getColorList } from "./src/js/colors.js";

const appDiv = document.getElementById("app");
const bodyElement = document.getElementById("body");

const colorsList = getColorList();

colorsList.forEach((color, i) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.setAttribute("style", `background-color: ${color.bgColor};`);
  btn.addEventListener("click", (e) => {
    bodyElement.setAttribute("style", `background-color: ${color.bgColor};`);
  });
  btn.setAttribute("id", `${i}`);
  btn.appendChild(document.createTextNode(color.bgColor));
  appDiv.appendChild(btn);
});
