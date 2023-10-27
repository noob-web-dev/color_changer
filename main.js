import { getColorList } from "./src/js/colors.js";

const appDiv = document.getElementById("app");
const bodyElement = document.getElementById("body");
const textNode = document.createTextNode("new color");

const [color] = getColorList();

let btn = document.createElement("button");
btn.classList.add("btn");
btn.appendChild(textNode);
btn.setAttribute("style", `background-color: ${color.bgColor};`);
btn.addEventListener("click", (e) => {
  bodyElement.setAttribute("style", `background-color: ${color.bgColor};`);
  const [newColor] = getColorList();
  color.bgColor = newColor.bgColor;
  btn.setAttribute("style", `background-color: ${color.bgColor};`);
});
appDiv.appendChild(btn);
