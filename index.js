const express = require('express');
const models = require('./models');
const app = express();

//mongoose connect
require('./config/database');

//middleware
require('./config/middleware')(app)

app.listen(4000, () => {
  console.log('Listening');
});
