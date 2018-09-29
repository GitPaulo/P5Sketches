class Box {
    constructor( x, y, w, h ){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.isdragging = false;
    }

    draw(){
        fill(230,230,230)
        
        if (this.isdragging){
            this.x = mouseX - this.w/2;
            this.y = mouseY - this.h/2;

            if ( this.x <= 0 )
                this.x = 0;
            
            if( this.x >= windowWidth - this.w )
                this.x = windowWidth - this.w;

            if ( this.y <= 0 )
                this.y = 0;

            if ( this.y >= windowHeight - this.h )
                this.y = windowHeight - this.h;

            fill(230,130,180)

        }else{
            fill(230,230,230)
        }
        
        rect(this.x, this.y, this.w, this.h) // center point is used not top left
    }

    checkCollision(bbox){
        for( let i = 1; i < bbox.length; i++ ){
           // Distance from center of box to another has to be less than width?
           // what about rectangles?? D: 
        }
    }

    onClick(){
        let mx = mouseX;
        let my = mouseY;
        let x = this.x;
        let y = this.y;

        if( mx >= x && mx <= x + this.w && my >= y && y + this.h >= my){
            this.isdragging = !this.isdragging; 
            console.log("dragging")
        }
    }
}