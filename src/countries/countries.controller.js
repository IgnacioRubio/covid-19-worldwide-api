const Countries = require('./countries.model');

// FIND all items
exports.findAll = (req, res, next) => {
  Countries.find({}, (err, docs) => {
    if (err) return next(err);

    res.status(200).json(docs);
  });
}

// FIND one item by id
exports.findById = (req, res, next) => {
  const id = req.params.id;

  Countries.findById(id, (err, doc) => {
    if (err) return next(err);
    
    res.status(200).json(doc);
  });
}

// CREATE one item
exports.create = (req, res, next) => {
  const data = {
    name: req.body.name,
    geo: req.body.geo,
    code: req.body.code,
    continent: req.body.continent
  };

  Countries.create(data, (err, doc) => {
    if (err) return next(err);

    res.status(201).json(doc);
  });
};

// DELETE all items
exports.deleteAll = (req, res, next) => {
  Countries.deleteMany({}, (err) => {
    if (err) return next(err);

    res.sendStatus(204);
  });
};

// DELETE one item
exports.deleteById = (req, res, next) => {
  const id = req.params.id;

  Countries.deleteOne({ _id: id }, (err)=> {
    if (err) return next(err);

    res.sendStatus(204);
  });
};