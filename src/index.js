/**
 *
 */

const express = require('express');
const routerApi = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;
routerApi(app);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
