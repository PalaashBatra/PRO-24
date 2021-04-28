class  Block{
    constructor(x, y,width,height) {
      var options = {
        'density': 0.8,
        'friction': 3,
        'restitution':30
      };
      this.body = Bodies.rectangle(x,y,this.width,this.height,options);
      this.width = width
      this.height = height
      World.add(world, this.body);
    };
    display(){
      var angle = this.body.angle
      var pos = this.body.position
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      strokeWeight(3);
      stroke('beige')
      fill('brown')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  