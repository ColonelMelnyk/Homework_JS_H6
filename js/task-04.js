const btnOne = document.querySelector(`[data-action="decrement"]`);
const btnTwo = document.querySelector(`[data-action="increment"]`);
const counterValueEl = document.querySelector("#value");
let value = 0;
const operationIncrease = (() =>{
    value +=1;
    counterValueEl.textContent = value;
});
const operationDecrease = (() =>{
    value -=1;
    counterValueEl.textContent = value;
});
btnOne.addEventListener("click", operationDecrease);
btnTwo.addEventListener("click", operationIncrease);