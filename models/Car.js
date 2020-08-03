const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
	brand: String,
	model: String,
	year: Number,
	mileage: Number,
	photo_link: String,
	description: String,
});

module.exports = mongoose.model('Car', carSchema);
