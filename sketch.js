var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,groundBody
var bottom,left,right,bottombody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(400, 655 , 800,10);
	groundSprite.shapeColor=color(255)

	
	bottom=createSprite(400,660,200,10);
	left=createSprite(300,615,10,100);
	right=createSprite(500,615,10,100);
fill("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	groundBody = Bodies.rectangle(400,655,800,10,{isStatic:true})
	World.add(world,groundBody);

	bottombody = Bodies.rectangle(400,660,200,10,{isStatic:true})
	World.add(world,bottombody);

	//Create a Ground

	if(packageSprite.isTouching(groundSprite)){
Matter.Body.setStatic(packageBody,true)

	}
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  drawSprites();



}
function keyPressed(){

if(keyCode==DOWN_ARROW){
		Matter.Body.setStatic(packageBody,false)
	}

	
}




