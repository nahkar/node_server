const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
	name: String,
});

module.exports = mongoose.model('Car', carSchema);
