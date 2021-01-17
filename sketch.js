const Engine =Matter.Engine;
const World =Matter.world;
const Bodies =Matter.bodies;

var engine,world;
var drops=[];
var rand;


function preload(){
     

}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;







   if(frameCount % 100 ===0){
       var drops=100;
 for( var i=0;i<100;i++){
     drop.push(new createdrop(random(0,400),ramdom(0,400)))
 }
 
 


 
}
}

function draw(){
    engine= Engine.update(engine);
    background(0)



    for(var i=0;i<dropes.length; i++){
        droup[i].showdroup();
        droup[i].update();
    }






    drawsprites();

}   

