const inputEl = document.querySelector("#validation-input");
const correctLength = inputEl.getAttribute("data-length");
console.log(correctLength);
inputEl.addEventListener("blur", outBlurCheck);
function outBlurCheck(){
   inputEl.addEventListener("input", count)
   function count(event){
    if(event.currentTarget.value.length != correctLength){
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    } else if(event.currentTarget.value.length == correctLength){
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    }
   }
  
}
