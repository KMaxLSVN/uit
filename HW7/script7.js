document.addEventListener("DOMContentLoaded", function(event){


    let elem = document.getElementsByClassName('circle');


    let qwe = setTimeout(function foo() {
        for (let i = 0; i <= 7; i++) {
            let bottom = elem[i].offsetTop;
            elem[i].style.top = bottom + (Math.random() * (16 - 5) + 5) + 'px';
            if (bottom > 1000) {
                clearTimeout(qwe);
                return;
            }
        }
            qwe = setTimeout(foo, 10);
    }, 1);


});
