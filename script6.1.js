//Task Сделать картинку которая перемещается по экрану, можно плавно можно нет

let elem = document.getElementById('circle');
let qwe = setTimeout(function foo() {
    let bottom = elem.offsetTop;
    elem.style.top = bottom + 5 + 'px';
    if( bottom > 600 ) {
        clearTimeout(qwe);
        return;
    }
    qwe = setTimeout(foo, 5);
}, 1);

document.getElementById('circle').onclick = function() {
    alert('You caught it!');
}
