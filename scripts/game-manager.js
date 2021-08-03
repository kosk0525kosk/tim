let Enemys_cnt = 0;
let timerStart = 120;
let timer = timerStart;

class GameManager {
  // ゲッター
  // 例えば get a() {return b} と設定すると this.a で b が帰ってくるようになる

  constructor() {
    this.initGame();
  }

  // 初期化
  initGame() {
    this.player = new Player(0, 0);

    this.stage = new Stage();
    if(stageNum == 1) {
      this.stage = new Stage1();
      timer = timerStart;
    } else if(stageNum == 2) {
      this.stage = new Stage2();
    } else if(stageNum == 3) {
      this.stage = new Stage3();
    } else if(stageNum == 4) {
      this.stage = new Stage4();
    } else if(stageNum == 5) {
      this.stage = new Stage5();
    }
    this.status = new Status();
  }

  // 描画
  display() {
    // 座標系の変換
    cm.transformCanvas();
    
    // ステージ
    this.stage.display();

    // プレイヤー
    this.player.display();

    // タイマー、残り敵数
    this.status.display();

    // 座標系をリセット
    resetMatrix();
  }

  // 状態を更新
  updateStatus() {
    // プレイヤー
    this.player.move();
    GameObject.collision(this.player, this.stage);
    this.player.shooting();

    // ステージ
    this.stage.update();

    // タイマー、残り敵数
    this.status.update();

    if(this.status.isStageClear) {
      if(stageNum < 5) {
        stageNum++;
        this.initGame();
      } else {
        mode = CLEAR;
      }
    } else if(this.status.isGameOver) {
      mode = GAMEOVER;
    }
  }

  // p5jsに認識させるkeyPressedメソッド
  keyPressed() {
    this.player.keyPressed();
  }
}

// 座標系等を担当するManager
class CoordinatesManager {
  // ゲーム画面
  get gameWidth() { return 1000; }
  get gameHeight() { return 700; }

  get groundHeight() { return 50; }
  get stageWidth() { return this.gameWidth; }
  get stageHeight() { return this.gameHeight - this.groundHeight; }

  get screenScale() {
    let p = 0.9;
    if(windowWidth/windowHeight > this.gameWidth/this.gameHeight) {
      return p*windowHeight/this.gameHeight;
    } else {
      return p*windowWidth/this.gameWidth;
    }
  }

  get screenWidth() { return this.gameWidth*this.screenScale; }
  get screenHeight() { return this.gameHeight*this.screenScale; }
  
  get screenMarginX() { 
    return (windowWidth - this.screenWidth)/2;  
  }

  get screenMarginY() {
    return (windowHeight - this.screenHeight)/2;  
  }
  
  get screenOx() { return this.screenMarginX; }
  get screenOy() { return windowHeight - this.groundHeight*this.screenScale - this.screenMarginY; }

  // 座標系の変換
  transformCanvas() {
    resetMatrix();

    rectMode(CORNER);
    textAlign(LEFT);

    // キャンバスの原点
    translate(this.screenOx, this.screenOy);
    scale(this.screenScale);
    
    // y軸の正の方向が上方向となるようにする
    scale(1, -1);
  }
}

// タイマー
class Status {
  constructor() {
    // 残り時間
    this.timer = timer;
    this.timerSize = 40;

    // 残り敵数
    this.enemyCntSize = 25;
    
    // フォント
    this.font = loadFont("assets/PixelMplus-20130602/PixelMplus12-Regular.ttf");
  }

  get isGameOver() {
    return this.timer <= 0;
  }

  get isStageClear() {
    if(this.timer > 0 && Enemys_cnt == 0) {
      return true;
    }
    return false;
  }

  get minStr() {
    return "0" + str(int(this.timer / 60));
  }

  get secStr() {
    return (this.timer % 60 < 10 ? "0" : "") + str(this.timer % 60);
  }

  get timeStr() {
    return this.minStr + ":" + this.secStr;
  }

  update() {
    if(frameCount % 60 == 0 && this.timer > 0) {
      this.timer--;
    }
  }

  display() {
    scale(1, -1);

    // マージン
    let margin = 10;

    // タイマー
    let timerSize = 50;
    textSize(timerSize);
    textFont(this.font);
    let timerStr = this.minStr + ":" + this.secStr;
    let timerX = cm.gameWidth - textWidth(timerStr) - margin;
    let timerY = -(cm.stageHeight - timerSize - margin);
    text(timerStr, timerX, timerY);

    // 残り敵数
    let enemyCntSize = 35;
    textSize(enemyCntSize);
    textFont(this.font);
    let enemyCntStr =  "残り敵数：" + Enemys_cnt;
    let enemyCntX = cm.gameWidth - textWidth(enemyCntStr) - margin;
    let enemyCntY = timerY + enemyCntSize + margin;
    text(enemyCntStr, enemyCntX, enemyCntY);

    scale(1, -1);
  }
}