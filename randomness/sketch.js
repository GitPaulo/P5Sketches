const SIZE = 200;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255, 255, 255);
  
	// translucent stroke using alpha value
	stroke(0, 0, 0, 15);
}
  
function draw() {
	translate(width/2 - SIZE, height/2 - SIZE);

	// draw two random chords each frame
	randomChord();
	randomChord();
}
  
function randomChord() {
	// find a random point on a circle
	var angle1 = random(0, 2 * PI);
	var xpos1  = SIZE + SIZE * cos(angle1);
	var ypos1  = SIZE + SIZE * sin(angle1);
  
	// find another random point on the circle
	var angle2 = random(0, 2 * PI);
	var xpos2 = SIZE + SIZE * cos(angle2);
	var ypos2 = SIZE + SIZE * sin(angle2);
  
	// draw a line between them
	line(xpos1, ypos1, xpos2, ypos2);
}
  