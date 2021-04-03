var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var nomen;
var nomen2;
var nomen1;
var score1;
var score2;
var sound;
var edge;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
  sound = loadSound("GunShotSnglShotIn PE1097906.mp3");
}
function setup() {
  createCanvas(displayWidth -30, displayHeight -130);
  background("back_img");
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  edge = createEdgeSprites();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
     
   }
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     game.end();
   }
}