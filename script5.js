//Task Сделать картинку которая перемещается по экрану, можно плавно можно нет

let elem = document.getElementById('circle');
let qwe = setTimeout(function foo() {
    let bottom = elem.offsetTop;
    elem.style.top = bottom + 5 + 'px';
    if( bottom > 400 ) {
        clearTimeout(qwe);
        return;
    }
    qwe = setTimeout(foo, 50);
}, 10);


//Task Вывести ряд фибоначчи
//Следующее число получается как сумма двух предыдущих
//1, 1, 2, 3, 5, 8, 13, 21...

function fib( bar ) {
    let a = 1;
    let b = 1;
    for ( let foo = 3; foo <= bar; foo++ ) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(8));

function fibR(n) {
    return n <= 1 ? n : fibR(n - 1) + fibR(n - 2);
}
console.log(fibR(8));