var bodyParser = require('body-parser');
var express = require("express");
var app = express();
var port = 8000;
var url='localhost'
var server = app.listen(port);
var io = require("socket.io").listen(server);

app.use(express.static(__dirname + '/'));
console.log('Simple static server listening at '+url+':'+port);

//socket.io stuff
io.sockets.on('connection', function (socket) {
  socket.on('toColor', function (data) {
    console.log(data);
    console.log("You sent R=" + data.r + " G="+ data.g + " B="+ data.g);
    socket.emit('toScreen', { r: data.r, g: data.g, b: data.b });     

  });
});