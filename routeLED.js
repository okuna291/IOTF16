var finalhandler = require('finalhandler')
var http         = require('http')
var Router       = require('router')
var router = Router()
var GPIO = require('onoff').Gpio
var  led1 = new GPIO(17, 'out')
var  led2 = new GPIO(18, 'out')
var  led3 = new GPIO(22, 'out')


router.get('/LEDS/:xval/:yval/:zval', function (req, res) {
  //javascript object
  var data = {
        "myvalues": {
            "xval": req.params.xval,
            "yval": req.params.yval,
            "zval": req.params.zval
        }
    }; 

    led1.writeSync(parseInt(req.params.xval));
    led2.writeSync(parseInt(req.params.yval));
    led3.writeSync(parseInt(req.params.zval));
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  console.log(data);
  res.end("Values have been sent to server - x="+req.params.xval+" y="+req.params.yval+" z="+req.params.zval) 
});

 
var server = http.createServer(function(req, res) {
  router(req, res, finalhandler(req, res))
})
 
server.listen(8000)
