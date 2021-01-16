class Form{
    constructor(){
        this.Input = createInput("EnterName");
        this.Button = createButton("PLAY");
        this.Greeting = createElement("h3");


    }

    display(){
        var Title = createElement("h1");
        
        this.Button.position(displayWidth/2+30,displayHeight/2);
        this.Input.position(displayWidth/2-40,displayHeight/2-80);
        Title.html("Car Racing Game");
        Title.position(displayWidth/2-50,0);

        this.Button.mousePressed(()=>{
            this.Input.hide();
            this.Button.hide();
            player.name = this.Input.value();
            playerCount++;
            player.index = playerCount;

            player.updateCount(playerCount); 
            player.update();
            this.Greeting.html("Hello  " + player.name);
            this.Greeting.position(displayWidth/2,displayHeight/4);   
            
        })
        
        
    }
    hideAll(){
        this.Input.hide();
        this.Button.hide();
        this.Greeting.hide();
    }
}