(function() {
    let elem = document.getElementsByClassName('form'),
        re_name = /^а-яА-Яa-zA-Z0-9$/,//can be replaced "\w" for English
        re_email = /^\w*@\w.com$/,
        login = document.getElementById('#login'),
        password = document.getElementById('#password'),
        email = document.getElementById('#email'),
        err = document.getElementById('.err');

    //elem.submit
    document.getElementById('#sup').onclick = function() {
    if (!re_name.test(login.value) && !re_name.test(password.value)
        && !re_email.test(email.value)) {
        err.display = 'block';
    }
}
})();