class Obstacle {
    constructor(x, y, radius) {
      var options = {
        restitution : 0.8,  
        friction : 0,
        isStatic: true,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      translate(pos.x, pos.y);
      rotate(angle);
      circleMode(radius);
      fill(255);
      circle(0, 0, this.radius);
      pop();
    }
  };
  