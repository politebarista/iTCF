const signupBtn = document.getElementById('sign-upBtn');

function getcookie(a) {var b = new RegExp(a+'=([^;]){1,}');var c = b.exec(document.cookie);if(c) c = c[0].split('=');else return false;return c[1] ? c[1] : false;}

var havecookie = getcookie("authorizedAs");
if (!havecookie) {
    signupBtn.classList.remove("hide");
}

const signupWin = document.querySelector(".sign-up");

signupBtn.addEventListener('click', check);
function check() {
    if (signupWin.classList.contains('show')) {
        signupWin.classList.remove('show');
        console.log('Убрал');
    } else {
        signupWin.classList.add('show');
        console.log('Добавил');
    }
}