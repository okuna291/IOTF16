var portscanner = require('portscanner');
var http        = require('http');
 
// ////// Checks the status of a single port 
// portscanner.checkPortStatus(8000, '127.0.0.1', function(error, status) {
//   ///// Status is 'open' if currently in use or 'closed' if available 
//   console.log(status)
// })
 
//// Find the first available port. Asynchronously checks, so first port 
// //// determined as available is returned. 
// portscanner.findAPortNotInUse(3000, 8000, '127.0.0.1', function(error, port) {
//   console.log('AVAILABLE PORT AT: ' + port)
// })
 


// //// Find the first port in use or blocked. Asynchronously checks, so first port 
// //// to respond is returned. 
// portscanner.findAPortInUse(3000, 9000, '127.0.0.1', function(error, port) {
//   console.log('PORT IN USE AT: ' + port)
// })

