const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  auth: {
    user: 'deannapi',
    password: 'M@th3141'
  }
});

module.exports = mongoose.connection;