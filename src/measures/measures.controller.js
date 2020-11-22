const Measures = require('./measures.model');

// FIND all items
exports.findAll = (req, res, next) => {
  Measures.find({}, (err, docs) => {
    if (err) return next(err);

    res.status(200).json(docs);
  });
}

// FIND items by countryId
exports.findByCountryId = (req, res, next) => {
  const countryId = req.params.id;

  Measures.find({ countryId: countryId }, (err, docs) => {
    if (err) return next(err);
    
    res.status(200).json(docs);
  });
}

// CREATE one item
exports.create = (req, res, next) => {
  const data = {
    code: req.body.code,
    description: req.body.description,
    dateStart: req.body.dateStart,
    dateEnd: req.body.dateEnd,
    countryId: req.body.countryId
  };

  Measures.create(data, (err, doc) => {
    if (err) return next(err);

    res.status(201).json(doc);
  });
};

// DELETE all items
exports.deleteAll = (req, res, next) => {
  Measures.deleteMany({}, (err) => {
    if (err) return next(err);

    res.sendStatus(204);
  });
};

// DELETE one item
exports.deleteById = (req, res, next) => {
  const id = req.params.id;

  Measures.deleteOne({ _id: id }, (err)=> {
    if (err) return next(err);

    res.sendStatus(204);
  });
};