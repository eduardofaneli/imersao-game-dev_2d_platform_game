class Score {
  constructor() {
    this.scores = 0;
  }

  display() {
    textAlign("RIGHT");
    fill("#FFF");
    textSize(50);
    text(parseInt(this.scores), width - 30, 50);
  }

  addPoint() {
    this.scores += 0.2;
  }
}
