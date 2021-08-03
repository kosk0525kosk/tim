class Block extends GameObject {
  constructor(x, y, w, h) {
    super(x, y);
    this.w = w;
    this.h = h;
  }

  display() {
    fill(200);
    rect(this.x, this.y, this.w, this.h);
  }
}

class MoveBlock extends Block {
  constructor(x, y, moveW, moveH, limit, judge) {
    super(x, y);
    this.w = moveW;
    this.h = moveH;

    this.mx = x;
    this.my = y;

    //動く範囲
    this.limit = limit;

    //動く速さ
    this.step = 1;

    //x,yどちらに動くかの判定
    this.judge = judge;
  }

  display() {
    fill(100);
    rect(this.x, this.y, this.w, this.h);
  }

  update() {
    if(this.judge == 1) {
      this.moveX();
    } else {
      this.moveY();
    }
  }

  moveX() {
    if(this.x >= this.mx + this.limit || this.x <= this.mx - this.limit) {
      this.step = this.step * -1;
    }
    this.x += this.step;
  }

  moveY() {
    if(this.y >= this.my + this.limit || this.y <= this.my - this.limit) {
      this.step *= -1;
    }
    this.y += this.step;
  }
}

class Spike extends Block {
  constructor(Sx, Sy) {
    super();
    //とげの座標
    this.Sx = Sx;
    this.Sy = Sy;

    //トゲの大きさ
    this.r = 30;
  }

  display() {
    fill(0);
    rect(this.Sx, this.Sy, this.r, this.r);
  }
}

class Lava extends Block {
  constructor(Lx, Ly) {
    this.Lx = Lx;
    this.Ly = Ly;
    this.Lw = Lw;
    this.h = 10;
  }

  display() {
    fill(200, 0, 0);
    rect(this.Lx, this.Ly, this.w, this.h);
  }
}

/*class Timer {
  constructor(time) {
    this.time = time;
  }

  Time = this.time.toString();
  document.write(time);
}*/