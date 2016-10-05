var finalhandler = require('finalhandler')
var http         = require('http')
var Router       = require('router')
var path = require('path')
var fs = require('fs')
 
var router = Router()

router.get('/render', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('Render to response!')
})


router.get('/hello', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  // console.log("res")
  res.end('hello!')
})

router.get('/', function (req, res) {
	fs.readFile('./public/index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html); 
        res.write("Reads HTML file to response"); 
        res.end();  
}); 

})

 
var server = http.createServer(function(req, res) {
  router(req, res, finalhandler(req, res))
})
 
server.listen(8000)