const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var rope 
let engine;
let world;
var ground;
var fruta

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope=new Rope (7,{x:245,y:30});
  
  textSize(50)
  var fruta_opitions={
    density:0.001
  
  }
  fruta=Bodies.circle(300,300,20,options);
  Matter.Composite.add(rope.body,fruta);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(100,10,1000);
  ground.show();
  
  Engine.update(engine);
  rope.show();

ellipse(fruta.position.x,fruta.position.y,20,20) ;
   
}







