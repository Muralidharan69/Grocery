class Form{

    constructor(){
        this.input = createInput("Name of grocery");
        this.weight = createInput("Weight");
        this.vegetableButton = createButton('Vegetables');
        this.fruitButton = createButton('Fruits');
        this.cerealButton = createButton('Cereals');
        this.reset = createButton('Reset');
        this.previousButton = createButton('Back');
        this.confirmationButton = createButton('OK');
    }

    hide(){
        this.input.hide();
        this.weight.hide();
        this.vegetableButton.hide();
        this.fruitButton.hide();
        this.cerealButton.hide();
        this.previousButton.hide();
    }

    visiblity(){
        this.input.visiblity();
        this.weight.visiblity();
        this.vegetableButton.visiblity();
        this.fruitButton.visiblity();
        this.cerealButton.visiblity();
        this.previousButton.visiblity();
    }

    display(){
        this.input.position(displayWidth/2 + 600, displayHeight/2 - 100);
        this.weight.position(displayWidth/2 + 600, displayHeight/2 - 50);

        this.vegetableButton.position(displayWidth/2 + 600, displayHeight/2);
        this.vegetableButton.mousePressed(()=>{
            this.vegetableButton.hide();
            this.fruitButton.visiblity();
            this.cerealButton.visiblity();
        })

        this.fruitButton.position(displayWidth/2 + 600, displayHeight/2 + 50);
        this.fruitButton.mousePressed(()=>{
            this.fruitButton.hide();
            this.vegetableButton.visiblity();
            this.cerealButton.visiblity();
        })

        this.cerealButton.position(displayWidth/2 + 600, displayHeight/2 + 100);
        this.cerealButton.mousePressed(()=>{
            this.cerealButton.hide();
            this.vegetableButton.visiblity();
            this.fruitButton.visiblity();
        })

        this.confirmationButton.position(displayWidth/2 + 800, displayHeight/2 - 50);
    }

}