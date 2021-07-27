var trex, trex_running, edges;
var groundImage,ground;
var invisibleground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")

}

function setup()
{console.time()
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  ground = createSprite(200,180,600,20);
  ground.addImage("ground",groundImage)

  invisibleground = createSprite(200,190,600,20);
  invisibleground.visible=false
  
  console.timeEnd();
}


function draw()  
{
  //set background color 
  background("white");
  
  ground.velocityX = -2
  //logging the y position of the trex
 // console.log(trex.y)
  if(ground.x<0){
    ground.x = ground.width/2
  }
  //jump when space key is pressed
  if(keyDown("space")&&trex.y>=100)
  {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisibleground);
  drawSprites();
  
}