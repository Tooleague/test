let playerX = 200;
let playerY = 200;
let coinX = 100;
let coinY = 100;
let coinAlive = true;
let score = 0;
function setup() {
createCanvas(400, 400);}
function draw() {
background(220);
if (coinAlive) {
fill(255, 215, 0);
circle(coinX, coinY, 20);
fill(255);}
circle(playerX, playerY, 40);
circle(mouseX, mouseY, 50);
if (keyIsDown(RIGHT_ARROW)) {
    playerX = playerX + 5}
if (keyIsDown(LEFT_ARROW)) {
    playerX = playerX - 5}
if (keyIsDown(DOWN_ARROW)) {
    playerY = playerY + 5}
if (keyIsDown(UP_ARROW)) {
    playerY = playerY - 5}
let d = dist(playerX, playerY, coinX, coinY);
if (d < 30 & coinAlive) {
    coinAlive = false;
    score = score + 1;
   }
fill(0);
textSize(32);
text("Coins: " + score, 10, 40);
}
console.log("Six, seven!")