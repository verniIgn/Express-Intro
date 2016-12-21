const express = require('express');
const app = express();

// app.METHOD(path, handler)
app.get('/', function (request, response) {
	response.send('Hello World');
})



// REST
app.get('/api/products', (req, res) => {
	let products = [
	{name: 'JavaScript Book', price: 9.99},
	{name: 'A Xmas bullshit', price: 19.99},
	]
	let stringified = JSON.stringify(products);
	res.send(stringified);
});






app.listen(3000, function() {
	console.log('Listening on port 3000. Go to http://localhost:3000/');
});

