// led attached to 17(BCM)
var GPIO = require('onoff').Gpio,
    led = new GPIO(17, 'out');

//////////////////turn LED on - off - UNCOMMENT BELOW TO TURN ON / OFF ///////////////////
// led.writeSync(1); //turn on LED
// led.writeSync(0); //turn off LED
 

 
