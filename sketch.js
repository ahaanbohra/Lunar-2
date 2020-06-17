const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var lander;
var ground;
var sling;
function preload() {
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(400,400);
    lander=Bodies.rectangle(200,200,30,30,lander_options);
    World.add(world,lander);
    var lander_options={
    isStatic:true
    
    }
    sling= new SlingShot(lander.body,{x:200,y:200});
   
    console.log(lander);
    ground=Bodies.rectangle(200,400,400,10,{isStatic:true});
    World.add(world,ground);
    
}
function draw(){
    background("black");
    rectMode(CENTER);
    Engine.update(engine);
    rect(lander.position.x,lander.position.y,30,30);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,10);
    

}
function keyPressed(){
   
    if (keyCode===32){
      lander.position.y=lander.position.y-5; 
        
    }
}