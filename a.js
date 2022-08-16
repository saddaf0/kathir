var bob
var bob_Img
var El_Macho1,El_Macho2
var El_Macho1_Img,El_Macho2_Img
var moon_img
var gameState=PLAY;
var PLAY = 0;
var END = 1;
var banana
var banana_Img
var score = 0;


function preload(){

bob_Img = loadImage('bear.png')
El_Macho1_Img = loadImage('El Macho Minions.png')
El_Macho2_Img = loadImage('Evil Minions.png')
moon_img = loadImage('bad.jpg')
banana_Img = loadImage('BANANANANNA.png');

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  evil = new Group();
  bob = createSprite(80,height-50, 50, 50);
  bob.addImage(bob_Img);
  bob.scale = 0.2;

  ground = createSprite(width,height,5000,20)
  ground.visible = false;

  banana = createSprite(width/2,height/2+200);
  banana.addImage(banana_Img);
  banana.scale = 0.2;
  banana.visible = false;
}

function draw() {
  background(moon_img);
  bob.collide(ground);

  
  textSize(30);
  
  fill('blue');
  
  text('score='+score,50,50);
  
  spawnObstacles();
 
  score = score + Math.round(getFrameRate()/60);
 
  if(keyIsDown(UP_ARROW)&&bob.y>850){
    bob.velocityY=-14;
  }
  bob.velocityY+=1;


  if (bob.overlap(evil)){
    gameState=END;

  }

  else if(gameState===END){
    bob.velocityY=0;
    isMoving=false;
    evil.setVelocityXEach(0);
    evil.setLifetimeEach(-1)
    
    textSize(50)
    fill('red')
    text('You Have Failed Your Mission, Gru Calls You Back',width/4-100,height/2)
    
    banana.visible = true;
    if(mousePressedOver(banana)){
      Reset();
    }
  }
 
  
  
  drawSprites();

  
}

  function spawnObstacles(){
  if (frameCount % 50 === 0){
    var evils = createSprite(width,height-50,10,50);
    evils.velocityX = -10;
    
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: evils.addImage(El_Macho1_Img);
               break;
       case 2: evils.addImage(El_Macho2_Img);
               break;
    
       default: break;
     }
        evils.scale=0.15;
        evils.lifetime = 300;
      evil.add(evils);
  }
}


  function Reset(){
    evil.destroyEach();
    gameState=PLAY;
    banana.visible=false;
    score = 0;
  
  }
  

