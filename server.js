const express = require('express');
const cors = require('cors');
const users = require('./data/users');

const PORT = 3050;
const app = express();

app.use(cors());

app.get('/users', (req, res) => {
	res.json(users);
});

app.listen(PORT, (err) => {
	console.warn('Server is started');
});
