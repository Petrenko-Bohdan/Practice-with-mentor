// Создать класс Product(продукт) который будет содержать в себе свойства: 
// id(уникальный идентификатор товара), name, description, price, weight, size. 
// Добавить метод который позволяет получить в разных валютах. 
// Тип валюта должен  передаваться аргументом (прим. ‘USD’, ‘EUR’, и т.п.). 

class Product {
	id;
	name;
	description;
	price;
	weight;
	size;
	currency;
	
	constructor(params){
		this.id=params.id;
		this.name=params.name;
		this.description=params.description;
		this.price=params.price;
		this.weight=params.weight;
		this.size=params.size;
		this.currency=params.currency;
	}
	
	

	typeOfCurrency(currency){
		if (currency === 'USA'){
			return  this.price.USA
		}else if(currency === 'EUR'){
			return  this.price.EURO
		}
	}
}


const product1 = new Product ({
	id: '1',
	name: 'HP',
	description: 'Laptop',
	currency: 'USA',
	price: {USA: 200, EURO: 100},
	weight: 1,
	size: 'Medium',	
});


const product2 = new Product ({
	id: '2',
	name: 'Dell',
	description: 'Computer',
	currency: 'EUR',
	price: {USA: 300, EURO: 200},
	weight: 2,
	size: 'Big',	
});




product1.price = product1.typeOfCurrency('USA');


console.log(product1);