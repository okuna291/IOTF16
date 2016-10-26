var redis = require('redis');
var client = redis.createClient(); //creates a new client
var HOST="127.0.0.1"; //this is local host
var PORT="6379";
var client = redis.createClient(PORT, HOST);
///CONNECTION
client.on('connect', function(err) {
    // console.log('connected');
});




// ////SET KEY:FRAME
// client.set('name', 'ayodamola', function(err, reply) {
//   console.log(reply);
// });

// ///GET KEY:FRAME
// client.get('name', function(err, reply) {
//     console.log(reply);
// });



// client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');



///SET COLLECTION
// client.hmset('AGES', {
// 	'Ayo': '20', 
// 	'Wole': '55', 
// 	'Kemi': '3'
// });

// ////GET HASH
// client.hgetall('AGES', function(err, object) {
//     console.log(object);
// });


// client.exists('AGES', function(err, reply) {

//     if (reply === 1) {
//         console.log('exists');
//     } else {
//         console.log('doesn\'t exist');
//     }
// });


/////SET COLLECTION
// client.hmset('STUDENTS', {
// 	'FirstName': 'Ayo', 
// 	'LastName': 'Okunseinde', 
// 	'Age': '3'
// });


////DELETING
// client.del('AGES', function(err, reply) {
//     console.log(reply);
// });

// client.hmset('aokunseinde@gmail.com', 'Password','yoyo','FirstName', 'Ayodamola', 'LastName', 'Okunseinde', 'Age', '55');
// client.exists('aokunseinde@gmail.com', function(err, reply) {
//     if (reply === 1) {
//         console.log('exists');
//     } else {
//         console.log('doesn\'t exist');
//     }
// });


// client.hgetall('ID001', function(err, object) {
//     console.log(object);
// });






// //////REGISTER
// var prompt = require('prompt');
// prompt.start();
// var email;

// prompt.get(['Email'], function (err, result) {
// email=result.Email;

//  client.exists(email, function(err, reply) {
//  	if (reply === 1) {
//  		if(email=="admin"){
//  			console.log("hello ADMIN, enter password")
//  			prompt.get(['Password'], function (err, result) {
//  				if(result.Password=="admin"){
//  					client.scan("0", function(err, reply) {
//  						for(var i=0;i<reply[1].length;i++){
//  							client.hgetall(reply[1][i], function(err, object) {
//  								console.log(object.Age);
//  							});
//  						}
//  					});
//  				}
//  			});
//  		}else{
//  			registered();}
//  		} else {
//  			notRegister();
//  		}
//  	});
// });



// function registered(){
// 	console.log("YOU ARE REGISTERED... please enter your Password");
// 	client.hgetall(email, function(err, object) {
// 		prompt.get(['Password'], function (err, result) {
// 			if(object.Password==result.Password){
// 				console.log(object);
// 			}else{
// 				console.log("Bad Password");
// 				registered();
				
// 			}
// 		});
// 	});
// }

// function notRegister(){
// 	console.log("NOT REGISTERED... would you like to register?");
// 	prompt.get(['Register'], function (err, result) {
// 		if(result.Register=="y"||"yes"||"YES"||"Y"){
// 			prompt.get(['Password',"FirstName","LastName","Age"], function (err, result) {	
// 				client.hmset(email, 'Password',result.Password,'FirstName', result.FirstName, 'LastName', result.LastName, 'Age', result.Age,function(err, reply){
// 					console.log(reply+" "+result.FirstName+" you are now REGISTERED");
// 				});
// 			});
// 		}else{
// 			console.log("BYE");
// 		}
// 	});
// }
