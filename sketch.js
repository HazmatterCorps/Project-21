var canvas;
var music;
var color1, color2, color3, color4, box;
var edges;
var leftedge, topedge, rightedge;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);



    //create 4 different surfaces
    color1=createSprite(100, 590, 200, 20);
    color1.shapeColor = "green";

    color2=createSprite(300, 590, 200, 20);
    color2.shapeColor="red";

    color3=createSprite(500, 590, 200, 20);
    color3.shapeColor="blue";

    color4=createSprite(700, 590, 200, 20);
    color4.shapeColor="yellow";

    //create box sprite and give velocity
    box=createSprite(random(20,750), 10, 20, 20)
    box.velocityX=6
    box.velocityY=6
    box.shapeColor="white"   
    
    leftedge=createSprite(0.5,290,1,580);
    leftedge.shapeColor=(169,169,169);
    topedge=createSprite(400,0.5,800,1);
    topedge.shapeColor=(169,169,169);
    rightedge=createSprite(799.5,290,1,580);
    rightedge.shapeColor=(169,169,169);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   createEdgeSprites();

   box.bounceOff(leftedge);
   box.bounceOff(topedge);
   box.bounceOff(rightedge);

   drawSprites();

    //add condition to check if box touching surface and make it box
    if(color1.isTouching(box) && box.bounceOff(color1)){
        box.shapeColor = "green";
        music.loop();
        }
    
    if(color2.isTouching(box) && box.bounceOff(color2)){
        box.shapeColor="red"
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
        }
    
    if(color3.isTouching(box) && box.bounceOff(color3)){
        box.shapeColor="blue"
        }
    
    if(color4.isTouching(box) && box.bounceOff(color4)){
        box.shapeColor="yellow"
        }






}





