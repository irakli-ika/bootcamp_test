import validator from "./formValidate.js";

const inputValue = document.querySelectorAll(".inputValue")
// error array
const errors = []
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

    validator(name, email, phone, date, errors)
    console.log(errors);
})



// save input value in localStorage
inputValue.forEach(item => {
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

