var prompt = require('prompt');
var SerialPort = require("serialport");
var port = new SerialPort("/dev/ttyUSB0", {
  baudRate: 9600,
  parser: SerialPort.parsers.readline("\n")
});


port.on('open', function() {

port.on('data', function(data) {
    console.log((data));
    });

});



// open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
})