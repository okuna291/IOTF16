var prompt = require('prompt');
var SerialPort = require("serialport");
var port = new SerialPort("/dev/ttyUSB0", {
  baudRate: 9600,
  parser: SerialPort.parsers.readline("\n")
});

prompt.start();
port.on('open', function() {

port.on('data', function(data) {
//console.log((data));
    var res = data.split(",");
console.log(res[0]);
    });

 
getinput();

});


function getinput(){
  prompt.get(['enterCommand'], function (err, result) {
  port.write(result.enterCommand, function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
   
    console.log("Command Entered = "+result.enterCommand);
    getinput();
    
  });
  });


}

// open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
})