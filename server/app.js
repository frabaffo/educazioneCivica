var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var bloccoRouter = require('./routes/blocco');
var denutrizioneRouter = require('./routes/denutrizione');
var insicurezzaRouter = require('./routes/insicurezza');

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/blocco', bloccoRouter);
app.use('/denutrizione', denutrizioneRouter);
app.use('/insicurezza', insicurezzaRouter);

module.exports = app;
