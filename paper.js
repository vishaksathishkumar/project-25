class paper {

constructor(x,y){

    var options = {
        'restitution':0.3,
        'friction':0,
        'density':1.2,
       // "isStatic":true
    }
    this.body = Bodies.circle(x, y, 50, options);
    this.radius = 100;
    World.add(world, this.body);
    this.image=loadImage("paper.png");

  }
  display(){
    var pos =this.body.position;
    push();
    imageMode(CENTER);
    fill("white");
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    image(this.image,0, 0, this.radius);
    this.image.scale=0.02
    pop();
  }
  

}



