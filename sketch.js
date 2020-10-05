var fixedRect, movingRect;
var gameObject1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(100,100,50,50);
  gameObject2=createSprite(100,200,50,50);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "orange";
    gameObject1.shapeColor = "orange";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "orange";
    gameObject2.shapeColor = "orange";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
  drawSprites();
}

