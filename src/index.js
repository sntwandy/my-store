/**
 *
 */

const express = require('express');
const faker = require('faker');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello, my express server!!!');
});

app.get('/products', (req, res) => {
	const products = [];
	const { size } = req.query;
	const limit = size || 10;

	// Generate data
	for (let i = 0; i < limit; i++) {
		products.push({
			id: faker.datatype.uuid(),
			name: faker.commerce.productName(),
			price: parseInt(faker.commerce.price(), 10),
			image: faker.image.imageUrl(),
		});
	}
	res.json(products);
});

app.get('/products/filter', (req, res) => {
	res.send('You hit the filter endpoint!');
});

app.get('/products/:id', (req, res) => {
	const { id } = req.params;

	res.json({
		id,
		name: faker.commerce.productName(),
		price: parseInt(faker.commerce.price(), 10),
	});
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
	const { categoryId, productId } = req.params;
	res.json({
		categoryId,
		productId,
	});
});

app.get('/users', (req, res) => {
	const { limit, offset } = req.query;
	if (limit && offset) {
		res.json({
			limit,
			offset,
		});
	} else {
		res.json({ message: 'No limit or offset' });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
