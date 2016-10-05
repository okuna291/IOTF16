var finalhandler = require('finalhandler')
var http         = require('http')
var Router       = require('router')
 
var router = Router()
router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('Node Router! --- NOTHING TO SEE HERE')

})

router.get('/test', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('You are in the test area!')
})

router.get('/value/:value', function(req, res) {
  res.end("the value entered is " +req.params.value);
});

router.get('/render/:xval/:yval/:zval', function(req, res) {
  res.end("XVAL= " + req.params.xval +" YVAL= "+ req.params.yval +" ZVAL= "+ req.params.zval);
});


router.get('/console/:xval/:yval/:zval', function (req, res) {
  //javascript object
  var data = {
        "myvalues": {
            "xval": req.params.xval,
            "yval": req.params.yval,
            "zval": req.params.zval
        }
    }; 
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  console.log(data);
  res.end("Values have been sent to server") 
});


 
var server = http.createServer(function(req, res) {
  router(req, res, finalhandler(req, res))
})
 
server.listen(8000)