'use strict';
const rookout = require('rookout/lambda');

exports.handler = rookout.wrap((event, context, callback) => {
  const tasks = [
    'Go to the bank',
    'Buy milk',
    'Send an email to my boss',
    'Look for a restaurant',
    'Prepare for the webinar'
  ];
  const randomNumber = Math.floor(Math.random()*tasks.length);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*' // Required for CORS support to work
    },
    body: JSON.stringify({
      task: tasks[randomNumber]
    }),
    isBase64Encoded: false
  };

  callback(null, response);
});
