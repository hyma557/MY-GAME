const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var myEngine, myWorld;

var tank1, tank2, tank1I, tank2I;
var bg, bgi
function preload(){
  bgi = loadImage("images/background.png")
  tank1I = loadImage("images/imgt2.png")
  tank2I = loadImage("images/imgt1.png")

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  myEngine = Engine.create();
  myWorld= myEngine.world;
  
  bg = createSprite(width/2,height/2, width, height)
  bg.addImage(bgi)
  bg.scale = 1.15
  bg.velocityX = -2

tank1 = createSprite(width/2-550, height-50, 50, 50);
tank1.addImage(tank1I)
tank1.scale = 0.7
tank2 = createSprite(width-100, height-50, 50, 50);
tank2.addImage(tank2I)
tank2.scale = 0.7



}

function draw() {
 // background("lightgreen");  
  Engine.update(myEngine);

if(bg.x < 500){
  bg.x = width/2
}

  if(keyDown("D")||keyDown("d")){
    tank1.x += 6
  }

  if(keyDown("A")||keyDown("a")){
    tank1.x -= 6
  }

  if(keyDown(RIGHT_ARROW)){
    tank2.x += 6
  }

  if(keyDown(LEFT_ARROW)){
    tank2.x -= 6
  }
  
  drawSprites();

  

 
  }

  
