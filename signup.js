let userNameInput = document.getElementById('userNameInput');
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
let signUpBtn = document.getElementById('signUpBtn');
let alertMessage = document.getElementById('alertMessage');
let userContainer = [];

if (localStorage.getItem('Users') != null) {
    userContainer = JSON.parse(localStorage.getItem('Users'));
}


function signUp() {
    let data = {
        userName: userNameInput.value,
        email: emailInput.value,
        passwrod: passwordInput.value
    }
    if (checkInputsEmpty() == true) {

        getAlertMessage('All Inputs are Required', 'red');
    }
    else {
        if (checkEmailExist() == true) {
            getAlertMessage('Email Already Exists', 'red');
        }
        else {
            userContainer.push(data);
            localStorage.setItem('Users', JSON.stringify(userContainer));
            clrFrorm();
            getAlertMessage('True', 'green');
        }
    }
}
function getAlertMessage(text, color) {
    alertMessage.classList.replace('d-none', 'd-block');
    alertMessage.innerHTML = text;
    alertMessage.style.color = color;
}
function clrFrorm() {
    userNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}
function checkInputsEmpty() {
    if (userNameInput.value == '' || emailInput.value == '' || passwordInput.value == '')
        return true;
    else
        return false;
}
function checkEmailExist() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].email == emailInput.value)
            return true;
    }
}
signUpBtn.addEventListener('click', signUp)


