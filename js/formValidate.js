const validator = (name, email, phone) => {
        // check name
    if (name.value.length == 0 || name.value.length < 2) {
        console.log("error");
    } else console.log("ok");
    // check email
    if (email.value.length == 0 || !email.value.includes("@redberry.ge")) {
        console.log("email error");
    } else console.log("ok");
    // check phone
    if (phone.value.length == 0 || !(phone.value.length == 9)
        || !(phone.value.match(/[0-9]/g)) || phone.value.match(/[a-zA-Z]/g)) {
        console.log("error");
    } else console.log("opk");
}

export default validator