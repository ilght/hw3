var ballY = 0;
var ballSpeed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  ellipse(50, ballY, 30);

  ballY = ballY + ballSpeed;
  
  if (ballY > height) {
    ballSpeed = -ballSpeed;
  }
  
  if (ballY < 0) {
    ballSpeed = -ballSpeed;
  }
}
