const PHY_ANGLE = 137.5;
const DIVISOR   = 2;

var ang;
var n, c, ic, ew, eh;

function Reset(){
	clear();
	setup();
}

function DrawPhyllotaxis(){
	var b = mouseX
	let a = n * PHY_ANGLE;
	let r = c * sqrt(n);

	let x = r * cos(a) + width/DIVISOR;
	let y = r * sin(a) + height/DIVISOR;

	if ( x > width && y > height ){
		Reset()
		return;	
	}

	if (mouseIsPressed && mouseButton === LEFT) {
		c = map(mouseY, 0, height, 0, 20)
	}

	if (mouseIsPressed && mouseButton === RIGHT) {
		ic = map(mouseY, 0, height, 0, 10)
	}
	
	fill(map(mouseY, 0, height, 0, 255), map(mouseX, 0, width, 0, 255), 100)
	ellipse(x, y, ew, eh);

	// figure out canvas rotation!
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	background( 90, 90, 100 );
	noStroke();

	ang = 0;

	n  = 0;
	c  = 10;
	ic = 1;
	ew = 10;
	eh = 10;
}

function draw() {
	DrawPhyllotaxis();
	n = n + ic;
}


function mousePressed() {
	if (mouseButton === CENTER) {
		Reset();	
	}
}