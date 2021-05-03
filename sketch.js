var tom,jerry,tomImg,jerryImg;
var mouseImg2,mouseImg3,mouseImg4;
var catImg2, catImg3, catImg4;





function preload() {
    //load the images here
    tomImg = loadAnimation("cat1.png");
    jerryImg = loadAnimation("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png")
    mouseImg3 = loadAnimation("mouse3.png");
    mouseImg4 = loadAnimation("mouse4.png");
    catImg2 = loadAnimation("cat2.png");
    catImg3 = loadAnimation("cat3.png");
    catImg4 = loadAnimation("cat4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom =  createSprite(500,500);
    tom.addImage(tomImg);
    jerry = createSprite(300,300);
    jerry.addImage(jerryImg);
}

function draw() {

    background("garden.png");
   
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){ 
        tom.velocityX=0;
        tom.addAnimation("catRunning",catImg2 );
        tom.scale=0.5;
        tom.changeAnimation("catRunning");

        jerry.remove();
        tom.addAnimation("tomLaughing", catImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLaughing");
        jerry.addAnimation("jerryLaughing", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLaughing");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown === LEFT_ARROW){
       jerry.addAnimation("jerryTeasing",mouseImg2)
       jerry.changeAnimation("jerryTeasing");
       jerry.frameDelay = 25;
}

if(keyDown === RIGHT_ARROW){
    jerry.addAnimation("jerryTeasing",mouseImg2)
    jerry.changeAnimation("jerryTeasing");
    jerry.frameDelay = 25;
}   




}
