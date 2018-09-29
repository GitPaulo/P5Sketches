const SIZE 			 = 800;
const MAX_ITERATIONS = 100;

function setup() {
	createCanvas(SIZE, SIZE);

	pixelDensity(1);
	loadPixels();

	for ( let x = 0; x < width; x++ ){
		for ( let y = 0; y < height; y++ ){
			var a = map( x, 0, width, -2, 2 );
			var b = map( y, 0, height, -2, 2 );

			var ca = a;
			var cb = b;
			var n  = 0;

			while( n < MAX_ITERATIONS){
				var aa = a * a - b * b;
				var bb = 2 * a * b;
				a = aa + ca;
				b = bb + cb;
				
				if ( a + b > 16 )
					break;

				n++;				
			}

			var bright = map( n, 0, MAX_ITERATIONS, 0, 255 );

			if ( n == MAX_ITERATIONS ){
				bright = 0;
			}

			var px = ( x + y * width ) * 4;
			pixels[ px + 0 ] = bright;
			pixels[ px + 1 ] = bright;
			pixels[ px + 2 ] = bright;
			pixels[ px + 3 ] = 255;
		}
	}

	updatePixels();
}

function draw() {}