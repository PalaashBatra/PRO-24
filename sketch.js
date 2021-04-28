const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(600,100);
    block = new Block(400,200,20,50)
    box = new Box(100,300,50,50)
    rubber = new Rubber(100,400,50)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    block.display()
    box.display()
    rubber.display()
}