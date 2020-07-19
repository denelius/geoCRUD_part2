var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var product = require('./routes/routes'); // Imports routes for the products
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set up mongoose connection
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
//var dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
//var dev_db_url = 'mongodb://denelius:pt_b00gingrip@ds129770.mlab.com:29770/productstutorial';

//var dev_db_url = 'mongodb://denelius:mlab_b00gingrip@ds151008.mlab.com:51008/node_build';
//var mongoDB = process.env.MONGODB_URI || dev_db_url;
//mongoose.connect(mongoDB);

mongoose.connect("mongodb://denelius:mlab_b00gingrip@ds151008.mlab.com:51008/node_build", { useNewUrlParser: true });

//mongoose.connect("mongodb://denelius:mlab_b00gingrip@ds151008.mlab.com:51008/node_build", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use(express.static(path.join(__dirname, 'public')));

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});