import validator from "./formValidate.js";

const inputValues = document.querySelectorAll(".inputValue")

// step
const step = document.querySelector(".first_step .number")

// submit button
const submit = document.getElementById("submit");

// submit form
submit.addEventListener("submit", ()=> {
    // inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const date = document.getElementById("date");
    const success = document.querySelectorAll(".success")

    validator(name, email, phone, date, success)
})
// save input value in localStorage
inputValues.forEach(item => {
    item.addEventListener("input", () => {
        localStorage.setItem(item.name, item.value);

        // change step style
        if (item.value.length > 0){
            step.classList.add("active")
        }
    })
    if (localStorage.getItem(item.name)){
        step.classList.add("active")
        item.value =localStorage.getItem(item.name)
        
    }
});