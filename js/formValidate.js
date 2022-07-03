const validator = (name, email, phone, date, success) => {
    // error array
    let errors = []
    
    // check name
    if (name.value.length == 0 || name.value.length < 2) {
        errors.push({
            "name": "name",
            "message": "Please enter valid name"
        })
        name.classList.add("inputError")
        success[1].style.display = "none"
    } else {
        name.classList.remove("inputError")
        success[0].style.display = "block"
    }
    // check email
    if (email.value.length == 0 || !email.value.includes("@redberry.ge")) {
        errors.push({
            "name": "email",
            "message": "Please enter valid email address"
        })
        email.classList.add("inputError")
        success[1].style.display = "none"
    } else {
        email.classList.remove("inputError")
        success[1].style.display = "block"
    }
    // check phone
    if (phone.value.length == 0 || !(phone.value.length == 9)
        || !(phone.value.match(/[0-9]/g)) || phone.value.match(/[a-zA-Z]/g)) {
            errors.push({
                "name": "phone",
                "message": "Please enter valid phone"
            })
            phone.classList.add("inputError")
            success[2].style.display = "none"
    } else {
        phone.classList.remove("inputError")
        success[2].style.display = "block"
    } 
    // check date
    if (date.value == "") {
        errors.push({
                "name": "date",
                "message": "Please enter date of birth"
            })
        date.classList.add("inputError")
        success[3].style.display = "none"
    } else {
        date.classList.remove("inputError")
        success[3].style.display = "block"
    }

    if(errors.length > 0) {
        const messageBox = document.getElementById("message")
        errors.forEach(error => {            
            if(error) {


                messageBox.insertAdjacentHTML("beforeend", 
                `<li class="${error.name}">
                    <div class="msg_header">
                        <div>
                            <div class="info_icon"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0.5C4.47768 0.5 0 4.97768 0 10.5C0 16.0223 4.47768 20.5 10 20.5C15.5223 20.5 20 16.0223 20 10.5C20 4.97768 15.5223 0.5 10 0.5ZM9.28571 5.67857C9.28571 5.58036 9.36607 5.5 9.46429 5.5H10.5357C10.6339 5.5 10.7143 5.58036 10.7143 5.67857V11.75C10.7143 11.8482 10.6339 11.9286 10.5357 11.9286H9.46429C9.36607 11.9286 9.28571 11.8482 9.28571 11.75V5.67857ZM10 15.5C9.71963 15.4943 9.45267 15.3789 9.25641 15.1786C9.06014 14.9783 8.95022 14.709 8.95022 14.4286C8.95022 14.1481 9.06014 13.8789 9.25641 13.6786C9.45267 13.4783 9.71963 13.3629 10 13.3571C10.2804 13.3629 10.5473 13.4783 10.7436 13.6786C10.9399 13.8789 11.0498 14.1481 11.0498 14.4286C11.0498 14.709 10.9399 14.9783 10.7436 15.1786C10.5473 15.3789 10.2804 15.4943 10 15.5Z" fill="#DC3545"/>
                                </svg>
                            </div>
                        <h3>invalid ${error.name}</h3>
                        </div>
                        <div class="close">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.678445 0.678628C0.74521 0.611693 0.824525 0.558587 0.911846 0.522353C0.999167 0.486119 1.09278 0.467468 1.18732 0.467468C1.28186 0.467468 1.37547 0.486119 1.46279 0.522353C1.55011 0.558587 1.62943 0.611693 1.69619 0.678628L5.49982 4.48369L9.30344 0.678628C9.37027 0.611801 9.4496 0.558792 9.53692 0.522625C9.62423 0.486459 9.71781 0.467845 9.81232 0.467845C9.90683 0.467845 10.0004 0.486459 10.0877 0.522625C10.175 0.558792 10.2544 0.611801 10.3212 0.678628C10.388 0.745454 10.441 0.824788 10.4772 0.912101C10.5134 0.999414 10.532 1.093 10.532 1.1875C10.532 1.28201 10.5134 1.37559 10.4772 1.4629C10.441 1.55022 10.388 1.62955 10.3212 1.69638L6.51613 5.5L10.3212 9.30363C10.388 9.37045 10.441 9.44979 10.4772 9.5371C10.5134 9.62441 10.532 9.718 10.532 9.8125C10.532 9.90701 10.5134 10.0006 10.4772 10.0879C10.441 10.1752 10.388 10.2546 10.3212 10.3214C10.2544 10.3882 10.175 10.4412 10.0877 10.4774C10.0004 10.5135 9.90683 10.5322 9.81232 10.5322C9.71781 10.5322 9.62423 10.5135 9.53692 10.4774C9.4496 10.4412 9.37027 10.3882 9.30344 10.3214L5.49982 6.51631L1.69619 10.3214C1.62937 10.3882 1.55003 10.4412 1.46272 10.4774C1.37541 10.5135 1.28183 10.5322 1.18732 10.5322C1.09281 10.5322 0.999231 10.5135 0.911918 10.4774C0.824605 10.4412 0.745271 10.3882 0.678445 10.3214C0.611618 10.2546 0.558608 10.1752 0.522442 10.0879C0.486276 10.0006 0.467661 9.90701 0.467661 9.8125C0.467661 9.718 0.486276 9.62441 0.522442 9.5371C0.558608 9.44979 0.611618 9.37045 0.678445 9.30363L4.48351 5.5L0.678445 1.69638C0.61151 1.62961 0.558404 1.5503 0.52217 1.46298C0.485936 1.37566 0.467285 1.28204 0.467285 1.1875C0.467285 1.09296 0.485936 0.99935 0.52217 0.912029C0.558404 0.824708 0.61151 0.745393 0.678445 0.678628Z" fill="#95939A"/>
                            </svg>                                        
                        </div>
                    </div>
                    <div class="msg_body">
                        <p>
                            ${error.message}
                        </p>
                    </div>
                </li>`);
            }
        })
    } else {
        window.location.href = "../createLast.html"
    }
}

export default validator