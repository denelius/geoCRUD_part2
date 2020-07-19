var Product = require('../models/models');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.idx = function(req, res, next) {
  res.render('index', { title: 'Express' });
};


/* GET json data. */
exports.mapjson = function (req, res) {
    if (req.params.name) {
        Product.findOne({ name: req.params.name },{}, function (err, product) {
            if (err) return next(err);
            res.json(product);
        });
    }
};

/* GET layers json data. */
exports.maplayers = function (req, res) {
    Product.find({},{'name': 1}, function (err, product) {
        if (err) return next(err);
        res.json(product);
    });
};

/* GET Map page. */
exports.map = function(req,res) {
    Product.find({},{}, function(err, product){
        if (err) return next(err);
        res.render('map', {
            "jmap" : product,
            lat : 40.78854,
            lng : -73.95544
        });
    });
};

exports.product_create = function (req, res, next) {
    var product = new Product(
        // {
        //     name: req.body.name,
        //     price: req.body.price
        // }
        req.body
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_json = function (req, res) {
    Product.findOne({ name: req.params.name },{}, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_list = function (req, res) {
    Product.find({},{'geometry': 1}, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product updated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};