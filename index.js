const main = document.querySelector(".main-card");
const mainHeader = document.querySelector(".main-header");
const mainParagraph = document.querySelector(".main-paragraph");
const formCollector = document.getElementById("form");
const signUpSection = document.querySelector(".sign-up-section");
const submitBtn = document.getElementById("submit");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailAddress = document.getElementById("email");
const password = document.getElementById("password");
const emptyPassword = document.querySelector(".empty-password");
const emptyFirstName = document.querySelector(".empty-fname");
const emptyLastName = document.querySelector(".empty-lname");
const notEmail = document.querySelector(".not-email");
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// If form entries are complete then hide form and display thank you text, 
// else if form entries are not complete then display error on entries

function submitBtnClicked(e) {
    e.preventDefault();
    console.log("Herooo")

    let ourFormData = new FormData(e.target);
    let fName = ourFormData.get("first-name");
    let lName = ourFormData.get("last-name");
    let email = ourFormData.get("email");

    if(firstName.value == "") {
        firstName.style.border = "red solid 2px"
        emptyFirstName.style.display = "inherit"
    } else {
        firstName.style.border = "gray solid 1px";
        emptyFirstName.style.display = "none";        
    }

    if(lastName.value == "") {
        lastName.style.border = "red solid 2px"
        emptyLastName.style.display = "inherit"
    } else {
        lastName.style.border = "gray solid 1px";
        emptyLastName.style.display = "none";   
    }

    let isValue = emailAddress.value.length !== 0 && emailRegExp.test(emailAddress.value);

    if(!isValue) {
        emailAddress.style.border = "red solid 2px";
        notEmail.style.display = "initial"
    } else {
        emailAddress.style.border = "gray solid 1px";
        notEmail.style.display = "none";   
    }

    if(password.value == "") {
        password.style.border = "red solid 2px";
        emptyPassword.style.display = "initial";
    } else if((password.value.length < 6)) {
        emptyPassword.innerHTML = "Password must be longer than 6 characters"
    } else {
        password.style.border = "gray solid 1px"; 
        emptyPassword.style.display = "none";      
    }

    if(firstName.value !== "" && lastName.value !== "" && isValue && password.value.length >= 6) {
    main.style.margin = "0em auto"
    mainHeader.innerHTML = `Thank you ${fName} ${lName}!`
    mainParagraph.innerHTML = `Enjoy your 7 day free tral! You will get weekly tips sent to: ${email} and our latest updates of whats to come.`
    signUpSection.style.display = "none"; 
    }

}

formCollector.addEventListener("submit", submitBtnClicked)