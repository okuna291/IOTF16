/*
 * @name Acceleration Ball Bounce
 * @description Move an ellipse around based on accelerationX and accelerationY values, and bounces when touch the edge of the canvas.
 */

// Position Variables
var x;
var y;
var red;
var blue;
var green;
// Speed - Velocity


// Acceleration


var vMultiplier = 0.007;
var bMultiplier = 0.6;

function setup() {
	createCanvas(500, 500);
	fill(0);
	red=255;
	blue=255;
	green=255;
	r=30;
	ax = 0;
	ay = 0;
	vx = 0;
	vy = 0;
	x=0;
	y=0;
}

function draw() {
	background(red,blue,green);
	ballMove();
	ellipse(x, y, r, r);
}

function ballMove() {

	// ax = accelerationX;
	// ay = accelerationY;

	vx = vx + ay;
	vy = vy + ax;
	y = y + vy * vMultiplier; 
	x = x + vx * vMultiplier;

	// Bounce when touch the edge of the canvas
	if (x < 0) { 
		x = 0; 
		vx = -vx * bMultiplier; 
	}
	if (y < 0) { 
		y = 0; 
		vy = -vy * bMultiplier; 
	}
	if (x > 500 - 20) { 
		x = 500 - 20; 
		vx = -vx * bMultiplier; 
	}
	if (y > 500 - 20) { 
		y = 500 - 20; 
		vy = -vy * bMultiplier; 
	}
	
}

