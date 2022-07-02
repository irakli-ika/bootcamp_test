import validator from "./formValidate.js";


const inputValue = document.querySelectorAll(".inputValue")
// error array
const errors = []

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
})

// save input value in localStorage
inputValue.forEach(item => {
    item.addEventListener("input", (e) => {
        localStorage.setItem(item.name, item.value);
    })    
});


inputValue.forEach(item => { 
    if (localStorage.getItem(item.name)){
        item.value =localStorage.getItem(item.name)
    }
});
