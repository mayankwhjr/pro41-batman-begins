class Drop{
constructor(x, y) {
    var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(x, y,options)
    this.rain=5;
          
   
  }
  display(){
    var pos =this.body.position;
   
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    
    ellipseMode(RADIUS);
    
    fill("blue");
    ellipse(0, 0,this.r,this.r)
    
    pop();
  }
  update(){
    if(this.rain.position.y>height){
Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})
    }
  }
};
