
function setup() {
	createCanvas(400, 400);
	pixelDensity(1);
}

function draw() {
	background(45);
	loadPixels();  // R, G, B, A per pixels in a linear array = pixels

	for ( let x = 0; x < width; x++ ) {
		for ( let y = 0; y < height; y++ ){
			var pos = ( x + y * width ) * 4;
			pixels[pos]   = x;
			pixels[pos+1] = random(255);
			pixels[pos+2] = y;
			pixels[pos+3] = 255; 
		}
	}

	updatePixels();
}