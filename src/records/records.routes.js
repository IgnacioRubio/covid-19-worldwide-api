const router = require('express').Router();
const ctr = require('./records.controller');


// GET ALL RECORDS
router.get('/', ctr.findAll);

// GET A RECORD BY ID
router.get('/:id', ctr.findById);

// GET ONE RECORD BY COUNTRY
router.get('/country/:id', ctr.findByCountryId);

// POST A RECORD
router.post('/', ctr.create);

// DELETE ALL RECORDS
router.delete('/', ctr.deleteAll);

// DELETE A RECORD BY ID
router.delete('/:id', ctr.deleteById);

// EXPORTS MODULE
module.exports = router;