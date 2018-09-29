function setup() {
	createCanvas(windowWidth, windowHeight);
}

const EXPAND = 400;

//https://en.wikipedia.org/wiki/Rose_(mathematics)
function draw() {
	background(65);

	translate(width/2, height/2);

	for( let ang = 0; ang < 2*PI; ang += random()/100 ){
		var r = EXPAND * cos(7*ang);
		var x = r * cos(ang);
		var y = r * sin(ang);

		stroke(map(ang, 0, 2*PI, 100, 255), r, map(ang, 0, 2*PI, 200, 255));
		strokeWeight(4);
		point(x,y);
	}
}