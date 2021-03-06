// button is attaced to pin 4, led to 17
// modified from from adafuit https://learn.adafruit.com/node-embedded-development/events
var GPIO = require('onoff').Gpio,
    led = new GPIO(17, 'out'),
    button = new GPIO(4, 'in', 'both');



////////////////define the callback function/////////////////
function buttonRead(err, state) {
  
  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    console.log("BUTTON IS ON");
  } 

   if(state == 0) {
    console.log("BUTTON IS OFF");
  }
  
}

// pass the callback function to the
// as the first argument to watch()
button.watch(buttonRead);


