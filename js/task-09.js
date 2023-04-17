function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnColorEl = document.querySelector(`button[type ="button"]`);
const textColorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");
btnColorEl.addEventListener("click", colorSwitch);
function colorSwitch(){
 getRandomHexColor();
 textColorEl.textContent = `${getRandomHexColor()}`;
 bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
};