// Создать функцию которая имеет два параметра:
	// массив
	// функция по которой этот массив будет фильтроваться.
 //  Результатом функции должно быть количество элементов в массиве         которые соответствуют критериям в функции которая передается аргументом. 

const array = [1,2,3,4,5,6,7,8,9,10]
const filterFunction = (item)=>item>5
const filterFunctionMin = (item)=>item<5


function numberOfElements(array,functionOne){
	
	console.log(array.filter(functionOne).length);


	// const newArray=array.filter(functionOne);

	// console.log(newArray.length);
}

numberOfElements(array,filterFunction)
numberOfElements(array,filterFunctionMin)


