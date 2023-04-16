const formEl = document.querySelector(".login-form");
const emailEl = document.querySelector(`input[type = "email"]`);
const passwordEl = document.querySelector(`input[type = "password"]`);
const submitBtn = document.querySelector(`button [type ="submit"]`);
formEl.addEventListener("submit", submittance);
function submittance(event){
event.preventDefault();
if(emailEl.value.length == 0){
 alert("Warning! Email input field is blank. All fields must be filled in before submitting!");
}else if(passwordEl.value.length == 0){
    alert("Warning! Password input field is blank. All fields must be filled in before submitting!");
}
const data = {
    email: emailEl.value, 
    password: passwordEl.value
}
console.log(data);
formEl.reset();
}
