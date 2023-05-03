// Создать функцию которая имеет два параметра:
	// массив
	// функция по которой этот массив будет фильтроваться.
 //  Результатом функции должно быть количество элементов в массиве         которые соответствуют критериям в функции которая передается аргументом. 

const array = [1,2,3,4,5,6,7,8,9,10]

function isBigEnought(array){
	return array<=5
}

function numberOfElements(array,aa){
	let aa = function isBigEnought;

	console.log(array.filter(isBigEnought));
	console.log();
}



// isBigEnought(array)

// console.log(isBigEnought(array));

// console.log(array.filter(isBigEnought));

numberOfElements(array)