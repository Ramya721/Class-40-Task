// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/url_shortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use('/auth', authController);
app.use('/url', urlController);
app.use('/dashboard', dashboardController);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
