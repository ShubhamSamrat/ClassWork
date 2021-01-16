var database,player,form,game;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var car1,car2,car3,car4,cars=[];


function setup(){
    database = firebase.database();
    createCanvas(displayWidth-40,displayHeight-140);
    console.log("1");
    game = new Game();
    console.log("2");
    game.getState();
    game.start();
    
}

function draw(){
    //background("white");
    if(playerCount==4){
        game.update(1);
    }
    if(gameState == 1){
        clear();
        game.play();
    }
    

}