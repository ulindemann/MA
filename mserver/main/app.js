//  mserver -- app.js, mainapp
//
var createError = require('http-errors');
var express = require('express');
var fileUpload = require('express-fileupload');
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const _ = require('lodash');

var indexRouter = require('./routes-fs');
var adminRouter = require('./routes-admin');

var app = express();

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('uploads'));

app.use ('/', indexRouter);
app.use ('/admin', adminRouter);

module.exports = app;
