// Создать функцию которая будет считать факториал числа которое в нее передадут. 
// В случае неправильного аргумента или его отсутствия выбрасывать ошибку. 
// Сделать несколько подсчетов. Результат вывести в консоль.



function sum(num){{
	if(typeof num !== 'number')
		throw new Error('It is not number')};

	const number = num
	let result = 1;
	for(let i=1; i<=number; i++){
		result = result*i;
	}
	console.log(result);
}


sum(5);
sum('a');
sum(9);