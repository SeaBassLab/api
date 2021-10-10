const app = require('express')()

app.get('/', function (req, res) {
  return res.json({hello: 'dog'});
});

app.get('/marco', function (req, res) {
  return res.end("polo");
});

module.exports = app