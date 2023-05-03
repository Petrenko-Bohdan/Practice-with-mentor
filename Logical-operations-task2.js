// Создать массив из 7 пользователей (пользователь - объект). 
// У каждого пользователя должно быть свойство ‘groups’ которое является массивом. 
// Это список групп в которых состоит пользователь (прим. [‘admins’, ‘moderators’, ‘content-manager’,....]). 
// Для пользователей в массиве некоторые группы должны повторятся некоторые нет. 
// Создать функцию которая принимает массив этих пользователей и возвращает унифицированный массив всех групп у пользователей в массиве.  



// const user = [
// 	{name:"user1", groups:['admins','team-leader','product-manager','moderators','content-manager','admins']},
// 	{name:"user2", groups:['admins','team-leader','product-manager','moderators','content-manager','team-leader']},
// 	{name:"user3", groups:['admins','team-leader','product-manager','moderators','content-manager','product-manager']},
// 	{name:"user4", groups:['admins','team-leader','product-manager','moderators','content-manager','moderators']},
// 	{name:"user5", groups:['admins','team-leader','product-manager','moderators','content-manager','content-manager']},
// 	{name:"user6", groups:['admins','team-leader','product-manager','moderators','admins','team-leader']},
// 	{name:"user6", groups:['admins','team-leader','product-manager','product-manager','content-manager','team-leader']},
// ]

// function unique(user){
// 	for (let i = 0; i < user.length; i++) {
// 		console.log(user[i].groups);
// 	}
// 	return Array.from(new Set(user));
// }

// console.log(unique(user));





const user = {name:'user1', groups:['admins','team-leader','product-manager','moderators','content-manager','admins']}


function unique(user){
	
	return Array.from(new Set(user));
}

console.log(unique(user.groups));


