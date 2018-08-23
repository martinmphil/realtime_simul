const app = require('express')();
var express = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
var path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/home.html'));
});

app.get('/gm', (req, res) => {
 res.sendFile(path.join(__dirname + '/public/simul.html'));
//  res.sendFile(__dirname + '/public/test.html');
});



io.on('connection', (socket) => {
  socket.on('encounter info', (msg) => {
    io.emit('encounter info', msg);
  });
});

http.listen(port, () => {
  console.log('listening on *:' + port);
});