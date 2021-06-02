var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite(0,580,360,35)
    block1.shapeColor="blue"

    //create 4 different surfaces
    block2=createSprite(295,580,200,35)
    block2.shapeColor="yellow"

   //create 4 different surfaces
block3=createSprite(515,580,200,35)
block3.shapeColor="black"

//create 4 different surfaces
block4=createSprite(740,580,220,35)
block4.shapeColor="red"

    //create box sprite and give velocity
    ball=createSprite(random(20,750),100,40,40)
    ball.shapeColor="orange"
    ball.velocityX=4;
    ball.velocityY=9;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
ball.bounceOff(edges)
if(block1.isTouching(ball)){
ball.shapeColor="Blue"
}
if(block2.isTouching(ball)){
    ball.shapeColor="yellow"
    ball.velocityX=0;
    ball.velocityY=0;
    }
    if(block3.isTouching(ball)){
        ball.shapeColor="black"
        }
        if(block4.isTouching(ball)){
            ball.shapeColor="red"
            }


    //add condition to check if box touching surface and make it box
    drawSprites()
}
