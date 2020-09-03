const mongoose = require('mongoose');

const db = 'deannapi'
const pswd = encodeURIComponent('Mart3141')

const url = `mongodb://${db}:${pswd}@ds155596.mlab.com:55596/heroku_c9d38kpn`

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('mongoose success');
}).catch((e) => {
  console.log('mongoose error: ', e.message)
});

module.exports = mongoose.connection;