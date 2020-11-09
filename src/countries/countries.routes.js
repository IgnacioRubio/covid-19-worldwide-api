const router = require('express').Router();
const ctr = require('./countries.controller');


// GET ALL RECORDS
router.get('/', ctr.findAll);

// GET A RECORD BY ID
router.get('/:id', ctr.findById);

// POST A RECORD
router.post('/', ctr.create);

// DELETE ALL RECORDS
router.delete('/', ctr.deleteAll);

// DELETE A RECORD BY ID
router.delete('/:id', ctr.deleteById);


// EXPORTS MODULE
module.exports = router;