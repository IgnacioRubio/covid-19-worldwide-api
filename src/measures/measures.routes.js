const router = require('express').Router();
const ctr = require('./measures.controller');


// GET ALL RECORDS
router.get('/', ctr.findAll);

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