class Game{
    constructor(){}


    getState(){
        database.ref("gamestate").on("value",function(data){
            gameState = data.val();

        })
        
    }
    update(state){
        database.ref("/").update({
            gamestate:state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
            console.log("3");
            
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4];

    }
    play(){
        form.hideAll();
        textSize(30);
        text("Game Starts",120,100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            //var pos = 130;
            var index = 0;
            var x = 0;
            var y;
            for(var p in allPlayers){
               /* if(p == "player" + player.index){
                    fill("red")
                }else {
                    fill("black")
                }
                pos += 20;
                textSize(15);
                text(allPlayers[p].name+":"+ allPlayers[p].distance,120,pos);*/
                x += 200;
                y = displayHeight-allPlayers[p].distance;
                cars[index].x = x;
                cars[index].y = y;
                console.log(index);
                console.log(cars[index]);
                index++;
                
                
            }    
        }
        if(keyDown("up")&&player.index!=null){
            player.distance += 50;
            player.update();
        }
        drawSprites();
    }

}