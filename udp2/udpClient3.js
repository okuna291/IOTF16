var PORT = 33333;
var HOST = '192.168.1.126'; //change to servers ip address

var dgram = require('dgram');
//var message = new Buffer('My KungFu is Good!');
var prompt = require('prompt');
prompt.start();
var message;
var bool = 0;

var client = dgram.createSocket('udp4');
var clientName="";

var prompt = require('prompt');
var SerialPort = require("serialport");
var sport = new SerialPort("/dev/ttyACM0", {
  baudRate: 9600,
  parser: SerialPort.parsers.readline("\n")
});


sport.on('open', function() {

clientPrompt();
sport.on('data', function(data) {
    //console.log('data length: ' + data.length);
    
    
    if (clientName!=""){
    	console.log(data);
    	message = new Buffer(clientName+","+data);
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
				    if (err) throw err;
				    console.log('UDP message sent to ' + HOST +':'+ PORT); 
				});}

    });
});

sport.on('error', function(err) {
  console.log('Error: ', err.message);
})






function clientPrompt(){
	prompt.get(['clientName'], function (err, result){
	clientName=result.clientName;
	});//
	
	
}


function sendMessage() {

	


		
			// message = new Buffer(result.newMessage);

		
			// message = new Buffer(clientName+","+result.newMessage);

			
				client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
				    if (err) throw err;
				    console.log('UDP message sent to ' + HOST +':'+ PORT);
				    //bool == 1;
				    //client.close();
				    sendMessage();
				});
			
		
	

	
	
}

