var net = require('net');

// the machine to scan
var host = 'localhost';
// starting from port number
var start = 1;
// to port number
var end = 10000;
// sockets should timeout asap to ensure no resources are wasted
// but too low a timeout value increases the likelyhood of missing open sockets, so be careful
var timeout = 2000;

// the port scanning loop 
while (start <= end) {
    
    // it is always good to give meaningful names to your variables
    // since the context is changing, we use `port` to refer to current port to scan 
    var port = start;
    
    // we create an anonynous function, pass the current port, and operate on it
    // the reason we encapsulate the socket creation process is because we want to preseve the value of `port` for the callbacks 
    (function(port) {
        // console.log('CHECK: ' + port);
        var s = new net.Socket();
        
        s.setTimeout(timeout, function() { s.destroy(); });
        s.connect(port, host, function() {
            console.log('OPEN: ' + port);
            // we don't destroy the socket cos we want to listen to data event
            // the socket will self-destruct in 2 secs cos of the timeout we set, so no worries
        });
        
        // if any data is written to the client on connection, show it
        s.on('data', function(data) {
            console.log(port +': '+ data);
            s.destroy();
        });
        
        s.on('error', function(e) {
            // silently catch all errors - assume the port is closed
            s.destroy();
        });
    })(port);
    
    start++;
}