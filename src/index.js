/**
 *
 */

const express = require('express');
const products = require('./data.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello, my express server!!!');
});

app.get('/products', (req, res) => {
	res.json(products);
});

app.get('/products/:id', (req, res) => {
	const { id } = req.params;
	const product = products.find((p) => p.id === id);

	if (product) {
		res.json(product);
	} else {
		res.json({ message: 'Product not found' });
	}
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
	const { categoryId, productId } = req.params;
	res.json({
		categoryId,
		productId,
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
