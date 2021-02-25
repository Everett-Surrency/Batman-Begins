class Umbrella{
  constructor(x, y){
    var options = {
      isStatic : true,
      friction: 0
    }
    this.body = Matter.Bodies.circle(x, y, 95, options);
    World.add(world, this.body);  

    var boy = createSprite(200, 450, 20, 20);
    boy.addAnimation("walking", boyWalking);
    boy.scale = 0.42;
    boy.setCollider("rectangle", 0, 0, boy.width - 450, boy.height - 170);
  }

  display(){
    drawSprites();
  }
}