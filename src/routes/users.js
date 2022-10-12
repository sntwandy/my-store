/**
 *
 */

const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
	const users = [];
	const { size } = req.query;
	const limit = size || 10;

	// Generate data
	for (let i = 0; i < limit; i++) {
		users.push({
			id: faker.datatype.uuid(),
			name: faker.name.findName(),
			email: faker.internet.email(),
			avatar: faker.image.avatar(),
		});
	}
	res.json(users);
});

module.exports = router;
