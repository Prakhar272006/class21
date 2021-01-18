var fixed,moving ; 

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 100);
  fixed.shapeColor = "white";

  moving = createSprite(200,200,100,50)
  moving.shapeColor = "white"

  rect1 = createSprite (600,100,50,50)
  rect1.velocityY = 2
  rect2 = createSprite  (600,300,50,50)
  rect2.velocityY = -2
}

function draw() {
  background("black");  

  if(collision(fixed,moving) == true){
    moving.shapeColor = "red"
    fixed.shapeColor = "red"

  }
  else{
    moving.shapeColor = "white"
    fixed.shapeColor = "white"
  }
  bounceoff(rect1,rect2);
  moving.y = mouseY;
  moving.x = mouseX;
  drawSprites();
}
function collision(object1,object2){
  if(object1.x - object2.x <object1.width/2 + object2.width/2 &&
    object2.x - object1.x <object1.width/2 + object2.width/2&&
    object1.y - object2.y <object1.height/2 + object2.height/2&&
    object2.y - object1.y <object1.height/2 + object2.height/2){
      return  true

  }
  else{
    return false
  }

}

function bounceoff(object1,object2){
  if(object1.x - object2.x <object1.width/2 + object2.width/2 &&
    object2.x - object1.x <object1.width/2 + object2.width/2){
      object1.velocityX *=-1
      object2.velocityX *=-1
    }
    if(    object1.y - object2.y <object1.height/2 + object2.height/2&&
      object2.y - object1.y <object1.height/2 + object2.height/2){
        object1.velocityY *=-1
        object2.velocityY *=-1
      }

  }