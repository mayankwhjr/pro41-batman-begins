const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var umbrella
var batmanimg,thunder1img,thunder2img,thunder3img,thunder4img
function preload(){
    batmanimg=loadImage("images/batman.jpg")
    thunder1img=loadImage("images/thunder1.jpg")
    thunder2img=loadImage("images/thunder2.jpg")
    thunder3img=loadImage("images/thunder3.jpg")
    thunder4img=loadImage("images/thunder4.jpeg")
}

function setup(){
    createCanvas(250, 500);
    engine = Engine.create();
	world = engine.world;
	
	
    var maxDrops=100;
    
 umbrella= new Umbrella(100,240,50)
 umbrella.addImage("img5",batmanimg) 
 var drops=[]
 for(var i=0;i<maxDrops;i++){
drops.push(new Drop(random(0,400),random(0,400)));
} 
   drops.update();
   Engine.run(engine); 
}

function draw(){
    background("black");
    rand=Math.round(random(1,4))
    if(frameCount%80===0){
thunderCreatedFrame=frameCount;
thunder=createSprite(random(10,370),random(10,30),10,10)
switch(rand){
    case 1:thunder.addImage("img1",thunder1img);
    break;
    case 2:thunder.addImage("img2",thunder2img);
    break;
    case 3:thunder.addImage("img3",thunder3img);
break;
case 4:thunder.addImage("img4",thunder4img);
break;
default:break;


        
}
    }
    umbrella.display(); 
    
}   

