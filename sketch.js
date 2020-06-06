var openRefrigerator,closeRefrigerator,filledRefrigerator;
var button;
var openRefrigerator_Img,closeRefrigerator_Img,filledRefrigerator_Img;
var form;

function preload(){
    openRefrigerator_Img = loadImage("sprites/Refrigirator3.png");
    closeRefrigerator_Img = loadImage("sprites/Refrigirator1.png");
    filledRefrigerator_Img = loadImage("sprites/Refrigirator2.png");
}

function setup(){
   // database = firebase.database();
    createCanvas(displayWidth-20,displayHeight-10);
   // refrigerator = createSprite(displayWidth/2,displayHeight/2,displayWidth/2,displayHeight/2);
    //refrigerator.addImage(closeRefrigerator);
    //refrigerator.scale = 2;
    button = new Button();
    button.start();

    form = new Form();
}

function draw(){
    background(255);
    button.display();
    form.display();
    drawSprites();

}

