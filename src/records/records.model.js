const mongoose = require('mongoose');
const Schema = mongoose.Schema();


const recordsSchema = new Schema({
    cases: { type: Number, required: true },
    deaths: { type: Number, required: true },
    dateReceptor: { type: String, required: true },
    countryId: { type: mongoose.ObjectId, required: true }
});