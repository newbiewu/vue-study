const mongoose = require('mongoose');
const heroSchema = mongoose.Schema({
  name: String,
  age: Number,
  sex: String,
  address: String,
  doWhat: String,
  imgArr: [],
  favourite: String,
  explain: String
}, { collection: 'test'});

const Hero = module.exports = mongoose.model('hero', heroSchema);
