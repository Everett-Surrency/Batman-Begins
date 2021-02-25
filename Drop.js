class Drops{
  constructor(x, y){
    var options ={
      friction: 0.005,
      restitution: 0.0001
    }
    this.body = Bodies.circle(x, y, 5, options);
    this.x = x;
    this.y = y;
    World.add(world, this.body);
  }

  updateY(){     
    if(this.body.position.y > height){
      Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)});
    }
  }

  display(){
    var pos = this.body.position;
    push();
    fill("white");
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, 5,);
    pop();
  }
}