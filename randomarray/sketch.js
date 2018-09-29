const SIZE 	  = 20;
const SPACING = 30;
var array     = [];

function shuffleArray ( array ) {
    for( let i = 0; i < array.length; i++ ) {
        k = array[i].length;
        while( k-- ){
            j = Math.floor(Math.random() * (array.length - 1));
            tempk = array[i][k];
            tempj = array[i][j];
            array[i][k] = tempj;
            array[i][j] = tempk;
        }
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	for ( let i = 0; i < SIZE; i++ ){
		array[i] = [];
		for ( let j = 0; j < SIZE; j++ ){
			array[i][j] = [ random()*255, random()*255, random()*255 ];
		}
	}
}

function draw() {
	background(0);
	for ( let i = 0; i < SIZE; i++ ){
		for ( let j = 0; j < SIZE; j++ ){
			var x = i * SPACING;
			var y = j * SPACING;

			let col = array[i][j];
			fill(col[0], col[1], col[2]);
			stroke(0);
			rect( x, y, SPACING, SPACING );
		}
	}

	fill(255);
	text("Click", mouseX-10, mouseY);
}

function mousePressed() {
	shuffleArray(array)
	console.log("shuffled");
}