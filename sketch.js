const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world , ground , ball  ; 

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var optionG ={
    isStatic:true
  }
  ground = Bodies.rectangle(400,390,800,20,optionG); 
  World.add(world,ground);
  var optionB ={
   restitution:0.5
  }

  ball = Bodies.circle(400,200,25,optionB);
  World.add(world,ball);
}

function draw() {
  background(132,198,243);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,50,50);
}