var PORT = 33333;
// var HOST = '192.168.1.144';
var HOST = '192.168.1.126';


var dgram = require('dgram');
var server = dgram.createSocket('udp4');


var express = require("express");
var app = express();//create instance of express
var eport = 8000;
var url='localhost'
var eserver = app.listen(eport);
var io = require("socket.io").listen(eserver);
app.use(express.static(__dirname + '/'));//serve diectory this file is in
console.log('Simple static server listening at '+url+':'+eport);


server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

io.sockets.on('connection', function (socket) {
server.on('message', function (message, remote) {
    console.log(remote.address+","+remote.port+','+ message);
    var mes=remote.address+","+remote.port+','+ message;
    socket.emit('message',{mes:mes})

});
});

server.bind(PORT, HOST);