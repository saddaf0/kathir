
var bob
var bob_Img
var El_Macho1,El_Macho2
var El_Macho1_Img,El_Macho2_Img
var moon_img
var gameState="play";

var banana
var banana_Img
var score = 0;
var evil

function preload(){
  bob_Img = loadImage('bear.png')
  El_Macho1_Img = loadImage('ElMachoMinions.png')
  El_Macho2_Img = loadImage('EvilMinions.png')
  moon_img = loadImage('bad.jpg')
  banana_Img = loadImage('BANANANANNA.png');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  evil = new Group();

  bob = createSprite(80,height-50, 50, 50);
  bob.addImage(bob_Img);
  bob.scale = 0.2;

  ground = createSprite(width/2,height-10,1800,20)
  ground.visible = true;

  banana = createSprite(width/2,height/2+200);
  banana.addImage(banana_Img);
  banana.scale = 0.2;
  banana.visible = false;
}


function draw(){
background(moon_img);
if(gameState=="play"){


  textSize(30);
  
  fill('blue');
  
  text('score='+score,50,50);
  
  spawnObstacles();
 
  score = score + Math.round(getFrameRate()/60);

  if(keyIsDown(UP_ARROW)){
    bob.velocityY=-14;
  }
  bob.velocityY+=1;

  if (evil.isTouching(bob)){
    gameState="end";

  }

}

 if(gameState=="end"){
score=0;
evil.setVelocityXEach(0)
}


bob.collide(ground);
drawSprites()


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


























