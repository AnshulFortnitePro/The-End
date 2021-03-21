var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var players;

var form, player, game;



var player1, player1Image;
var player2, player2Image;

var trackImage;

var start, startImage;

var gameoverImage;

var backgroundImage;

function preload(){

  player1Image = loadImage("rabbit.png");
  player2Image = loadImage("turtle.png");
trackImage = loadImage("bg.jpg");

startImage = loadImage("start.png")

gameoverImage = loadImage("gameover.png")

backgroundImage = loadImage("background.png");

}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


}


function draw(){
  background(backgroundImage);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){

    game.end();

  }


}
