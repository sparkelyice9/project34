//Create variables here
var happydog, Dog;
var database, foodS, foodStock;
var dogImg,dogImg1;

function preload()
{
  //load images here
  dogImg=loadImage("Images/Dog.png");
  dogImg1=loadImage("Images/happydog.png");
}

function setup() {
  database= firebase.database();
  createCanvas(500, 500);

  Dog = createSprite(250,250,10,10);
  Dog.addImage(dogImg);
  Dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
  
}


function draw() {  
background(46, 139, 87);

if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1);
}
  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('Food').update({
    Food:x
  })
}