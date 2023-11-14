// models/URL.js
const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  longURL: { type: String, required: true },
  shortURL: { type: String, required: true, unique: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdDate: { type: Date, default: Date.now },
});

const URL = mongoose.model('URL', urlSchema);

module.exports = URL;
