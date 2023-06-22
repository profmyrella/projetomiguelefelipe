var canvas;
var backgroundImage, bgImg, player1, player2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, player1, player2;
var players = [];
var espinhos,coração,estrela,meteoro,shuriken,morteplayer;
//BP
function preload() {
  coracaoImage = loadImage("./assets/coracao.png")
  estrelaImage = loadImage("./assets/estrela.png")
  meteoroImage = loadImage("./assets/meteoro.png")
  espinhosImage = loadImage("./assets/espinhos.png");
  shurikenImage = loadImage("./assets/shuriken.png")
  backgroundImage = loadImage("./assets/background.png");
  player1Img = loadAnimation("./assets/p13.png","./assets/p11.png","./assets/p12.png");
  player2Img = loadAnimation("./assets/player21.png","./assets/player22.png","./assets/player23.png");
  morteplayerImage = loadImage("./assets/morteplayer.png")
  bgImg = loadImage("./assets/mapa.png");
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(bgImg);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
