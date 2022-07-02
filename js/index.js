import validator from "./formValidate.js";

// inputs
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
// submit button
const submit = document.getElementById("submit");

submit.addEventListener("submit", ()=> {
    validator(name, email, phone)
})