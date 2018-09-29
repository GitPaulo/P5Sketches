const MAX_FIREWORKS = 10;
var fireworks 		= [];
var gravity; 

function setup() {
	createCanvas(windowWidth, windowHeight);
	stroke(255);
	strokeWeight(4);

	gravity  = createVector(0, 0.5);
	for (let i = 0; i < MAX_FIREWORKS; i++ ){
		fireworks[i] = new Firework(300+i*50, height);
	}
}

function draw() {
	background(60);
	for (let i = 0; i < MAX_FIREWORKS; i++ ){
		var firework = fireworks[i];
		firework.applyForce(gravity);
		firework.update();
		firework.draw();

		if ( firework.pos.y > height ) {
			firework.applyForce(createVector(0, random(-5, -10)));
		}

		if ( firework.pos.y < height/2 && random() > 0.5 ){
			firework.explode(gravity);
		}
	}
}