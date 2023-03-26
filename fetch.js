





function getPost() {
	fetch('http://localhost:3000/posts')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
}




async function getPostWhitAwait() {
	const response = await fetch('http://localhost:3000/posts');

	console.log(response);
}


async function getPostWhitAwaitTwo() {
	const response = await fetch('http://localhost:3000/posts');
	const movies = await response.json();
	return movies;
 }
 getPostWhitAwaitTwo().then(movies => {
	movies;
	console.log(movies); // полученный список фильмов
 });

getPost()

getPostWhitAwait()

getPostWhitAwaitTwo()
