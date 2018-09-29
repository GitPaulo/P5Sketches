function Firework( x, y, vel){
    const NE_FIREWORKS = 50;

    this.pos = createVector(x, y);
    this.vel = vel || createVector(0, random(-15, -26));
    this.acc = createVector(0, 0);
    
    this.debree   = []
    this.exploded = false;

    this.applyForce = function (force){
        this.acc.add(force);
    }

    this.update = function (){
        this.vel.add(this.acc);
        this.pos.add(this.vel); 
        this.acc.mult(0);
    }

    this.draw = function(){
        if ( !this.exploded ){
            point(this.pos.x, this.pos.y);
        }else{
            for ( let i = 0; i < this.debree.size; i++ ){
                point(this.debree[i].pos.x, this.debree[i].pos.y);
            }
        }
    }

    this.explode = function ( gravity ){
        for ( let i = 0; i < NE_FIREWORKS; i++ ){
            this.debree[i] = new Firework(this.pos.x, this.pos.y, createVector(random(-15, -26), random(-15, -26))) ;
            this.debree[i].applyForce(gravity);
            this.debree[i].update();
        }
        
        this.exploded = true;
    }
}