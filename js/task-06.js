const inputEl = document.querySelector("#validation-input");
const correctLength = inputEl.getAttribute("data-length");
console.log(correctLength);
inputEl.addEventListener("blur", outBlurCheck);
function outBlurCheck(event){
    const currentLength = event.target.value.trim();
    if(currentLength.length != correctLength){
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    } else if(currentLength.length == correctLength){
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } 
  
}
