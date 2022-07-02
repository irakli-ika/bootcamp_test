const validator = (name, email, phone, date, errors) => {
        // check name
    if (name.value.length == 0 || name.value.length < 2) {
        errors.push({"name": "Please enter valid name"})
    } else console.log("ok");
    // check email
    if (email.value.length == 0 || !email.value.includes("@redberry.ge")) {
        errors.push({"name": "Please enter valid email address"})
    } else console.log("ok");
    // check phone
    if (phone.value.length == 0 || !(phone.value.length == 9)
        || !(phone.value.match(/[0-9]/g)) || phone.value.match(/[a-zA-Z]/g)) {
            errors.push({"name": "Please enter valid phone"})
    } else console.log("ok");
    // check date
    if (date.value == "") {
        errors.push({"name": "Please enter date of birth"})
    } else console.log("ok");
}

export default validator