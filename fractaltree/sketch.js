var   angle  = 100;
const LENGTH = 320;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(45);
	translate(width/2, height); // translate origin to center bottom
	branch(LENGTH);
}

function branch( len ){
	stroke(map(len, 0, LENGTH, 45, 255))
	line(0, 0, 0, -len);
	translate(0, -len); // move origin to the endpoint of first branch
	
	if ( len > 4 ) {
		push();
		rotate(angle); // 45 deg
		branch(len*0.7);
		pop();
		push();
		rotate(-angle*2);
		branch(len*0.7);
		pop();
	}
}