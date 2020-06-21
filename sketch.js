const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var obstacles = [];
var balls = [];
var ground, ground1, ground2, ground3, ground4, groundh;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(50,270,10,100);
  ground1 = new Ground(75,270,10,100);
  ground2 = new Ground(100,270,10,100);
  ground3 = new Ground(125,270,10,100);
  ground4 = new Ground(150,270,10,100);
  groundh = new Ground(400,200,20,800);

  for(var i = 75; i <= width; i= i + 50){
    obstcales.push(new Obstacle(i,75));
  }

  for(var i = 95; i <= width; i= i + 50){
    obstcales.push(new Obstacle(i,95));
  }

  for(var i = 115; i <= width; i= i + 50){
    obstcales.push(new Obstacle(i,155));
  }
}

function draw() {
  background(255,255,255);  
  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  groundh.display();
  obstacles.display();
  balls.display();
}