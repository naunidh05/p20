var car
var wall
var weight,speed

function setup() {
  createCanvas(800,800);
  speed=random(55,90)
  weight= random(400,1500)
 wall= createSprite(700, 200, 10, 200);
 wall.shapeColor="white"
car=createSprite(10,200,10,10)
car.shapeColor="blue"
car.velocityX=speed
}

function draw() {
  background(0);
  if(wall.x-car.x<car.width/2+wall.width/2)  {
 car.velocityX=0
 var deformation=0.5*weight*speed*speed/22500
if(deformation>180) {

  car.shapeColor="red"
}
if(deformation<180 && deformation>100)  {

  car.shapeColor="orange"
}
if(deformation<100) {

  car.shapeColor="green"
}

  }
  

  drawSprites();
}