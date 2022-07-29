var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie;

function preload()
{
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  zombie_img=loadImage("assets/zombie.png");
}

function setup()
 {
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg);
  bg.scale = 1.1;
  

   //creating the player sprite
   player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   player.addImage(shooterImg)
   player.scale = 0.3;
   player.debug = true;
   player.setCollider("rectangle",0,0,475,475);

   zombie=createSprite(displayWidth-100, displayHeight-300, 50, 50);
   zombie.addImage(zombie_img);
   zombie.scale = 0.10;
   zombie.debug = true;
   zombie.setCollider("rectangle",0,0,475,475);

   invisibleGround = createSprite(200,650,9000,10);
   //invisibleGround.visible = false;
}

function draw() {
  background("white"); 

  //moving the player up and down and making the game mobile compatible using touches
  if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
  player.y = player.y+30
  }


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

player.collide(invisibleGround);
obstacles();
drawSprites();

}

function obstacles()
{
   if(frameCount%100==0)
   {
    zombie=createSprite(displayWidth-100, displayHeight-300, 50, 50);
    zombie.addImage(zombie_img);
    zombie.velocityX=-1;
    zombie.scale = 0.10;
    zombie.debug = true;
    zombie.setCollider("rectangle",0,0,475,475);
   }
}
