
function login() {
    emailvalidation()
    passwordvalidation()
 
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let users = JSON.parse(localStorage.getItem('users'))

    let credential = users.filter((value) => {
        return value.email == email && value.password == password
    });
    if (credential.length <= 0) {

        alert('Invalid email Or Password')

    }

    let emailcheck = credential.reduce((v) => {
        return v.email == email
    })
    let passwordcheck = credential.reduce((v) => {
        return v.password == password
    })
    if (emailcheck && passwordcheck) {
        window.location.href = 'index.html'
    }




}

function emailvalidation() {
    let emailcheck = /^[A-Za-z_.0-9]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z.0-9]{2,6}$/;
    let email = document.getElementById("email").value;
    if (email.match(emailcheck)) {
        document.getElementById('emailerror').innerText = ""
    } else {
        document.getElementById('emailerror').innerText = "Invalid Email"
    }

}

function passwordvalidation() {
    let passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    let password = document.getElementById("password").value;

    if (password.match(passwordcheck)) {
        document.getElementById('pwderror').innerText = ""
    } else {
        document.getElementById('pwderror').innerText = "Required One Alphabet One Number & Special Character"

    }

}
