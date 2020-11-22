const Records = require('./records.model');

// FIND all items
exports.findAll = (req, res, next) => {
  Records.find({}, (err, docs) => {
    if (err) return next(err);

    res.status(200).json(docs);
  });
}

// FIND one item by id
exports.findById = (req, res, next) => {
  const id = req.params.id;

  Records.findById(id, (err, doc) => {
    if (err) return next(err);
    
    res.status(200).json(doc);
  });
}

// FIND items by countryId
exports.findByCountryId = (req, res, next) => {
  const countryId = req.params.id;

  console.log("countryId: " + countryId);

  Records.find({ countryId: countryId }, (err, docs) => {
    if (err) return next(err);
    
    res.status(200).json(docs);
  });
}

// CREATE one item
exports.create = (req, res, next) => {
  const data = {
    cases: req.body.cases,
    deaths: req.body.deaths,
    dateReceptor: req.body.dateReceptor,
    countryId: req.body.countryId
  };

  Records.create(data, (err, doc) => {
    if (err) return next(err);

    res.status(201).json(doc);
  });
};

// DELETE all items
exports.deleteAll = (req, res, next) => {
  Records.deleteMany({}, (err) => {
    if (err) return next(err);

    res.sendStatus(204);
  });
};

// DELETE one item
exports.deleteById = (req, res, next) => {
  const id = req.params.id;

  Records.deleteOne({ _id: id }, (err)=> {
    if (err) return next(err);

    res.sendStatus(204);
  });
};