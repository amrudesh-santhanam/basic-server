'use strict';

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var consolidate = require('consolidate');

var routes = require('./routes/index');

var app = express();
var server = require('http').createServer(app);


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    limit: '50mb'
}));

// view engine setup
app.engine('html', consolidate.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
