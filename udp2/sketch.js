/*
 * @name Regular Polygon
 * @description What is your favorite? Pentagon? Hexagon? Heptagon? No? 
 * What about the icosagon? The polygon() function created for this example is 
 * capable of drawing any regular polygon. Try placing different numbers into 
 * the polygon() function calls within draw() to explore.
 */
 var r;
 var b;
 var s;
 var x1,x2,y1,y2;
function setup() {
  createCanvas(720, 400);
  b=200;
  r=255;
  x1=250;
  y1=150;
  x2=350;
  y2=150;
  s = "The quick brown fox jumped over the lazy dog.";
}


function draw() {
  background(red,green,blue);
  
  fill(r,200,6);
  ellipse(x1, y1, 50, 50);
  
  fill(255,100,b);
  ellipse(x2, y2, 50, 50);


textSize(12);
fill(255);
text(s, 200, 50, 250, 100); // Text wraps within text box
}

// When the user clicks the mouse
function mousePressed() {
  var lbut = dist(mouseX, mouseY, x1, y1);
	var rbut = dist(mouseX, mouseY, x2, y2);
  
  
  if (lbut < 50) {
    r = random(255);
    left();
  }
  
  if (rbut < 50) {
    b = random(255);
    right();
  }
}

