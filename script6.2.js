(function() {
    let elem = document.getElementsByClassName('form')[0],
        re_name = /^[а-яА-Яa-zA-Z0-9]+$/,
        re_email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        login = document.getElementById('login'),
        password = document.getElementById('password'),
        email = document.getElementById('email'),
        err = document.getElementsByClassName('err');

    elem.onsubmit = function() {
    if (!re_name.test(login.value) || !re_name.test(password.value) || !re_email.test(email.value)) {
        for (let i=0; i<=2; i++) {
            console.log('work');
            err[i].style.display = 'block';
        }
    }
}
})();

///^а-яА-Яa-zA-Z0-9$/ can be replaced "\w" for English
///^\w*@\w.com$/