var net	= require('net');

// *poke!*...is anybody home?
function poke(port,host) {
	var Socket  = net.Socket;
	var socket  = new Socket(),
		timeout = 400,
		status  = null,
		error   = null,
		connectionRefused = null;

	// <connect> / connection established
	socket.on('connect', function(){
		status = 'open';
		console.log(port + ' ' +status);
		socket.destroy();
	});

	// <timeout> / no-reponse from host
	socket.setTimeout(timeout);
	socket.on('timeout', function(){
		status = 'closed';
		socket.destroy();
		console.log(port + ' ' +status);
	});

	// <error> / connection error handling
	socket.on('error', function(exception){
		if (exception.code != "ECONNREFUSED")
			error = exception.code;
			console.log(error);
	});

	// <close> / connection closing
	socket.on('close', function(exception){
		if(exception && !connectionRefused){
			error = exception;
			console.log(error);
		}else if(status == 'closed'){
			error = null;
		}
	});

	// <connect> / where the magic happens
	socket.connect(port, host);
}

// specify port range(min,max)
function scan(min,max,host){
	while (min<=max){
		poke(min,host);
		min++;
	}
}

//example usage:
poke(80, 'google.com');
scan(440,443,'google.io');
scan(7998,8000,'127.0.0.1');