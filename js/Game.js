class Game {
  constructor() {}
  //BP
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  //BP
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  // TA
  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    player1 = createSprite(50,50);
    player1.addAnimation("player1animation", player1Img);
    player1.scale = 1;

    player2 = createSprite(80,50);
    player2.addAnimation("player2animation", player2Img);
    player2.scale = 1;

    players = [player1, player2];
  }

  

  //BP
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  

  //SA
  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(bgImg, 0, 0, width, height);

      //index of the array
      var index = 0;
      for (var plr in allPlayers) {
        index = index + 1;
        //use data form the database to display the cars in x and y direction
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;
        
        players[index-1].position.x = x;
        players[index-1].position.y = y;

      }

  
      this.handlePlayerControls();
   
      drawSprites();
    }
  }

  handlePlayerControls() {
    
    if (keyIsDown(UP_ARROW)) {
      player.positionY -= 10;
      player.update();
    }
    if (keyIsDown(DOWN_ARROW)) {
      player.positionY += 10;
      player.update();
    }
    if (keyIsDown(LEFT_ARROW)) {
      player.positionX -= 10;
      player.update();
    }
    if (keyIsDown(RIGHT_ARROW)) {
      player.positionX += 10;
      player.update();
    }
  }
}
