//Task Сделать картинку которая перемещается по экрану, можно плавно можно нет

//let foo = document.getElementById('fly');
//function moved () {
//    foo.style.right = parseInt(foo.style.right) + 20 + 'px';
//}
//function timeToMove () {
//    let bar = setInterval( moved, 1000 )
//}
//timeToMove();
(function(){
    let foo = 10;
    let bar = 0;
    timeToMove = function () {
        let elem = document.getElementById('circle');
        let bottom = elem.offsetTop;
        if (bar < 10) {
            setTimeout(timeToMove, foo);
            elem.style.top = bottom + 20 + 'px';
        }
        bar++;
    }
})();


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

//function fibR(n) {
//    return n <= 1 ? n : fibR(n - 1) + fibR(n - 2);
//}
function fibR ( n ) {
    if ( n >= 1 ) {
        fibR( n-1 ) + fibR( n-2 )
    }
    return n;
}

console.log(fibR(8));