// authentication.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const generateToken = (user) => {
  return jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
};

const comparePasswords = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

module.exports = {
  generateToken,
  comparePasswords,
  hashPassword,
};
