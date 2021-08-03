class Stage1 extends Stage {
  constructor() {
    super();
    this.ground = this.createObj(Ground, 0, -cm.groundHeight, cm.gameWidth, cm.groundHeight);

    this.block1 = this.createObj(Block, 200, 0, 50, 100);
    this.block2 = this.createObj(Block, 250, 0, 50, 150);
    this.block3 = this.createObj(Block, 300, 0, 50, 200);
    this.block4 = this.createObj(Block, 350, 0, 50, 250);
    this.block5 = this.createObj(Block, 400, 0, 50, 300);

    this.moveBlock1 = this.createObj(MoveBlock, 200, 200, 50, 10, /*limit =*/100, 0);
    this.moveBlock2 = this.createObj(MoveBlock, 100, 200, 50, 10, /*limit =*/100, 1);

    this.Spike1 = this.createObj(Spike, 200, 100);
    this.Spike2 = this.createObj(Spike, 300, 200);

    this.enemy1 = this.createObj(Enemy, 750, 30);

    this.jumpingEnemy1 = this.createObj(JumppingEnemy, 100, 450);
  }
}