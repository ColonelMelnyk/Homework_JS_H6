const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputEl.addEventListener("input", slider);
textEl.style.fontSize = `${inputEl.value}px`;
function slider(event){
 textEl.style.fontSize = `${event.currentTarget.value}px`;
}