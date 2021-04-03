class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form();
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    player1.collide(edge[1]);
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    player2.collide(edge[1]);
    players=[player1,player2];

        }
    
    play(){
          form.hide();
                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index -1].y = y;
                       
                     if(index === player.index){
                       // code to display the player's name on the respective basket.
                      stroke(0);
                      fill("white");
                      textSize(20);
                      player.getName();
                       text(nomen , x-50, y);
                       
                       // code to display their score
                       player.getScore();
                       text("player1: "+score1, displayWidth/2-700, displayHeight/2-400);
                       text("player2: "+score2, displayWidth/2-700, displayHeight/2-300);
                     }
                 }
                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                  if (player.index !== null) {
                    for (var i = 0; i < fruitGroup.length; i++) {
                        if (fruitGroup.get(i).isTouching(players)) {
                            fruitGroup.get(i).destroy();
                            sound.play();
                            player.score += 1;
                            player.update; 
                        }
                    }
                  }
    }
    end(){
       console.log("Game Ended");
    }
}
