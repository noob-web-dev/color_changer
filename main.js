import { getColorList } from "./src/js/colors.js";
import { counterComponent } from "./src/js/components/counter/counter.js";

const appDiv = document.getElementById("app");
const bodyElement = document.getElementById("body");
const textNode = document.createTextNode("color switcher");

const [color] = getColorList();

let colorButton = document.createElement("button");
colorButton.classList.add("btn");
colorButton.appendChild(textNode);
colorButton.setAttribute("style", `background-color: ${color.bgColor};`);
colorButton.addEventListener("click", (e) => {
  bodyElement.setAttribute("style", `background-color: ${color.bgColor};`);
  const [newColor] = getColorList();
  color.bgColor = newColor.bgColor;
  colorButton.setAttribute("style", `background-color: ${color.bgColor};`);
});
appDiv.appendChild(colorButton);
appDiv.appendChild(counterComponent);
