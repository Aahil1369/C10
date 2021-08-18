var trex;
var edge;
var ground;
function preload()
{
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimage = loadImage("ground2.png");
}

function setup()
{ 
createCanvas(600,200);
trex = createSprite(50,160,30,50);
trex.addAnimation("running", trex_running);
edge = createEdgeSprites();
trex.scale=0.8;
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundimage);
ground.x=ground.width/2;

}

function draw()
{
  background("cyan"); 
  ground.velocityX = -2;

  console.log("trex runner");
  console.log(trex.y);
  
  if(ground.x<0)
  {
    ground.x=ground.width/2;
  }

  if(keyDown("space")){ 
    trex.velocityY = -10;
  }

  //gravity
  trex.velocityY = trex.velocityY +0.5;

  //floor
  trex.collide(ground);
  
  drawSprites();

}

























































