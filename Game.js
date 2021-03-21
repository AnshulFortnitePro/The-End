class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

player1 = createSprite(150, 200);
player1.addImage("player1", player1Image);
player2 = createSprite(600, 200);
player2.addImage("player2", player2Image);

players = [player1, player2];

start = createSprite(100, 600);
start.addImage("start", startImage);
start.scale = 0.5;


  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){

           
            image(trackImage, 0, -displayHeight*4, displayWidth, displayHeight*5);
            

      var index = 0;

      var x = 300;
      var y;

      for(var plr in allPlayers){

        index = index + 1 ;


        x = x + 300;

        y = displayHeight - allPlayers[plr].distance;
        players[index - 1].x = x;
        players[index - 1].y = y;

        if (index === player.index){
          players[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = players[index-1].y
        }
       

      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10;
      player.update();
    }

    if(player.distance>3400){

      gameState = 2;

    }


    drawSprites();
  }

  end(){

    console.log("Game Ended");
    background(gameoverImage);

  }

}
