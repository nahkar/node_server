const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Car = require('./models/Car');

const PORT = 3050;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ! Connect Mongo
mongoose.connect('mongodb+srv://nahkar:13238429@cluster0.zgr2o.mongodb.net/cars', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;

dbConnection.on('error', (err) => {
	console.warn(`Connection error ${err}`);
});

dbConnection.on('open', () => {
	console.warn(`Connected to DB`);
});

app.use(cors());

app.get('/cars', async (req, res) => {
	let cars = [];
	try {
		cars = await Car.find({});
	} catch (error) {}
	res.json(cars);
});

app.get('/cars/:id', async (req, res) => {
	const { id } = req.params;
	let car;
	try {
		car = await Car.findById(id);
	} catch (error) {}
	res.json(car);
});

app.post('/cars', async (req, res) => {
	const { name } = req.body;
	const car = new Car({
		name,
	});
	let createdCar;
	try {
		createdCar = await car.save();
	} catch (error) {}
	res.json(createdCar);
});

app.delete('/cars/:id', async (req, res) => {
	const { id } = req.params;
	let car;
	try {
		car = await Car.findByIdAndRemove(id);
	} catch (error) {}
	res.json(car);
});

app.put('/cars/:id', async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	let car;
	try {
		car = await Car.findByIdAndUpdate(id, { name }, { new: true });
	} catch (error) {}
	return res.json(car);
});

app.listen(PORT, (err) => {
	console.warn('Server is started');
});
