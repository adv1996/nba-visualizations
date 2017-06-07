var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser')
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//setting files to the right directories
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));

app.listen(port);

require('./app/routes.js')(app);

console.log('Application up and running on port ' + port);