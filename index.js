/**
 *
 */

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello, my express server!!!');
});

app.get('/new-route', (req, res) => {
	res.send('New route!!!');
});

app.get('/products', (req, res) => {
	res.json({
		id: 1,
		name: 'Product 1',
		price: 100,
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
