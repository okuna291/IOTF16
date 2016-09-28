// led attached to 17(BCM)
var GPIO = require('onoff').Gpio,
    led = new GPIO(17, 'out');


//////////////////define the flash callback function///////////////////
function flash() {

  if(state == 1) {
    // turn LED on
    led.writeSync(1);
    state=0;
  } else {
    // turn LED off
    led.writeSync(0);
    state=1;
  }
}

// call flash in interval
state=0;
setInterval(function(){ 
  flash();
}, 3000);

