const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, match: /^[0-9]{10}$/ },
  age: { type: Number, required: true, min: 1, max: 100 }
});

module.exports = mongoose.model('User', userSchema);