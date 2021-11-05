var sprite1;
function setup() {
  createCanvas(400,400);
  sprite1=createSprite(200, 200, 30,30);
}

function draw() 
{
  background("pink");


  if (keyIsDown(LEFT_ARROW)) {
    sprite1.x=sprite1.x-5;
}
if (keyIsDown(RIGHT_ARROW)) {
  sprite1.x=sprite1.x+5;
}
if (keyIsDown(UP_ARROW)) {
  sprite1.y=sprite1.y-5;
}
if (keyIsDown(DOWN_ARROW)) {
  sprite1.y=sprite1.y+5;
}

drawSprites();
}




