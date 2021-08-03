class Stage2 extends Stage {
    constructor() {
      super();
      this.ground = this.createObj(Ground, 0, -cm.groundHeight, cm.gameWidth, cm.groundHeight);
  
      this.block1 = this.createObj(Block, 200, 450, 100, 30);
      this.block2 = this.createObj(Block, 900, 0, 100, 100);
  
      this.moveBlock1 = this.createObj(MoveBlock, 150, 150, 50, 10, /*limit =*/100, 0);
      this.moveBlock2 = this.createObj(MoveBlock, 350, 200, 50, 10, /*limit =*/100, 0);
      this.moveBlock3 = this.createObj(MoveBlock, 550, 300, 50, 10, /*limit =*/100, 1);
  
      this.enemy1 = this.createObj(Enemy, 750, random(100,600));
      this.enemy2 = this.createObj(Enemy, random(50, 130), random(400, 600));
      this.enemy3 = this.createObj(Enemy, 950, random(150, 300));

    }
  }