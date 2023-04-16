const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputEl.addEventListener("input", slider);

function slider(event){
 textEl.style.fontSize = `${event.currentTarget.value}px`;
}