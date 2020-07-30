const signupBtn = document.getElementById('sign-upBtn');
const signinBtn = document.getElementById('sign-inBtn');
const profile = document.getElementById('profile');

function getcookie(a) {var b = new RegExp(a+'=([^;]){1,}');var c = b.exec(document.cookie);if(c) c = c[0].split('=');else return false;return c[1] ? c[1] : false;}

var havecookie = getcookie("authorizedAs");
if (!havecookie) {
    signupBtn.classList.remove("hide");
    signinBtn.classList.remove("hide");
    profile.classList.add("hide");
}

const signupWin = document.querySelector(".sign-up");
const signinWin = document.querySelector(".sign-in");

signupBtn.addEventListener('click', checkSignup);
function checkSignup() {
    if (signupWin.classList.contains('show')) {
        signupWin.classList.remove('show');
        console.log('Убрал');
    } else {
        signupWin.classList.add('show');
        console.log('Добавил');
    }
}

signinBtn.addEventListener('click', checkSignin);
function checkSignin() {
    if (signinWin.classList.contains('show')) {
        signinWin.classList.remove('show');
        console.log('Убрал');
    } else {
        signinWin.classList.add('show');
        console.log('Добавил');
    }
}