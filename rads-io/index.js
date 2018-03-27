var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Rx = require('rxjs');
var __dataDirectory = 'C:\\rads\\rads-api\\data\\';

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/it', function(req, res) {
  res.sendFile(__dirname + '/index_test.html');
});

io.on('connection', function(socket) {
  console.log('a user  connected');
  socket.on('message', function(msg) {
    if (msg.length === 0) { return; }
    var cmdStart = msg.indexOf('/');
    var cmdEnd = msg.indexOf(' ', cmdStart);
    var cmd = '';
    var serverCmd = '';
    var params = '';
    if (cmdStart === -1) {
      params = msg.toString();
    } else {
      if (cmdEnd === -1) {
        cmdEnd = msg.length;
      }
      cmd = msg.substring(cmdStart, cmdEnd);
      params = msg.substring(cmdEnd).trim();
      if (cmd === '/server') {
        cmdStart = cmdEnd;
        cmdEnd = params.indexOf(' ', cmdStart);
        if (cmdEnd === -1) {
          cmdEnd = params.length;
        }
        serverCmd = msg.substring(cmdStart, cmdEnd);
        params = params.substr(cmdEnd);
        queueServerCommand(serverCmd, params);
      }
    }
    if (cmd === '' || cmd === '/broadcast') {
      // message sent
      console.log('// message sent -- io.emit(\'message\', params);');
      io.emit('message', params);
    } else if (cmd === '/server') {
      // server command sent
      console.log('// server command sent -- socket.emit(\'message\', rsp);');
      var rsp = 'executed server command';
      socket.emit('message', rsp);
    } else {
      // client command sent
      console.log('// client command sent -- io.emit(\'command\', { "command": cmd, "params": params });');
      var rsp = 'sent command to clients';
      io.emit('command', { "command": cmd, "params": params });
      // client verification message sent
      console.log('// client verification message sent -- socket.emit(\'message\', rsp);');
      socket.emit('message', rsp);
    }
  });
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

var fs = require('fs');
console.log('setting up file system watcher on \'' + __dataDirectory + '\'.');
var watcher = fs.watch(__dataDirectory, {
  'persistent': true,
  'recursive': false
});
watcher.on('change', function(eventType, filename) {
  var idx = filename.lastIndexOf('.');
  var targetData = filename.substring(0, idx);
  io.emit('command', {
    'command': 'refresh',
    'targetType': 'dashboard',
    'eventType': eventType,
    'targetData': targetData
  })
});

http.listen(3000, function() {
  console.log('listening on *:3000 !');
});

function queueServerCommand(cmd, params) {
  return;
}
