
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var ground;
var backgroundImg;
var ball;

function preload(){
backgroundImg = loadImage("Images/GamingBackground.png")	
}

function setup() {
	createCanvas(1350,650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,450,2000,20);

	  box1 = new Box(900,100,50,50);
    box2 = new Box(900,100,50,50);
    box3 = new Box(900,100,50,50);
    box4 = new Box(900,100,50,50);
    box5 = new Box(900,100,50,50);
    box6 = new Box(900,100,50,50);

    box7 = new Box(830,100,50,50);
    box8 = new Box(830,100,50,50);
    box9 = new Box(830,100,50,50);
    box10 = new Box(830,100,50,50);
    box11 = new Box(830,100,50,50);
    box12 = new Box(830,100,50,50);

    box13 = new Box(750,100,50,50);
    box14 = new Box(750,100,50,50);
    box15 = new Box(750,100,50,50);
    box16 = new Box(750,100,50,50);
    box17 = new Box(750,100,50,50);
    box18 = new Box(750,100,50,50);
    box19 = new Box(750,100,50,50);
    box20 = new Box(750,100,50,50);

    hero = new Hero(200,200,80,80);
    rope = new Rope(hero.body,{x:500,y:50})
    monster = new Monster(1000,300,20,20)

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
background(backgroundImg);
Engine.update(engine);

	box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
  
    rope.display();
    hero.display();
    ground.display();
    monster.display();
 
 
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}



