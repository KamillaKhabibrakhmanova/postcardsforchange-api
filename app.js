'use strict'
// require('dotenv').config();
var express = require('express'),
spdy = require('spdy'),
fs = require('fs'),
https = require('https'),
mongoose = require('mongoose'),
logger = require('morgan'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
app = express(),
favicon = require('serve-favicon'),
config = require('./config'),
cors = require('cors'),
expressLogger = require('./utils/logger'),
expressValidator = require('express-validator'),
url = require('url'),
path = require('path'),
helmet = require('helmet');

const corsOptions = {
  //should remove this
  origin: function(origin, callback) {
    const whiteList = [
      "https://postcards4change-staging.herokuapp.com",
       "http://localhost:3000",
       "https://postcards4change.herokuapp.com",
       "http://www.postcardsforchange.net"
      ];
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error(`Not allowed by CORS: ${origin}`))
    }
  }
}

app.use(helmet());

app.use(express.static('./app'));
//app.use(favicon('./favicon.ico'));


var uri = config.database;
var promise_options = { promiseLibrary: require('bluebird') };
var db = mongoose.createConnection(uri, promise_options);

mongoose.connect(config.database);

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(cookieParser());


//logging middleware
app.use(expressLogger.requestLogger('request'));
app.use(expressLogger.errorLogger());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type');
  res.setHeader('Content-Type', 'text/html, application/json');
  next();
});

app.use(cors(corsOptions))

app.use('/api/issues', require('./routes/issues'));
app.use('/api/postcards', require('./routes/postcards'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/representatives', require('./routes/representatives'));
app.use('/api/users', require('./routes/users'));

app.get('/api/', function(req, res, next){
	res.send('Hello World!');
});

if (process.env.NODE_ENV !== 'dev') {
  app.use('/', 
    express.static(path.resolve(process.cwd(), 'client/build'))
  );
  app.get('*', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.sendFile(path.resolve(path.resolve(process.cwd(), 'client/build'), 'index.html'))
  })
}

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.listen(process.env.PORT || 8080, function () {
  console.log('App listening on port 8080!');
});



module.exports = app;
