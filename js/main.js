const signupBtn = document.getElementById('sign-upBtn');
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