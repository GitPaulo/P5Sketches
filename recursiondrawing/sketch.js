const CANVAS_SIZE = 600;

function recursiveDrawing1(x, y, r) {
	ellipse(x, y, r, r);
	if (r > 2) {
		r *= 0.75;
		recursiveDrawing1(x, y, r);
	}
}

function recursiveDrawing2(x, y, r) {
	ellipse(x, y, r, r);
	if (r > 2) {
		recursiveDrawing2(x + r/2, y, r/2);
		recursiveDrawing2(x - r/2, y, r/2);
	}
}
  
function recursiveDrawing3(x, y, r) {
	ellipse(x, y, r, r);
	if(r > 8) {
		recursiveDrawing3(x + r/2, y, r/2);
		recursiveDrawing3(x - r/2, y, r/2);
		recursiveDrawing3(x, y + r/2, r/2);
		recursiveDrawing3(x, y - r/2, r/2);
	}
}

function recursiveDrawing4(x, y, len) {
	if (len >= 1) {
		recursiveDrawing4(x, y, x + len, y);
		y += 20;
		recursiveDrawing4(x, y, len/3);
		recursiveDrawing4(x + len*2/3, y, len/3);
	}
}	

function setup() {
	createCanvas(CANVAS_SIZE, CANVAS_SIZE);
}

var x = 10;
function draw() {
	background(45)
	recursiveDrawing3(width/2, height/2, x);
	x = x >= width/2 && 10 || x+1;
}