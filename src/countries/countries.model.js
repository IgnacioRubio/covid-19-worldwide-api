const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const countriesSchema = new Schema({
  name: { type: String, unique: true, required: true, dropDups: true }, 
  geo: { type: String, required: true },
  code: { type: String, required: true },
  continent: { type: String, required: true }
});


module.exports = mongoose.model('Countries', countriesSchema);