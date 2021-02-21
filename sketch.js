var paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	paperBall = new Paper(200,650,20);
	Base1 = new Base(600,750,150,20);
	Base2 = new Base(675,750,20,100);
	Base3 = new Base(525,750,20,100);
	GROUNDe = new ground(400,780,800,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paperBall.display();
  Base1.display();
  Base2.display();
  Base3.display();
  GROUNDe.display();
 
}



