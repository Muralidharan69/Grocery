class Button{
    constructor(){
        this.title = createElement('h2');
        this.openButton = createButton('OPEN');
        this.closeButton = createButton('CLOSE');
    }

    start(){
        openRefrigerator = createSprite(displayWidth/2-200,displayHeight/2,displayWidth/2,displayHeight/2);
        openRefrigerator.addImage(openRefrigerator_Img);
        closeRefrigerator = createSprite(displayWidth/2,displayHeight/2,displayWidth/2,displayHeight/2);
        closeRefrigerator.addImage(closeRefrigerator_Img);
        filledRefrigerator = createSprite(displayWidth/2,displayHeight/2,displayWidth/2,displayHeight/2);
        filledRefrigerator.addImage(filledRefrigerator_Img);
    }

    hide(){
        this.openButton.hide();
        this.closeButton.hide();
        openRefrigerator.hide();
        closeRefrigerator.hide();
        filledRefrigerator.hide();
    }

    display(){
        this.title.html('Grocery Manager');
        this.title.position(displayWidth/2 + 200,0);
        this.openButton.position(displayWidth/2 - 100,displayHeight/2 -20);
        this.closeButton.position(displayWidth/2 - 100,displayHeight/2 - 40);

        if(this.openButton.visiblity === true){
             this.closeButton.hide();
        }

        if(this.closeButton.visiblity === true){
            this.openButton.hide();
       }

        this.openButton.mousePressed(()=>{
             //refrigerator.changeImage(openRefrigerator);
             //closeRefrigerator.hide();
             //filledRefrigerator.hide();
             this.openButton.hide();
          })

          this.closeButton.mousePressed(()=>{
            this.closeButton.hide();
          })

    }

}