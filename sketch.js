var background1,background1Image,background2,background2Image,background3,background3Image
var background4,background4Image,background5,background5Image
var character, characterImage
var coin, coinImage
var fireball, fireballImage
var flower, flowerImage
var mushroom, mushroomImage
var obstacle, obstacleImage
var robot, robotImage
var spike, spikeImage
var start, startImage
var win, winImage
var next
var level1Image, level1
var level2Image, level2
var level3Image, level3
var level4Image, level4
var level5Image, level5
var levelselector, levelselectorImage
var START=1
var LEVEL=2
var LEVEL1=3
var LEVEL2=4
var LEVEL3=5
var LEVEL4=6
var LEVEL5=7
var LEVEL1WIN=8
var LEVEL1LOSE=9
var LEVEL2WIN=10
var LEVEL2LOSE=11
var LEVEL3WIN=12
var LEVEL3LOSE=13
var LEVEL4WIN=14
var LEVEL4LOSE=15
var LEVEL5WIN=16
var LEVEL5LOSE=17
var gameState="START"
var backgroundGroup
var backgroundImg 

function preload()
{
   background1Image=loadImage("background1.jpg")
   background2Image=loadImage("background2.jpg")
   background3Image=loadImage("background3.jpg")
   background4Image=loadImage("background4.jpg")
   background5Image=loadImage("background5.jpg")
   characterImage=loadAnimation("character1.png","character2.png","character3.png","character4.png","character5.png","character6.png","character7.png")
   coinImage=loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png")
   fireballImage=loadAnimation("fireball1.png","fireball2.png","fireball3.png","fireball4.png","fireball5.png","fireball6.png","fireball7.png")
   flowerImage=loadAnimation("flower.png")
   mushroomImage=loadAnimation("mushroom.png")
   obstacleImage=loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png","obstacle5.png","obstacle6.png")
   robotImage=loadAnimation("robot1.jpg","robot2.jpg","robot3.jpg","robot4.jpg","robot5.jpg","robot6.jpg","robot7.jpg")
   spikeImage=loadAnimation("spike1.png","spike2.png","spike3.png","spike4.png","spike5.png","spike6.png")
   //startImage=loadImage("start.png")
   playImage=loadImage("play1.png")
   winImage=loadAnimation("winflag.png")
   level1Image=loadImage("level1.png")
   level2Image=loadImage("level2.png")
   level3Image=loadImage("level3.png")
   level4Image=loadImage("level4.png")
   level5Image=loadImage("level5.png")
   levelselectorImage=loadImage("levelselector.png")

   backgroundImg =background1Image;
  }

function setup() {
  createCanvas(1200, 600);

  start=createSprite(600,400)
  start.addImage("start",playImage)
  start.scale=0.8
  start.visible =false


  levelselector1=createSprite(400,100);
  levelselector1.addImage(level1Image)
  levelselector1.scale =0.8
  levelselector1.visible =false

 levelselector2=createSprite(400,300);
 levelselector2.addImage(level2Image)
 levelselector2.scale =0.8
 levelselector2.visible =false

 levelselector3=createSprite(800,100);
 levelselector3.addImage(level3Image)
 levelselector3.scale=1
 levelselector3.visible =false

 levelselector4=createSprite(800,300);
 levelselector4.addImage(level4Image)
 levelselector4.scale =0.3
 levelselector4.visible =false

 levelselector5=createSprite(600,500);
 levelselector5.addImage(level5Image)
 levelselector5.scale =0.8
 levelselector5.visible =false

 
}

function draw() {

 
  background(backgroundImg);
  textSize(50)
  strokeWeight(10)
  fill("black")
  
// **********HOME PAGE************

  if(gameState==="START")
  {
   backgroundImg = background1Image;
   start.visible=true

   text("PLANET RUNNER", 400,100);
     
    if(mousePressedOver(start))
    {
      gameState="chooseLEVEL"
      start.visible =false
     }
  }
  
// **********CHOOSE LEVELS PAGE************
   else if(gameState==="chooseLEVEL")
   {
     //show levels
    activateLevelSelector();

    if(mousePressedOver(levelselector1))
      {
      gameState="LEVEL1"
       }

       if(mousePressedOver(levelselector2))
       {
       gameState="LEVEL2"
         }

        if(mousePressedOver(levelselector3))
        {
        gameState="LEVEL3"

         }

         if(mousePressedOver(levelselector4))
         {

         gameState="LEVEL4"

          }

          if(mousePressedOver(levelselector5))
          {

          gameState="LEVEL5"

           }

   }


else if(gameState==="LEVEL1")
   {
           //disable level buttons
           deactivateLevelSelector();
           text("LEVEL 1", 400,100);
   }

   else if(gameState==="LEVEL2")
   {
           //disable level buttons
           deactivateLevelSelector();
           text("LEVEL 2", 400,100);
   }

   else if(gameState==="LEVEL3")
   {
           //disable level buttons
           deactivateLevelSelector();
           text("LEVEL 3", 400,100);
   }

   else if(gameState==="LEVEL4")
   {
           //disable level buttons
           deactivateLevelSelector();
           text("LEVEL 4", 400,100);
   }

   else if(gameState==="LEVEL5")
   {
           //disable level buttons
           deactivateLevelSelector();
           text("LEVEL 5", 400,100);
   }



  drawSprites();
}


function deactivateLevelSelector()
{
  levelselector1.visible =false
  levelselector2.visible =false
  levelselector3.visible =false
  levelselector4.visible =false
  levelselector5.visible =false
}

function activateLevelSelector()
{
  levelselector1.visible =true
  levelselector2.visible =true
  levelselector3.visible =true
  levelselector4.visible =true
  levelselector5.visible =true
}