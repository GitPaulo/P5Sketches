const CHARACTER_SIZE = 20;
var streams 		 = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	for( let i=0; i <= windowWidth; i+=CHARACTER_SIZE*2 ) {
		var stream = new Stream( i, 0, floor(random( 8, 18	 )) ); 
		streams.push(stream);
	}
}

function draw() {
	background(0);
	textSize(CHARACTER_SIZE);
	drawMatrix();
}

function drawMatrix(){
	for (const key in streams) {
		var stream = streams[key];
		stream.render();
	}
}

function Character( x, y, si, a, b ){
	this.x = x;
	this.y = y;
	this.switchInterval = si;
	
	this.randomCharacter = function (){
		this.string = String.fromCharCode(
			0x30A0 + round(ceil(random(0, 96))) // 96 available characters in katakana unicode block
		);
	};

	this.render = function (){
		if ( !b ) {
			fill( 0, 110, 40, a );
		}else {
			fill( 200, 200, 200, a );
		}

		if ( frameCount % this.switchInterval == 0 )
			this.randomCharacter();
		
		text(this.string, this.x, this.y, 20, 20);
	}

	this.randomCharacter();
}

function Stream( x, y, speed ){
	this.x 		 = x;
	this.y	 	 = y;
	this.speed   = speed;
	this.symbols = [];
	this.total_chars = ceil(random(10, 40));

	for( let i = 0; i <= this.total_chars; i++ ){
		let symbol = new Character( this.x, this.y, ceil(random(1, 15)), map(i, 0, this.total_chars, 80, 255), this.total_chars == i );
		this.symbols.push(symbol);
		this.y += CHARACTER_SIZE + 1;
	}

	this.render = function () {
		for (const key in this.symbols) {
			var symbol = this.symbols[key];
			symbol.render();
			symbol.y += this.speed;
			
			if ( symbol.y > windowHeight )
				symbol.y = 0
		}
	}
}