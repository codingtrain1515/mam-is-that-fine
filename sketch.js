var bathImg;
var brushImg;
var drinkImg
var eatImg;
var gym1Img;
var gym2Img;
var backImg;
var moveImg;
var sleepImg;

var bath;
var brush;
var drink
var eat;
var gym1;
var gym2;
var back;
var move;
var sleep;
var astronaut;

function preload(){
bathImg = loadAnimation("bath1.png","bath2.png");
brushImg = loadAnimation("brush.png");
drinkImg=loadAnimation("drink1.png","drink2.png");
eatImg = loadAnimation("eat1.png","eat2.png");
gymI1mg = loadAnimation("gym1.png","gym2.png");
gym2Img=loadAnimation("gym11.png","gym12.png")
backImg = loadImage("iss.png");
moveImg = loadAnimation("move.png","move1.png");
sleepAnimation = loadAnimation( "sleep.png")
}

function setup() {
 createCanvas(1200, 600);
astronaut = createSprite(600,500);
  astronaut.addAnimation("moving",moveImg);
  astronaut.scale=0.1
 

  }
  
  function draw() {
    background(backImg);
    drawSprites();
  }
function keyPressed(){
    if(keyCode ===DOWN_ARROW){
      bath = createSprite(600,500)
        bath.addAnimation("bathing",bathImg);
        astronaut.visible=false;
        gym1.visible=false;
        gym2.visible=false;
        bath.scale=0.1;
    }
  if(keyCode ===UP_ARROW){
    gym1= createSprite(600,500)
        gym1.addAnimation("gyming",gymI1mg);

        astronaut.visible=false;
        bath.visible=false;
        gym2.visible=false;

gym1.scale = 0.1;
    }

    if(keyCode ===RIGHT_ARROW){
      gym2= createSprite(600,500)
          gym2.addAnimation("gyming",gymI1mg);
             astronaut.visible=false;
             bath.visible=false;
             gym1.visible=false
  gym2.scale = 0.1;
      }
  
}


