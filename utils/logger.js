const winston = require('winston'),
      expressWinston = require('express-winston'),
      path = require('path'),
      config = require('../config.js');

//
// Requiring `winston-papertrail` will expose
// `winston.transports.Papertrail`
//
require('winston-papertrail').Papertrail;

require('winston-mongodb').MongoDB;
winston.add(winston.transports.MongoDB, {
  db: config.database
});

let logsPath = path.join(__dirname, '../logs');

let transports = [
  new (winston.transports.Console)({
        colorize: true,
        timestamp: true
  })
];

if (config.nodeEnv === ('production' || 'staging')) {
  transports.push( new winston.transports.Papertrail({
    host: 'logs.papertrailapp.com',
    port: 12345,
    colorize: true
  }));

  // transports.push( new winston.transports.MongoDB({
  //   level: 'debug',
  //   dbUri: config.database
  // }));
}

exports.requestLogger = type => {
  if (config.nodeEnv === 'development') {
    transports.push(new (winston.transports.File)({
      filename: logsPath + '/' + config.nodeEnv + '_' + type + '_log.log',
      colorize: true,
      timestamp: true
    }));
  }
  

  return expressWinston.logger({
    transports: transports,
    msg: 'HTTP: {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}',
    json: false
  });
};

exports.errorLogger = () => {
  return expressWinston.errorLogger({
    transports: transports,
    level: 'error'
  });
};

exports.logger = () => {
  return new (winston.Logger)({
    transports: transports
  });
};