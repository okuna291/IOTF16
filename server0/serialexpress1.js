var bodyParser = require('body-parser');
var express = require("express");
var app = express();
var port = 8000;
var url='localhost'
var server = app.listen(port);
var io = require("socket.io").listen(server);
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var port = new SerialPort("/dev/ttyAMA0", {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n")
}, false); 

app.use(express.static(__dirname + '/'));
console.log('Simple static server listening at '+url+':'+port);




io.sockets.on('connection', function (socket) {
port.open(function(error) {

  if (error) {
    console.log('failed to open: ' + error);
  } else {
    // port.write("A");
    console.log('Serial open');
    port.on('data', function(data) {
    //console.log('data length: ' + data.length);
    console.log(data);
    result = data.split(',')
    result[3]


  
    // console.log(data);
    // console.log("You sent R=" + data.r + " G="+ data.g + " B="+ data.g);
    socket.emit('toScreen', { r: result[1], g: result[2], b: result[3] });     
  



    
    // port.write("A");
    });


}
  
});
});






//socket.io stuff
// io.sockets.on('connection', function (socket) {
//   socket.on('toColor', function (data) {
//     console.log(data);
//     console.log("You sent R=" + data.r + " G="+ data.g + " B="+ data.g);
//     socket.emit('toScreen', { r: data.r, g: data.g, b: data.b });     

//   });
// });