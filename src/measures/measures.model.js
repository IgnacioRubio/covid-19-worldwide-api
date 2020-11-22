const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const measuresSchema = new Schema({
    code: { type: String, required: true },
    description: { type: String },
    dateStart: { type: String, required: true },
    dateEnd: { type: String },
    countryId: { type: mongoose.ObjectId, required: true }
});


module.exports = mongoose.model('Measures', measuresSchema);