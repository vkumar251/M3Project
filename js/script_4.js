const canvas = document.getElementById("testCanvas");
const ctx = canvas.getContext("2d");

let playerImg = new Image();
playerImg.src = "images/stocks/data/cloud_computing.jpg";

// draw player
let playerX = 50;
let playerY = canvas.height / 2;
const playerWidth = 50; // set player width
const playerHeight = 50; // set player height
const playerSpeed = 5; // set player speed

// draw obstacle
let obstacleX = canvas.clientWidth;
let obstacleY = canvas.height / 2;
const obstacleWidth = 20; // set obstacle width
const obstacleHeight = 20; // set obstacle height
const obstacleSpeed = 3; // set obstacle speed

let collision = false;

// render player image
function drawPlayer()
{
    if (playerImg.complete)
    {
        // check (img) player is loaded
        ctx.drawImage(playerImg, playerX, playerY, playerWidth, playerHeight);
    }
}

// render obstacle
function drawObstacle()
{
    ctx.fillStyle = collision ? "red" : "grey"; // change colour to red when collision occurs
    ctx.fillRect(obstacleX, obstacleY, obstacleWidth, obstacleHeight);
}

// move obstacle
function moveObstacle()
{
    obstacleX -= obstacleSpeed;
    if (obstacleX + obstacleWidth < 0)
    {
        obstacleX = canvas.width;
        obstacleY = Math.random() * canvas.height;
    }
}

// check obstacle collision
function checkCollision()
{
    if
    (
        playerX < obstacleX + obstacleWidth &&
        playerX + playerWidth > obstacleX &&
        playerY < obstacleY + obstacleHeight &&
        playerY + playerHeight > obstacleY
    )
    {
        collision = true;
    }
}

// update game
function updateGameArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawObstacle();
    moveObstacle();
    checkCollision();
    requestAnimationFrame(updateGameArea);
}

document.addEventListener("keydown", (event) => 
{
    if (event.key === "ArrowUp" && playerY > 0)
    {
        playerY -= playerSpeed;
    }
    else if (event.key === "ArrowDown" && playerY + playerHeight < canvas.height)
    {
        playerY += playerSpeed;
    }
});

updateGameArea();