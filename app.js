const express = require('express');
const app = express();
const hero = require('./router/hero');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/mongotest');

app.use('/api', hero);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000, () => {
  console.log('app listen on port 3000');
});
