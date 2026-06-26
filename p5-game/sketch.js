let playerX = 200;
let playerY = 200;
let score = 0;
let coins = [];
function setup() {
createCanvas(400, 400);
for (let i = 0; i < 5; i++) {
    coins.push({
        
    x: random(20, width - 20), 
    y: random(20, height-20)
});
}
}
function draw() {
background(220);
for (let i = 0; i < coins.length; i++) {
fill(255, 215, 0);
circle(coins[i].x, coins[i].y, 20);
}
fill(255);
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
for (let i = 0; i < coins.length; i++) {
let d = dist(playerX, playerY, coins[i].x, coins[i].y);
if (d < 30) {
    respawnCoin(i); 
    score = score + 1;
   }
}
fill(0);
textSize(32);
text("Coins: " + score, 10, 40);
}
function respawnCoin(i) {
    coins[i].x = random(20, width - 20);
    coins[i].y = random(20, height-20);
}
console.log("Six, seven!")