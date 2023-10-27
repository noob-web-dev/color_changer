export const counterComponent = document.createElement("div");

const countElement = document.createElement("p");
const countUpBtn = document.createElement("button");
const countDownBtn = document.createElement("button");

let count = 0;

countElement.classList.add("count");
countUpBtn.classList.add("btn");
countDownBtn.classList.add("btn");

countElement.innerText = `${count}`;
countUpBtn.innerText = "count up";
countDownBtn.innerText = "count down";

countUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ++count;
  countElement.innerText = `${count}`;
});
countDownBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!count <= 0) {
    --count;
    countElement.innerText = `${count}`;
  }
});

counterComponent.appendChild(countElement);
counterComponent.appendChild(countUpBtn);
counterComponent.appendChild(countDownBtn);
