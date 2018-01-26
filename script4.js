// Функция принимает число от 1 до 9.
// Возвращает фактроиал этого числа.
// Выполнить задание с рекурсивной фунцией и без неё.

//Task *
function myFunction (i) {
	if ( i >= 0) {
		let result =1;
		while ( i > 0) {
			result = result * i;
			i--;
		}
		return result;
	}
	return i;
}
console.log(myFunction(5));
