class Stage3 extends Stage {
    constructor() {
      super();
      this.ground = this.createObj(Ground, 0, -cm.groundHeight, cm.gameWidth, cm.groundHeight);
  
      this.block1 = this.createObj(Block, 300, 450, 100, 30);
      this.block2 = this.createObj(Block, 100, 0, 100, 100);
      this.block3 = this.createObj(Block, 600, 200, 100, 30);
  
      this.moveBlock1 = this.createObj(MoveBlock, 200, 300, 50, 10, /*limit =*/100, 0);
      this.moveBlock2 = this.createObj(MoveBlock, 400, 150, 50, 10, /*limit =*/150, 1);
      this.moveBlock3 = this.createObj(MoveBlock, 400, 200, 50, 10, /*limit =*/150, 1.5);
  
      this.enemy1 = this.createObj(Enemy, 750, random(400,500));
      this.enemy2 = this.createObj(Enemy, 50, random(300, 600));
      this.enemy3 = this.createObj(Enemy, 850, random(50, 100));
      this.enemy4 = this.createObj(Enemy, 970, random(550, 600));

    }
}

class Stage4 extends Stage {
    constructor() {
      super();
      this.ground = this.createObj(Ground, 0, -cm.groundHeight, cm.gameWidth, cm.groundHeight);
  
      this.block1 = this.createObj(Block, 100, 300, 100, 30);
      this.block2 = this.createObj(Block, 200, 250, 100, 30);
      this.block3 = this.createObj(Block, 800, 400, 100, 30);
  
      this.moveBlock1 = this.createObj(MoveBlock, 700, 500, 50, 10, /*limit =*/50, 0);
      this.moveBlock2 = this.createObj(MoveBlock, 320, 170, 50, 10, /*limit =*/75, 0);
      this.moveBlock3 = this.createObj(MoveBlock, 550, 350, 50, 10, /*limit =*/170, 1);
  
      this.enemy1 = this.createObj(Enemy, 750, random(50,200));
      this.enemy2 = this.createObj(Enemy, random(10,50), random(550, 600));
      this.enemy3 = this.createObj(Enemy, 950, random(450, 500));
      this.enemy4 = this.createObj(Enemy, 20, random(100, 150));
      this.enemy4 = this.createObj(Enemy, random(400, 600), random(200, 250));

    }
  }

class Stage5 extends Stage {
    constructor() {
      super();
      this.ground = this.createObj(Ground, 0, -cm.groundHeight, cm.gameWidth, cm.groundHeight);
  
      //this.block1 = this.createObj(Block, 200, 450, 100, 30);
  
      this.moveBlock1 = this.createObj(MoveBlock, 150, 150, 50, 10, /*limit =*/100, 0);
      this.moveBlock2 = this.createObj(MoveBlock, 600, 400, 50, 10, /*limit =*/50, 0);
      this.moveBlock3 = this.createObj(MoveBlock, 300, 300, 50, 10, /*limit =*/50, 1.5);
      this.moveBlock3 = this.createObj(MoveBlock, 500, 300, 50, 10, /*limit =*/50, 1);
      this.moveBlock3 = this.createObj(MoveBlock, 700, 350, 50, 10, /*limit =*/50, 1.5);
  
      this.enemy1 = this.createObj(Enemy, random(900,1000), random(100,200));
      this.enemy2 = this.createObj(Enemy, random(30, 80), random(500, 600));
      this.enemy3 = this.createObj(Enemy, random(40, 90), random(400, 500));
      this.enemy4 = this.createObj(Enemy, random(50, 100), random(300, 400));
      this.enemy5 = this.createObj(Enemy, random(850,900), random(50,100));
      this.enemy6 = this.createObj(Enemy, random(0,900), random(50,500));

    }
  }