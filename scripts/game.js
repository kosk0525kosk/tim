let cm;
let gameManager;

function setup() {
  cm = new CoordinatesManager();
  gameManager = new GameManager()
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // データの処理
  gameManager.updateStatus();

  // 描画
  gameManager.display();
}

function keyPressed() {
  gameManager.keyPressed();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}