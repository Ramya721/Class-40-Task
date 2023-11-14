// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  firstName: String,
  lastName: String,
  password: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  activationToken: String,
  resetToken: String,
  resetTokenExpiry: Date,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
