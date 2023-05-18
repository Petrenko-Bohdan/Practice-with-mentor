// Создать базовый класс Product, который будет содержать поля общие для всех продуктов, такие как id, name, price, description. 
// Реализовать геттеры и сеттеры для этих свойств. 
// Для получения цены и описания создать методы getPrice(currency) и getInfo() соответственно. 



// class Product{
// 	#id;
// 	#name;
// 	#price;
// 	#description;

// 	constructor(params){
// 		this.#id = params.id;
// 		this.#name = params.name;
// 		this.#price = params.price;
// 		this.#description = params.description;
// 	}

// 	set getPrice(currency){
// 		this.#price = currency + ' $';
// 	}

// 	get getPrice(){
// 		return this.#price
// 	}


// 	set getInfo(){
// 		this.#description = console.log(this.#description);
// 	}

// 	get getInfo(){
// 		return this.#description
// 	}
// }

// const phone = new Product({
// 	id: '1',
// 	name: 'iPhone',
// });

// phone.getPrice = '1000';

// phone.getInfo = "Test";

// console.log(phone.getInfo);

// console.log(phone.getPrice);







// class Product{
// 	#id;
// 	#name;
// 	#price;
// 	#description;

// 	constructor(params){
// 		this.#id = params.id;
// 		this.#name = params.name;
// 		this.#price = params.price;
// 		this.#description = params.description;
// 	}

// 	getPrice(currency){
// 		return this.#price = currency
// 	}


// 	set currency(value){
// 		this.#price = value + ' $';
// 	}

// 	get currency(){
// 		return this.#price
// 	}
// }

// const phone = new Product({
	
// });

// phone.getPrice = '1000';

// phone.getInfo = "Test";

// console.log(phone.getInfo);

// console.log(phone.getPrice);









class Product{
	#id;
	#name;
	#price;
	#description;

	constructor(params){
		this.#id = params.id;
		this.#name = params.name;
		this.#price = params.price;
		this.#description = params.description;
	}

	getPrice(currency){
	 currency = this.price
		return this.#price = currency + ' $'
	}

	getInfo(){
		return this.#description
	}

	get id(){
		return this.#id
	}
	set id(value){
		this.#id = value
	}

	get name(){
		return this.#name
	}
	set name(value){
		this.#name = value
	}

	get price(){
		return this.#price
	}
	set price(value){
		this.#price = value 
	}

	get description(){
		return this.#description
	}
	set description(value){
		this.#description = value
	}

}

const phone = new Product({
	
});

phone.description = 'Test'

phone.price = '1000'

console.log(phone.getInfo());

console.log(phone.getPrice());
