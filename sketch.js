const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var bird1;
var log1, log2, log3, log4;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,600,70,70);
    box2 = new Box(980,600,70,70);
    box3 = new Box(800,550,70,70)
    box4 = new Box(980,550,70,70)
    box5 = new Box(890,450,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(890,600)
    pig2 = new Pig(890,550)
    bird1 = new Bird(300,300)
    log1 = new Log(890,550,300,PI/2)
    log2 = new Log(890,500,300,PI/2)
    log3 = new Log(845,400,150,PI/7)
    log4 = new Log(960,400,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    bird1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();

}