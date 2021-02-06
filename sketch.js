var bg;
var thing1,thing2,think3,thing4;
var square, edges;
function setup(){
    bg = createCanvas(800,600);
    thing1 = createSprite(0,580,360,30);
    thing1.shapeColor = rgb(0,0,255);
    thing2 = createSprite(295,580,200,30);
    thing2.shapeColor = rgb(255,255,0);
    thing3 = createSprite(515,580,200,30);
    thing3.shapeColor = rgb(255,0,0);
    thing4 = createSprite(740,580,220,30);
    thing4.shapeColor = rgb(0,255,0);
    square = createSprite(random(30,700),100,40,40);
    square.shapeColor = rgb(250,250,250);
    square.velocityX = 5;
    square.velocityY = 10;
}
function draw() {
    background(rgb(170,170,170));
    edges = createEdgeSprites();
    square.bounceOff(edges);
    if(thing1.isTouching(square) && square.bounceOff(thing1)){
        square.shapeColor = rgb(0,0,255);
    }
    if(thing2.isTouching(square)){
        square.shapeColor = rgb(255,255,0);
        square.velocityX = 0;
        square.velocityY = 0;
    }
    if(thing3.isTouching(square) && square.bounceOff(thing3)){
        square.shapeColor = rgb(255,0,0);
    }
    if(thing4.isTouching(square) && square.bounceOff(thing4)){
        square.shapeColor = rgb(0,255,0);
    }
    drawSprites();
}