// Создать класс Product(продукт) который будет содержать в себе свойства: 
// id(уникальный идентификатор товара), name, description, price, weight, size. 
// Добавить метод который позволяет получить в разных валютах. 
// Тип валюта должен  передаваться аргументом (прим. ‘USD’, ‘EUR’, и т.п.). 

// class Product {
// 	id;
// 	name;
// 	description;
// 	price;
// 	weight;
// 	size;
// 	currency;
	
// 	constructor(params){
// 		this.id=params.id;
// 		this.name=params.name;
// 		this.description=params.description;
// 		this.price=params.price;
// 		this.weight=params.weight;
// 		this.size=params.size;
// 		this.currency=params.currency;
// 	}
	
	

// 	typeOfCurrency(currency){
// 		if (currency === 'USA'){
// 			return  this.price.USA
// 		}else if(currency === 'EUR'){
// 			return  this.price.EUR
// 		}
// 	}
// }


class Cart {
	product = [{
		id: '0',
		name: 'HP/4',
		description: 'Laptop/4',
		currency: 'USA',
		price: 400,
		weight: 1,
		size: 'Medium/4',	
	},		
	{
		id: '1',
		name: 'HP/4',
		description: 'Laptop/4',
		currency: 'USA',
		price: 400,
		weight: 1,
		size: 'Medium/4',	
	},
	{
		id: '2',
		name: 'HP/4',
		description: 'Laptop/4',
		currency: 'USA',
		price: 400,
		weight: 1,
		size: 'Medium/4',	
	},
	{
		id: '3',
		name: 'HP/4',
		description: 'Laptop/4',
		currency: 'USA',
		price: 500,
		weight: 1,
		size: 'Medium/4',	
	},
];

	// constructor(params){
	// 	this.product=params.product
	// };

	addToCart(add){
		this.product.push(add);
	};

	deliteFronBeginningCard(){
		this.product.shift()
	};

	deliteFronFinishCard(){
		this.product.pop()
	};

	deliteFronIndexCard(a,b){
		this.product.splice(a,b)
	};

	totalPrice(){
		let total = 0;

		for(let i=0; i<this.product.length; i++){
			total += this.product.price[i];
		}
		console.log(total);
	}


	// cartPriceWithDiscount{

	// };
	// shippingCost{

	// };

	lengthCart(){
		let a = this.product.length;
		console.log(a);
	};


	lengthuQiqueProductsInCart(){
		for (let i=0; i< this.product; i++){
			const filter=Array.from(new Set(this.product[i]))
			// this.product[i]=filter
			console.log(filter);
		}		
	};


}

// arraySum(product)


const cart1 = new Cart({});

cart1.totalPrice()

cart1.lengthCart()
console.log(cart1.lengthuQiqueProductsInCart());
cart1.lengthuQiqueProductsInCart()



cart1.addToCart({
		id: 'test',
		name: 'HP/3',
		description: 'Laptop/3',
		currency: 'USA',
		price: {USA: 200, EUR: 100},
		weight: 1,
		size: 'Medium/3',	
	})

cart1.deliteFronBeginningCard();

cart1.deliteFronFinishCard();

cart1.deliteFronIndexCard(3,2);








// const product1 = new Product ({
// 	id: '1',
// 	name: 'HP',
// 	description: 'Laptop',
// 	currency: 'USA',
// 	price: {USA: 200, EUR: 100},
// 	weight: 1,
// 	size: 'Medium',	
// });


// const product2 = new Product ({
// 	id: '2',
// 	name: 'Dell',
// 	description: 'Computer',
// 	currency: 'EUR',
// 	price: {USA: 300, EUR: 200},
// 	weight: 2,
// 	size: 'Big',	
// });

// product2.price = product2.typeOfCurrency('EUR');


// console.log(product2);


// console.log(cart1);

