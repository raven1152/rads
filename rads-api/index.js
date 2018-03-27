const express = require('express');
const app = express();
const fs = require('fs');

app.get('/api', (req, res) => res.send('Hello World!'));

app.post('/api/static/:file', (req, res) => {
  var options = {
    root: __dirname + '/data/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  var path = '';
  path = req.params.file + '.json';
  console.log('Requested: ' + path);
  res.sendFile(path, options, function(err) {
    if (err) {
      res.status(404).end();
    } else {
      console.log('Sent: ', path);
    }
  });
});

app.post('/api/static/:file/:variation', (req, res) => {
  var options = {
    root: __dirname + '/data/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  var path = '';
  var variation = req.params.variation;
  if (variation === undefined) {
    path = req.params.file + '.json';
  } else {
    path = req.params.file + '.' + variation + '.json';
  }
  console.log('Requested: ' + path);
  res.sendFile(path, options, function(err) {
    if (err) {
      res.status(404).end();
    } else {
      console.log('Sent: ', path);
    }
  });
});

app.post('/api/user/:userid', (req, res) => {
  var flt = req.params.userid;
  var str = fs.read();
  var obj = JSON.parse(str);
  var filtered = obj.filter((rec) => {
    rec.userId = flt;
  });
  res.json(filtered);
});

app.post('/api/profile/:userid', (req, res) => {
  var flt = req.params.userid;
  var str = fs.read();
  var obj = JSON.parse(str);
  var filtered = obj.filter((rec) => {
    rec.profileKey = flt;
  });
  res.json(filtered);
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));
