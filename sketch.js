var play = 1;
var end = 0;
var gs = play;

var m , monkey_running
var bananaImage, obstacles, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var ob;
var ba,fruit;
var st = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  
  //creating the monkey
  m=createSprite(80,315,20,20);
  m.addAnimation("moving",monkey_running)
  m.scale=0.1;
  m.setCollider("rectangle",0,0,300,500);
  //m.debug = true;
  
  //making and moving the ground
  
  ground = createSprite(400,350,800,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  
}


function draw() {
  background(225)
  
  stroke("black")
  textSize(20)
  fill("black")
  st = Math.ceil(frameCount/frameRate());
  text("survival time: "+st ,125,25)
  
  
  if(gs === play)
    {
   
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  // to jjump when space key is  pressed
  if(keyDown("space")) {
        m.velocityY = -12;
    }
    
    //add gravity
    m.velocityY = m.velocityY + 0.8
    
  //so the monkey can stand on the  ground 
  m.collide(ground);
  
  
 obstacles();
 fruit();
  
 if(obstacleGroup.isTouching(m)){
        gs = end;
    }
}  
     
   if(gs === end) 
 {
       
    ground.velocityX = 0;
    m.velocityX = 0;
    m.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
       
 }
     
  
  
  
  drawSprites();
}


function obstacles() {
  //write code here to spawn the obstacles
  if (frameCount % 200 === 0) {
    ob = createSprite(600,310,40,10);
    ob.addImage(obstaceImage);
    ob.scale = 0.2;
     //assign lifetime to the variable
    ob.lifetime = 600;
    ob.velocityX = -2;
    
    obstacleGroup.add(ob)
  }
}


function fruit(){
    
    if (World.frameCount % 80 == 0) {
       
      ba = createSprite(600,200,20,20)
      ba.addImage(bananaImage)
      ba.y = Math.round(random(120,200));
      //ba.velocityX = -(8+(score/10));
      ba.velocityX = -2;
      ba.lifetime = 300;
      ba.scale = 0.1;
   
      FoodGroup.add(ba)
    
    }
  }

