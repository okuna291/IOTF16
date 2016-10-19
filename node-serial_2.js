var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var port = new SerialPort("/dev/ttyAMA0", {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n")
}, false); // this is the openImmediately flag [default is true]



port.open(function(error) {

  if (error) {
    console.log('failed to open: ' + error);
  } else {
    port.write("A");
    console.log('Serial open');
    port.on('data', function(data) {
    //console.log('data length: ' + data.length);
    console.log(data);
    port.write("A");
    });


}
  
});












