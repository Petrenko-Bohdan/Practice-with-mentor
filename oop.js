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

// 	getPrice(currency){
// 	 currency = this.price
// 		return this.#price = currency + ' $'
// 	}

// 	getInfo(){
// 		return this.#description
// 	}

	// get id(){
	// 	return this.#id
	// }
	// set id(value){
	// 	this.#id = value
	// }

	// get name(){
	// 	return this.#name
	// }
	// set name(value){
	// 	this.#name = value
	// }

	// get price(){
	// 	return this.#price
	// }
	// set price(value){
	// 	this.#price = value 
	// }

	// get description(){
	// 	return this.#description
	// }
	// set description(value){
	// 	this.#description = value
	// }

// }

// const phone = new Product({
	
// });

// phone.description = 'Test'

// phone.price = '1000'

// console.log(phone.getInfo());

// console.log(phone.getPrice());


// Создать классы Laptop, Headphone, Monitor которые будут наследоваться от базового Product и расширять 
// его свойствами характеристик  которые специфичны для каждого конкретного продукта(придумать самостоятельно).



// class Product{
// 	id;
// 	name;
// 	price;
// 	description;

// 	constructor(params){
// 		this.id = params.id;
// 		this.name = params.name;
// 		this.price = params.price;
// 		this.description = params.description;
// 	}
// }


// class LaptopProduct extends Product {
// 	Diagonal;

// 	constructor (params){
// 		super(params);
// 		this.Diagonal = params.Diagonal;
// 	}
// }

// class HeadphoneProduct extends Product {
	
// 	Color;

// 	constructor(params){
// 		super(params);
// 		this.Color = params.Color;
// 	}
// }

// class MonitorProduct extends LaptopProduct{
	
// 	Webcam;

// 	constructor(params){
// 		super(params);
// 		this.Webcam = params.Webcam;
// 	}
// }


// const product = new Product({
// 	id: '1',
// 	name: 'Samsung',
// 	price: '1111',
// 	description: "test 1",
// 	Diagonal: 0,
// 	Color: "White",
// 	Webcam: true,
// })

// const Laptop = new LaptopProduct({
// 	id: '2',
// 	name: 'Dell',
// 	price: '2222',
// 	description: "test 2",
// 	Diagonal: 15.6 ,
// 	Color: "Black",
// 	Webcam: false,
// });

// const Headphone = new HeadphoneProduct({
// 	id: '3',
// 	name: 'Xiaomi',
// 	price: '33',
// 	description: "test 3",
// 	Diagonal: 2 ,
// 	Color: "Black",
// 	Webcam: true,
// });

// const Monitor = new MonitorProduct({
// 	id: '4',
// 	name: 'MSI',
// 	price: '444',
// 	description: "test 4",
// 	Diagonal: 20 ,
// 	Color: "Black",
// 	Webcam: true
// });

// console.log(product);

// console.log(Laptop);

// console.log(Headphone);

// console.log(Monitor);


// Для Laptop, Headphone, Monitor переопределить метод getInfo и расширить
//  его информацией из свойства характеристик.


// class Product{
// 	id;
// 	name;
// 	price;
// 	description;

// 	constructor(params){
// 		this.id = params.id;
// 		this.name = params.name;
// 		this.price = params.price;
// 		this.description = params.description;
// 	}

// 	getInfo(){
// 		return this.description
// 	}
// }


// class LaptopProduct extends Product {
// 	Diagonal;

// 	constructor (params){
// 		super(params);
// 		this.Diagonal = params.Diagonal;
// 	}

// 	getInfo(){
// 		return this.Diagonal
// 	}
// }

// class HeadphoneProduct extends Product {
	
// 	Color;

// 	constructor(params){
// 		super(params);
// 		this.Color = params.Color;
// 	}

// 	getInfo(){
// 		return this.Color
// 	}
// }

// class MonitorProduct extends LaptopProduct{
	
// 	Webcam;

// 	constructor(params){
// 		super(params);
// 		this.Webcam = params.Webcam;
// 	}

// 	getInfo(){
// 		return this.Webcam
// 	}
// }


// const product = new Product({
// 	id: '1',
// 	name: 'Samsung',
// 	price: '1111',
// 	description: "test 1",
// 	Diagonal: 0,
// 	Color: "White",
// 	Webcam: true,
// })

// const Laptop = new LaptopProduct({
// 	id: '2',
// 	name: 'Dell',
// 	price: '2222',
// 	description: "test 2",
// 	Diagonal: 15.6 ,
// 	Color: "Black",
// 	Webcam: false,
// });

// const Headphone = new HeadphoneProduct({
// 	id: '3',
// 	name: 'Xiaomi',
// 	price: '33',
// 	description: "test 3",
// 	Diagonal: 2 ,
// 	Color: "Black",
// 	Webcam: true,
// });

// const Monitor = new MonitorProduct({
// 	id: '4',
// 	name: 'MSI',
// 	price: '444',
// 	description: "test 4",
// 	Diagonal: 20 ,
// 	Color: "Black",
// 	Webcam: true
// });

// console.log(product);

// console.log(Laptop);

// console.log(Headphone);

// console.log(Monitor);

// console.log(product.getInfo());
// console.log(Laptop.getInfo());
// console.log(Headphone.getInfo());
// console.log(Monitor.getInfo());


// Создать экземпляры дочерних классов и протестировать как работают геттеры и сеттеры, 
// методы getPrice и getInfo для каждого экземпляра класса. Результаты вывести в консоль.


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


// console.log(phone.getInfo());






class LaptopProduct extends Product {
	Diagonal;

	constructor (params){
		super(params);
		this.Diagonal = params.Diagonal;
	}

	getInfo(){
		return this.Diagonal
	}
}

class HeadphoneProduct extends Product {
	
	Color;

	constructor(params){
		super(params);
		this.Color = params.Color;
	}

	getInfo(){
		return this.Color
	}
}

class MonitorProduct extends LaptopProduct{
	
	Webcam;

	constructor(params){
		super(params);
		this.Webcam = params.Webcam;
	}

	getInfo(){
		return this.Webcam
	}
}


const product = new Product({
	id: '1',
	name: 'Samsung',
	price: '1111',
	description: "test 1",
	Diagonal: 0,
	Color: "White",
	Webcam: true,
})



const Laptop = new LaptopProduct({
	id: '2',
	name: 'Dell',
	price: '2222',
	description: "test 2",
	Diagonal: 15.6 ,
	Color: "Black",
	Webcam: false,
});

const Headphone = new HeadphoneProduct({
	id: '3',
	name: 'Xiaomi',
	price: '33',
	description: "test 3",
	Diagonal: 2 ,
	Color: "Black",
	Webcam: true,
});

const Monitor = new MonitorProduct({
	id: '4',
	name: 'MSI',
	price: '444',
	description: "test 4",
	Diagonal: 20 ,
	Color: "Black",
	Webcam: true
});

// console.log(product);

// console.log(Laptop);

// console.log(Headphone);

// console.log(Monitor);

// console.log(product.getInfo());
// console.log(Laptop.getInfo());
// console.log(Headphone.getInfo());
// console.log(Monitor.getInfo());



console.log(product.getPrice());
console.log(Laptop.getPrice());
console.log(Headphone.getPrice());
console.log(Monitor.getPrice());


console.log(product.getInfo());
console.log(Laptop.getInfo());
console.log(Headphone.getInfo());
console.log(Monitor.getInfo());
