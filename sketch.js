
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

engine = Engine.create();
world = engine.world;

ground = new Ground(200,390,400,20);

var p={
  restitution: 1.0,
  friction: 1.0
}

ball=new Ball(100,100,10);

box = new Box(200,200,50,50);
box1=new Box(220,100,70,20);
}

function draw() {
  background("blue"); 
  Engine.update (engine);
rectMode(CENTER);
stroke("white");
fill("red");
  ground.display();
  box.display();
  box1.display();
  
  ball.display();
  
  //drawSprites();
}