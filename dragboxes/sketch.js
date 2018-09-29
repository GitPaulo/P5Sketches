let BOX_LIMIT = 10;
var bbox;

function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(2);
	
	let bw = 100;
	let bh = 100;
	
	bbox = [];
	for ( let i = 1; i <= BOX_LIMIT; i++ ){
		bbox[i] = new Box(Math.random()*windowWidth + bw/2, Math.random()*windowHeight + bh/2, bw, bh)
	}
}
 
function draw() {
	background(237,34,93);
	
	for ( let i = 1; i < bbox.length; i++ )
		bbox[i].draw();
}

function mouseClicked(){
	for ( let i = 1; i < bbox.length; i++ )
		bbox[i].onClick();
}