const signupBtn = document.getElementById('sign-upBtn');

function getCookie(authorizedAs) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

if (!getCookie) {
    signupBtn.classList.add('show');
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