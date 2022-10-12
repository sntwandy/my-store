/**
 *
 */

const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/filter', (req, res) => {
	res.send('You hit the filter endpoint!');
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	res.json({
		id,
		name: faker.commerce.productName(),
		price: parseInt(faker.commerce.price(), 10),
	});
});

module.exports = router;
